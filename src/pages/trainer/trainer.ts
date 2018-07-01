import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrainerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trainer',
  templateUrl: 'trainer.html',
})
export class TrainerPage {

  trainerInfo : object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.trainerInfo = navParams.data;
      console.log(this.trainerInfo);
  }

  

}
