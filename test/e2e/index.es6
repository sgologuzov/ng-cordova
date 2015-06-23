import {Camera} from 'ng-cordova';

class App {
  constructor() {
    console.log('App start');
  }

  takePicture() {
    Camera.getPicture().then((data) => {
    });
  }
}


let a = new App();
a.takePicture();
