import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';


/*
*  This is the file which contains exposable global common functions
*  ready to be used inside the project.
*/


@Injectable()
export class UtilsService {

    constructor(public http: HttpClient) {
    }

    // Internal HTTP Functions --------------------------------------------------------------------- //
    private getRequest(url) {
        return this.http.get(url);
    }

    private postRequest(url, params) {
        return this.http.post(url, params);
    }

    public parseEnv(urlkey, method = 'GET', payload = {}) {

        if (environment.serverurl === 'assets/json') {
            method = 'GET'
        }

        const url = environment.serverurl + environment.apilist[urlkey];
        if (method === 'GET') {
            return this.getRequest(url);
        } else {
            return this.postRequest(url, payload);
        }
    }

}
