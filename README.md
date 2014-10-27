# HelloApp - Sample App using the Presentation API Plugin

NOTICE: For a detailed **description** and **screenshots** of this app see the
project website: [http://fraunhoferfokus.github.io/cordova-plugin-presentation-helloapp/](http://fraunhoferfokus.github.io/cordova-plugin-presentation-helloapp/).

This sample app bases on the standard cordova sample app and extends it by a
multi-screen feature using the
[Cordova Presentation API Plugin](http://fraunhoferfokus.github.io/cordova-plugin-presentation/).
The goal of this app is to showcase the capability of the Presentation API that is
discussed by the [W3C Second Screen Presentation Working Group](http://www.w3.org/2014/secondscreen/).

Comments and contribution anytime welcome.

# Build and run intructions

Currently the [Cordova Presentation API Plugin](http://fraunhoferfokus.github.io/cordova-plugin-presentation/) supports Android and iOS.

## iOS instructions

It is assumed that you have Xcode installed and have cordova set up
properly.

```
$ git clone https://github.com/fraunhoferfokus/cordova-plugin-presentation-helloapp
$ cd cordova-plugin-presentation-helloapp
$ cordova platform add ios
$ cordova plugin add https://github.com/fraunhoferfokus/cordova-plugin-presentation
$ cordova build ios
$ cordova run ios
```

## Android instructions

It is assumed that you have Android SDK installed, path to SDK binaries set
and have cordova set up properly.

```
$ git clone https://github.com/fraunhoferfokus/cordova-plugin-presentation-helloapp
$ cd cordova-plugin-presentation-helloapp
$ cordova platform add android
$ cordova plugin add https://github.com/fraunhoferfokus/cordova-plugin-presentation
$ cordova build android
$ cordova run android
```

# Notice

This app is based on the default cordova hello world app. See NOTICE file.

# License

Copyright 2014 Fraunhofer FOKUS

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

### Contact

[Fraunhofer FOKUS - Competence Center FAME // Future Applications and Media](http://www.fokus.fraunhofer.de/en/fame/index.html)

