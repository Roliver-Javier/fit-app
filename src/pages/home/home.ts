import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PageManager} from '../../utils/PageManager';
import {PlanPage} from '../plan/plan';
import {Http} from '@angular/http';
import {routes} from '../../app/core/routes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends PageManager{
  planList:any;
  private http: Http;
  constructor(public navCtrl: NavController) {
    super(navCtrl);
   //this.planService = new PlanService(http);
    //this.planList = this.planService.getAllPlans();
    this.getAllPlans();
  }

  public getAllPlans(): Promise<any>{
    return new Promise(resolve=>{
    this.http.get(routes.getAllPlans.service)
            .subscribe(data =>{
              console.log(data);
                resolve(data);
            }, err =>{
                console.log(err);
            });
        
    });
}
  openPlan = function(){
    this.goPage(PlanPage);
  } 

}
