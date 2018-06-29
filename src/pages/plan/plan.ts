import { Component } from '@angular/core';
import { PageManager } from '../../utils/PageManager';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html',
})
export class PlanPage extends PageManager {
  currentPlan: object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super(navCtrl);
    this.currentPlan = navParams.data;
    console.log(this.currentPlan);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanPage');
  }

}
