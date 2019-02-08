import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {of as observableOf, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    authState;
    uid = this.afAuth.authState.pipe(
        map(authState => {
            if (!authState) {
                return null;
            } else {
                return authState.uid;
            }
        }));
    isAdmin = observableOf(true);

    constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
        this.authState = this.afAuth.authState;
    }

    loginWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        this.afAuth.auth.signInWithPopup(provider).then(
            onfulfilled => {
                this.router.navigate(['/home']);
            }
        );
    }

    logout() {
        this.afAuth.auth.signOut().then(
            onfulfilled => {
                this.router.navigate(['/signup']);
            }
        );
    }

    get authenticated(): boolean {
        return this.authState !== null;
    }
}
