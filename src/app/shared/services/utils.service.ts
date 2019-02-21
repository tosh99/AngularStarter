import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment, urlconstants} from './constants';


@Injectable()
export class UtilsService {

    constructor(public http: HttpClient) {
    }


    /* Http Related Services */
    getRequest(url) {
        return this.http.get(url);
    }

    postRequest(url, params) {
        return this.http.post(url, params);
    }

    /* Server Url Definitions */
    parseEnv(urlkey, method = 'GET', payload = {}) {
        let baseurl = '';
        if (environment['mode'] === 'Local') {
            baseurl = 'http://localhost:39/';
        }

        const url = baseurl + urlconstants[urlkey];
        if (method === 'GET') {
            return this.getRequest(url);
        } else {
            return this.postRequest(url, payload);
        }
    }

}
