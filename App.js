/**
 * Copyright (c) 2015-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
} from 'react-native';

import {
  ViroSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';

var createReactClass = require('create-react-class');

/*
 * TODO: Add your API key below!!
 */
var apiKey = "7F38B12D-B5EC-4CA4-A4A6-4F54979D40E6";

var vrScenes = {
    '360 Photo Tour': require('./js/360PhotoTour/MainScene'),
    'Hello World': require('./js/HelloWorld/HelloWorldScene'),
    'Human Body': require('./js/HumanBody/MainScene'),
    'ProductShowcase': require('./js/ProductShowcase/ProductShowcase'),
    'Viro Media Player': require('./js/ViroMediaPlayer/ViroTheatre'),
    'Particle Emitters': require('./js/ParticleEmitters/ViroParticleTemplates'),
    'Physics Sample': require('./js/PhysicsSample/BasicPhysicsSample'),
}

var arScenes = {
  'AR Sample': require('./js/ARSample/HelloWorldSceneAR.js'),
  'Portals': require('./js/Portals/Portals.js'),
}

var showARScene = true;

var ViroCodeSamplesSceneNavigator = createReactClass({
  render: function() {

    if (showARScene) {
      return (
        <ViroARSceneNavigator
          initialScene={{
            scene: arScenes['Portals'],
          }}
          apiKey={apiKey} />
        );
    } else {
      return (
        <ViroSceneNavigator
          initialScene={{
            scene: vrScenes['Portals'],
          }}
          apiKey={apiKey} />
      );

    }
  }
});

module.exports = ViroCodeSamplesSceneNavigator;
