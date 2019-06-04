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

    // Internal Functions --------------------------------------------------------------------- //
    private getRequest(url) {
        return this.http.get(url);
    }

    private postRequest(url, params) {
        return this.http.post(url, params);
    }

    public parseEnv(urlkey, method = 'GET', payload = {}) {
        const url = environment.serverurl + environment.apilist[urlkey];
        if (method === 'GET') {
            return this.getRequest(url);
        } else {
            return this.postRequest(url, payload);
        }
    }

}
