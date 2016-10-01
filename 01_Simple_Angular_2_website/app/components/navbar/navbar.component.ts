import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent{
    private projectName:string;

    constructor(){
        this.projectName = '01_Simple_Angular_2_website';
    }
}
