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
ping:1,
initializePresentation: function() {
    var presentationElement = document.querySelector('#deviceready .presentationReady');
    presentationElement.addEventListener("touchstart",function(){
                                         app.createNewSession();

                                         });

    var pingElement = document.querySelector('#deviceready .onstatechangeConnected');
    pingElement.addEventListener("touchstart",function(){
                                 if (app.session) {
                                 app.session.postMessage(""+app.ping);
                                 }

                                 });

    var closeElement = document.querySelector('#deviceready .close');
    closeElement.addEventListener("touchstart",function(){
                                  if (app.session) app.session.close();

                                  });

    navigator.presentation.onavailablechange = function(dict){
        if(dict.available){
            presentationElement.setAttribute('style', 'display:block;');
        } else {
            presentationElement.setAttribute('style', 'display:none;');
        }
    };
},
createNewSession: function() {
    if(app.session) {
        app.session.close();
    }
    app.session = navigator.presentation.requestSession("receiver.html");
    app.session.onmessage = function(msg){
        var pc = parseInt(msg);
        if(pc) {
            app.ping = pc + 1;
            var pingCount = document.querySelector('#pingCount');
            pingCount.innerHTML=""+app.ping;
        }
    };
    app.session.onstatechange = function(){
        var pingElement = document.querySelector('#deviceready .onstatechangeConnected');
        var closeElement = document.querySelector('#deviceready .close');
        var presentationElement = document.querySelector('#deviceready .presentationReady');

        if(app.session.state == "connected"){
            pingElement.setAttribute('style', 'display:block;');
            closeElement.setAttribute('style', 'display:block;');
            presentationElement.setAttribute('style', 'display:none;');
        } else {
            pingElement.setAttribute('style', 'display:none;');
            closeElement.setAttribute('style', 'display:none;');
            presentationElement.setAttribute('style', 'display:block;');
        }
    }
}
};

app.initialize();
