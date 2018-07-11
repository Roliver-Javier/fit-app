import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { TrainPage } from '../train/train';
import { HomePage } from '../home/home';

@Component({
  selector:'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TrainPage;
  tab3Root = ProfilePage;


  constructor() {

  }
}
