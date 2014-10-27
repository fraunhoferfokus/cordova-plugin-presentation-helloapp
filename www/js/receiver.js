/*
 * Copyright 2014 Fraunhofer FOKUS
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * AUTHORS: Martin Lasak <martin.lasak@fokus.fraunhofer.de>
 */

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var listeningElement = document.querySelector('#'+id+' .listening');
        var receivedElement = document.querySelector('#'+id+' .received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        app.initializePresentation();
    },
    session:null,
    initializePresentation: function() {
        navigator.presentation.onpresent = function(event){
            if(event.session){
                app.session = event.session;
                app.attachToSession();
            }
        };
    },
    timeoutHandle:null,
    attachToSession: function() {
        app.session.onmessage = function(msg){
            var pc = parseInt(msg);
            if(pc) {
                var pingCount = document.querySelector('#pingCount');
                pingCount.innerHTML=""+pc;
                app.session.postMessage(msg);

                var autocloseElement = document.querySelector('#deviceready .autoclose');
                if (app.timeoutHandle) {
                    clearTimeout(app.timeoutHandle);
                    autocloseElement.setAttribute('style', 'display:none;');
                }
                app.timeoutHandle = setTimeout(function(){

                      autocloseElement.setAttribute('style', 'display:block;');
                      app.timeoutHandle = setTimeout(function(){
                             autocloseElement.setAttribute('style', 'display:none;');
                             app.session.close();
                             },5000);
                       },5000);
            }
        };
        app.session.onstatechange = function(){
            var pingElement = document.querySelector('#deviceready .onpresent');

            if(app.session.state == "connected"){
                pingElement.setAttribute('style', 'display:block;');
            } else {
                pingElement.setAttribute('style', 'display:none;');
            }
        }
    }
};

app.initialize();
