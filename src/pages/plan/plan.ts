import { Component } from '@angular/core';
import { PageManager } from '../../utils/PageManager';
import { ModalManager } from '../../utils/ModalManager';
import {SubscribePage } from '../subscribe/subscribe';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

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
  modalManager: ModalManager;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl:ModalController) {
    super(navCtrl);
    this.modalManager = new ModalManager(modalCtrl);
    this.currentPlan = navParams.data;
    console.log(this.currentPlan);
  }

  subscribe = function(){
    this.modalManager.create(SubscribePage);
  }


}
