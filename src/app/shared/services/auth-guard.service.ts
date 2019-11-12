import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {GlobalStateVariables} from './globalstate.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private globalStateService: GlobalStateVariables,) {
    }

    canActivate(): boolean {
        let gbstate = localStorage.getItem('globalState');
        if (gbstate === null || gbstate === undefined) {
            this.router.navigateByUrl('/');
            return false;
        } else {
            if (typeof (gbstate) === 'string') {
                gbstate = JSON.parse(gbstate);
            }

            // Checking Condition for Auth Guard
            if (!gbstate['user']) {
                this.router.navigateByUrl('/');
                return false;
            }
        }

        return true;
    }
}
