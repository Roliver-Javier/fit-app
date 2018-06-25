import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PageManager } from '../../utils/PageManager';
import { PlanPage } from '../plan/plan';
import { HttpClient } from '@angular/common/http';
import { routes } from '../../app/core/routes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends PageManager {
  planList: any;
  //private http: Http;
  constructor(public navCtrl: NavController, private http: HttpClient) {
    super(navCtrl);
    //this.planService = new PlanService(http);
    //this.planList = this.planService.getAllPlans();
    this.getAllPlans();
  }

  public getAllPlans(): Promise<any> {
    return this.http.get(routes.getAllPlans.service).toPromise().then(function(data){
      console.log(JSON.stringify(data));
    })
  }


  openPlan = function () {
    this.goPage(PlanPage);
  }

}
