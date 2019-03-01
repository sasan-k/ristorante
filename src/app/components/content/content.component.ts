import { Component, OnInit } from '@angular/core';
import { ApiService, IMenuItem } from 'src/app/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class AppContentComponent implements OnInit {

    menuItems: Array<IMenuItem>;
    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.apiService.getMenuItems().subscribe((items => this.menuItems = items));
    }

}
