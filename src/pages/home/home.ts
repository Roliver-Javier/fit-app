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
    this.planList =  [
      {
          id: 1,
          title: 'Definition in 12 weeks',
          thumbnails:['assets/imgs/thumbnails/coach.jpg','assets/imgs/thumbnails/coach2.jpg','assets/imgs/thumbnails/coach3.jpg'],
          description:'Welcome to my plan!, Are you ready to work hard, transform your body while looking and feeling incredible? Then this is the plan for you!',
          category: {
              level:'All levels',
              type: 'Weightlifting',
              location:'Gym'
          },
          videoPath:'',
          duration:{
              count:'60',
              weeks:true,
              days:false,
              years:false,
              daysInWeek: '5',
              time:{
                  count:'60',
                  mins:true,
                  hours: false,
                  secs: false
              }
          },
          trainer_detail:{
              name: 'Javier Tejeda',
              images:['assets/imgs/trainers/trainer-1.jpg','assets/imgs/trainers/trainer-2.jpg','assets/imgs/trainers/trainer-3.jpg'],
              description:'',
              rate:5
          },
          workouts_details:{
            routines:[
                { 
                    day:1,
                    title:'Chest',
                    image:'assets/imgs/workouts/chest-1.jpg'
                  },
                  {
                      day:2,
                      title:'Squat',
                      image:'assets/imgs/workouts/squats-0.jpg'
                  },
                  {
                      day:3,
                      title:'Arms',
                      image:'assets/imgs/workouts/arms.jpg'
                  },
                  {
                      day:4,
                      title:'Rest',
                      image:'assets/imgs/workouts/rest.jpg'
                  },
                  {
                      day:5,
                      title:'Shoulders',
                      image:'assets/imgs/workouts/shoulder-0.jpg'
                  },
                  {
                      day:6,
                      title:'Back',
                      image:'assets/imgs/workouts/back.jpg'
                  },
                  {
                      day:7,
                      title: 'Chest',
                      image:'assets/imgs/workouts/chest-1.jpg'
                  },
                  {
                    day:8,
                    title: 'Squat',
                    image:'assets/imgs/workouts/squats-0.jpg'
                  }
              ]
          
          }
      },
      {
          id: 2,
          title: 'Fitness Transformation',
          thumbnails:['assets/imgs/thumbnails/coach2.jpg','assets/imgs/thumbnails/coach.jpg','assets/imgs/thumbnails/coach3.jpg'],
          description:'Welcome to phase 1 of my new fitness plan featuring two separate phases! in the first phase, we are goint to workout 5 days a week, withh two rest days at the end of each week.',
          category: {
              level:'All levels',
              type: 'Plyometrics',
              location:'Home'
          },
          videoPath:'',
          duration:{
              count:'60',
              weeks:true,
              days:false,
              years:false,
              daysInWeek: '5',
              time:{
                  count:'60',
                  mins:true,
                  hours: false,
                  secs: false
              }
          },
          trainer_detail:{
              name: 'Angela Ramirez',
              images:['assets/imgs/trainers/trainer-1.jpg','assets/imgs/trainers/trainer-2.jpg','assets/imgs/trainers/trainer-3.jpg'],
              description:'',
              rate:5
          },
          workouts_details:{
            routines:[
                { 
                    day:1,
                    title:'Chest',
                    image:'assets/imgs/workouts/chest-1.jpg'
                  },
                  {
                      day:2,
                      title:'Squat',
                      image:'assets/imgs/workouts/squats-0.jpg'
                  },
                  {
                      day:3,
                      title:'Arms',
                      image:'assets/imgs/workouts/arms.jpg'
                  },
                  {
                      day:4,
                      title:'Rest',
                      image:'assets/imgs/workouts/rest.jpg'
                  },
                  {
                      day:5,
                      title:'Shoulders',
                      image:'assets/imgs/workouts/shoulder-0.jpg'
                  },
                  {
                      day:6,
                      title:'Back',
                      image:'assets/imgs/workouts/back.jpg'
                  },
                  {
                      day:7,
                      title: 'Chest',
                      image:'assets/imgs/workouts/chest-1.jpg'
                  },
                  {
                    day:8,
                    title: 'Squat',
                    image:'assets/imgs/workouts/squats-0.jpg'
                  }
              ]
          
          }
      },
      {
          id: 3,
          title: 'Gain good muscles',
          thumbnails:['assets/imgs/thumbnails/coach3.jpg','assets/imgs/thumbnails/coach2.jpg','assets/imgs/thumbnails/coach.jpg'],
          description:'My plan is a 30 day Body Bulk. We will break down all of the muscles that we train into intricate parts to ensure that we are training the muscle fully and not leaving any parts of your physique untrained.',
          category: {
              level:'All levels',
              type: 'Weightlifting',
              location:'Gym'
          },
          videoPath:'',
          duration:{
              count:'60',
              weeks:true,
              days:false,
              years:false,
              daysInWeek: '5',
              time:{
                  count:'60',
                  mins:true,
                  hours: false,
                  secs: false
              }
          },
          trainer_detail:{
              name: 'Fernando Morillo',
              images:['assets/imgs/trainers/trainer-1.jpg','assets/imgs/trainers/trainer-2.jpg','assets/imgs/trainers/trainer-3.jpg'],
              description:'',
              rate:5
            },
          workouts_detail:{
              routines:[
                { 
                    day:1,
                    title:'Chest',
                    image:'assets/imgs/workouts/chest-1.jpg'
                  },
                  {
                      day:2,
                      title:'Squat',
                      image:'assets/imgs/workouts/squats-0.jpg'
                  },
                  {
                      day:3,
                      title:'Arms',
                      image:'assets/imgs/workouts/arms.jpg'
                  },
                  {
                      day:4,
                      title:'Rest',
                      image:'assets/imgs/workouts/rest.jpg'
                  },
                  {
                      day:5,
                      title:'Shoulders',
                      image:'assets/imgs/workouts/shoulder-0.jpg'
                  },
                  {
                      day:6,
                      title:'Back',
                      image:'assets/imgs/workouts/back.jpg'
                  },
                  {
                      day:7,
                      title: 'Chest',
                      image:'assets/imgs/workouts/chest-1.jpg'
                  },
                  {
                    day:8,
                    title: 'Squat',
                    image:'assets/imgs/workouts/squats-0.jpg'
                  }
              ]
          
        }
      },
      {
          id: 4,
          title: 'Definition in 12 weeks',
          description:'',
          thumbnails:['assets/imgs/thumbnails/coach.jpg','assets/imgs/thumbnails/coach2.jpg','assets/imgs/thumbnails/coach3.jpg'],
          category: {
            level:'All levels',
            type: 'Weightlifting',
            location:'Gym'
          },
          videoPath:'',
          trainer_detail:{
              name: 'Javier Tejeda',
              images:['assets/imgs/trainers/trainer-1.jpg','assets/imgs/trainers/trainer-2.jpg','assets/imgs/trainers/trainer-3.jpg'],
              description:'',
              rate:5
          },
          workouts_details:{
              routines:[
                { 
                    day:1,
                    title:'Chest',
                    image:'assets/imgs/workouts/chest-1.jpg'
                  },
                  {
                      day:2,
                      title:'Squat',
                      image:'assets/imgs/workouts/squats-0.jpg'
                  },
                  {
                      day:3,
                      title:'Arms',
                      image:'assets/imgs/workouts/arms.jpg'
                  },
                  {
                      day:4,
                      title:'Rest',
                      image:'assets/imgs/workouts/rest.jpg'
                  },
                  {
                      day:5,
                      title:'Shoulders',
                      image:'assets/imgs/workouts/shoulder-0.jpg'
                  },
                  {
                      day:6,
                      title:'Back',
                      image:'assets/imgs/workouts/back.jpg'
                  },
                  {
                      day:7,
                      title: 'Chest',
                      image:'assets/imgs/workouts/chest-1.jpg'
                  },
                  {
                    day:8,
                    title: 'Squat',
                    image:'assets/imgs/workouts/squats-0.jpg'
                  }
              ]
          }
      }    
  ];
    /*this.planService.getAllPlans().then(
      plans => this.planList = plans,
    );*/
  }


  openPlan = function (plan:object) {
      this.goPage(PlanPage, plan);  
  }

  subscribe = function(){
    this.modalManager.create(SubscribePage);
  }
}
