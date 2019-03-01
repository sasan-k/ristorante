import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor() { }

    getMenuItems(): Observable<Array<IMenuItem>> {
        const menuItems = [
            {
                name: 'Beef Burger',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
                price: '10 $'
            },
            {
                name: 'Chiken Burger',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
                price: '12 $'
            },
            {
                name: 'Buritto',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
                price: '15 $'
            }
        ];

        return of(menuItems);
    }


}

export class IMenuItem {
    name: string;
    description: string;
    price: string;
}
