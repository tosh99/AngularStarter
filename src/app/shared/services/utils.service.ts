import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {env, urlconstants} from './constants';


@Injectable()
export class UtilsService {

    constructor(public http: HttpClient) {
    }


    // Http Related Services
    getRequest(url) {
        return this.http.get(url);
    }

    postRequest(url, params) {
        return this.http.post(url, params);
    }

    parseEnv(urlkey, method = 'GET', payload = {}) {
        let baseurl = '';
        let url = '';
        if (env['mode'] === 'Local') {
            baseurl = 'http://localhost:39/';
            url = baseurl + urlconstants[urlkey];
        }


        if (method === 'GET') {
            return this.getRequest(url);
        } else {
            return this.postRequest(url, payload);
        }
    }

}
