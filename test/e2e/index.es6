import {Camera} from 'ngcordova';

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
