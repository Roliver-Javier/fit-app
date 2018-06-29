import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { PageManager } from '../../utils/PageManager';
import { PlanPage } from '../plan/plan';
import { HttpClient } from '@angular/common/http';
import { PlanService } from '../plan/plan-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends PageManager {
  planList: object[];
  planService: PlanService;
  
  constructor(public navCtrl: NavController,  http: HttpClient) {
    super(navCtrl);
    this.planService = new PlanService(http);
    this.planService.getAllPlans().then(
      plans => this.planList = plans,
    );
  }


  openPlan = function (plan:object) {
      this.goPage(PlanPage, plan);  
  }

}
