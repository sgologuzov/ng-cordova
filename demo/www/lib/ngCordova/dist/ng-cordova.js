/*!
 * ngCordova
 * v0.1.17-alpha
 * Copyright 2014 Drifty Co. http://drifty.com/
 * See LICENSE in this repository for license information
 */
(function(){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _pluginsCamera = require('./plugins/camera');

_defaults(exports, _interopRequireWildcard(_pluginsCamera));

// install   :   cordova plugin add cordova-plugin-camera
// link      :   https://github.com/apache/cordova-plugin-camera

var Camera = (function () {
  function Camera() {
    _classCallCheck(this, Camera);
  }

  _createClass(Camera, null, [{
    key: 'getPicture',
    value: function getPicture(options) {
      return new Promise(function (resolve, reject) {
        if (!navigator.camera) {
          resolve(null);
        }

        navigator.camera.getPicture(function (imageData) {
          resolve(imageData);
        }, function (err) {
          reject(err);
        }, options);
      });
    }
  }, {
    key: 'cleanup',
    value: function cleanup() {
      return new Promise(function (resolve, reject) {
        navigator.camera.cleanup(function () {
          resolve();
        }, function (err) {
          reject(err);
        });
      });
    }
  }]);

  return Camera;
})();

exports.Camera = Camera;
//# sourceMappingURL=ng-cordova.js.map
})();