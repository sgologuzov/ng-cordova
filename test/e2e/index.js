System.register('index', ['ng-cordova'], function (_export) {
  'use strict';

  var Camera, App, a;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_ngCordova) {
      Camera = _ngCordova.Camera;
    }],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);

          console.log('App start');
        }

        _createClass(App, [{
          key: 'takePicture',
          value: function takePicture() {
            Camera.getPicture().then(function (data) {});
          }
        }]);

        return App;
      })();

      a = new App();

      a.takePicture();
    }
  };
});
//# sourceMappingURL=index.js.map