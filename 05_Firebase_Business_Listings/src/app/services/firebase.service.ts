import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import 'rxjs/add/operator/map';


@Injectable()
export class FirebaseService {
    businesses: FirebaseListObservable<Business[]>;
    categpries: FirebaseListObservable<Categories[]>;

    constructor(private af:AngularFire){

    }

    getBusiness(){
        this.businesses = this.af.database.list('/businesses') as FirebaseListObservable<Business[]>;
        return this.businesses;
    }

    getCategories(){
        this.categpries = this.af.database.list('/categories') as FirebaseListObservable<Category[]>;
        return this.categpries;
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
