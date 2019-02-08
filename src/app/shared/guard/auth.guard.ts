import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../service/auth.service';
import {map, take, tap} from 'rxjs/operators';
import 'rxjs/add/operator/do';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    // isLoggedIn = false;
    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate() {
        console.log(this.authService.authState);
        // if (this.authService.authState) {
        //     return true;
        // } else {
        //     return false;
        // }
        return this.authService.authState.pipe(
            take(1),
            map(auth => !!auth),
            tap(loggedIn => {
                if (!loggedIn) {
                    console.log('access denied');
                    this.router.navigate(['/signup']);
                }
            }));
        // if (this.authService.authenticated) {
        //     this.router.navigate(['/home']);
        //     return true;
        // }
        // return this.authService.uid.pipe(
        //     take(1),
        //     map(user => !!user),
        //     tap(loggedIn => {
        //         if (!loggedIn) {
        //             console.log('access denied');
        //             this.router.navigate(['/login']);
        //         }
        //     }));
        // console.log('access denied!');
        // this.router.navigate(['/login']);
        // return false;
    }
}
