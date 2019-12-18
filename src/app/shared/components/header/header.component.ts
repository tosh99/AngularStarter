import {Component, OnInit} from '@angular/core';
import {GlobalStateVariables} from '../../services/globalstate.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public user = {name: 'John'};

    constructor(private globalstate: GlobalStateVariables, private router: Router) {
        GlobalStateVariables._globalState.subscribe((val) => {
            // Do Something Here
            if (val['user']) {
                this.user = val['user'];
            }
        });
    }

    logout() {
        this.globalstate.clearGlobalState();
        this.router.navigateByUrl('/');
    }

}
