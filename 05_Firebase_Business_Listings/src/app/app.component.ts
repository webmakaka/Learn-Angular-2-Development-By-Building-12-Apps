import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';

@Component({

  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {

    title = 'app works!';
    businesses: Business[];
    categories: Category[];

    appState: string;
    activeKey: string;


  constructor(private _firebaseService:FirebaseService) {

  }

   ngOnInit(){
      this._firebaseService.getBusiness().subscribe(businesses => {
          this.businesses = businesses;
      });

      this._firebaseService.getCategories().subscribe(categories => {
          this.categories = categories;
      });
  }

  changeState(state, key){
      if(key){
          this.activeKey = key;
      }
      this.appState = state;
  }

}


export interface Business {
    $key?: string;
    company?: string;
    description?: string;
    category: string;
    years_in_business?: number;
    street_address?: string;
    city?: string;
    zipcode?: string;
    phone?: string;
    email?: string;
    created_at: string;
}

export interface Category {
    $key?: string;
    name?: string;
}
