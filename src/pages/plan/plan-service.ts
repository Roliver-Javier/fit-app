
import { HttpClient } from '@angular/common/http';
import {endpoints} from '../../app/core/endpoints';

export class PlanService{

    constructor(private http:HttpClient){

    }
    private extractData(res: Response) {
        let body = res.json();
        return body;
    } 

    public getAllPlans(): Promise<any> {
        return this.http.get(endpoints.getAllPlans.service)
        .toPromise().then(response=>{return response}).catch(error=>null);
    }

    public getDetailPlan(id:number): Promise<any>{
        return this.http.get(endpoints.getDetailPlan.service+"?id="+id)
        .toPromise().then(response => response).catch(error => null);
    }

}