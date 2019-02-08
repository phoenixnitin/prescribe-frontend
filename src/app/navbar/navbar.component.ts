import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/service/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    dropdownShown = false;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    toggleDropdown() {
        this.dropdownShown = !this.dropdownShown;
    }

    logout() {
        this.authService.logout();
    }
}
