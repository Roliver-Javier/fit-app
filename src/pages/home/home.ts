import { Component } from '@angular/core';
import { NavController,ModalController} from 'ionic-angular';
import { PageManager } from '../../utils/PageManager';
import { ModalManager } from '../../utils/ModalManager';
import { PlanPage } from '../plan/plan';
import { HttpClient } from '@angular/common/http';
import { PlanService } from '../plan/plan-service';
import {SubscribePage } from '../subscribe/subscribe';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends PageManager {
  planList: object[];
  planService: PlanService;
  modalManager: ModalManager;
  
  constructor(public navCtrl: NavController,  public http: HttpClient,
              public modalCtrl: ModalController) {
    super(navCtrl);
    this.modalManager = new ModalManager(modalCtrl);
    this.planService = new PlanService(http);

    this.planService.getAllPlans().then(
      plans => this.planList = plans,
    );
  }


  openPlan = function (plan:object) {
      this.goPage(PlanPage, plan);  
  }

  subscribe = function(){
    this.modalManager.create(SubscribePage);
  }
}
