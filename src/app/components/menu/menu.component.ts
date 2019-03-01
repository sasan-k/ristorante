import { Component, OnInit, Input } from '@angular/core';
import { IMenuItem } from 'src/app/api.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class AppMenuComponent implements OnInit {

    @Input() menuItems: Array<IMenuItem> = [];

    constructor() { }

    ngOnInit() {
    }

}
