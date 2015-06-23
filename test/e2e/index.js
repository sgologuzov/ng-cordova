'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ngcordova = require('ngcordova');

var App = (function () {
  function App() {
    _classCallCheck(this, App);

    console.log('App start');
  }

  _createClass(App, [{
    key: 'takePicture',
    value: function takePicture() {
      _ngcordova.Camera.getPicture().then(function (data) {});
    }
  }]);

  return App;
})();

var a = new App();
//# sourceMappingURL=index.js.map