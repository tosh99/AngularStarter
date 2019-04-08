import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment, jsonurlconstants, urlconstants} from '../../../environments/constants';


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

    // Exposed Functions --------------------------------------------------------------------- //
    public setLocalStorageData(key, value) {
        localStorage.setItem(key, value)
    }

    public getLocalStorageData(key) {
        return localStorage.getItem(key);
    }

    public parseEnv(urlkey, method = 'GET', payload = {}) {
        let url = '';
        let baseurl = 'assets/';

        if (environment['mode'] === 'Client') {
            method = 'GET';
            baseurl = 'assets/';
            url = baseurl + jsonurlconstants[urlkey];
        } else {
            if (environment['mode'] === 'Dev') {
                baseurl = 'http://dev.api.com';
            } else if (environment['mode'] === 'Stage') {
                baseurl = 'http://stage.api.com';
            } else if (environment['mode'] === 'Prod') {
                baseurl = 'http://prod.api.com';
            } else {
                baseurl = 'assets/';
            }

            url = baseurl + urlconstants[urlkey];
        }

        if (method === 'GET') {
            return this.getRequest(url);
        } else {
            return this.postRequest(url, payload);
        }
    }

}
