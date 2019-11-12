(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["samplemodule-samplemodule-module"],{

/***/ "./node_modules/@angular/common/fesm2015/http.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/fesm2015/http.js ***!
  \*******************************************************/
/*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function() { return HttpXsrfInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**
 * @license Angular v8.2.7
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * \@publicApi
 * @abstract
 */
class HttpHandler {
}
if (false) {}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * \@publicApi
 * @abstract
 */
class HttpBackend {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @record
 */
function Update() { }
if (false) {}
/**
 * Represents the header configuration options for an HTTP request.
 *
 * Instances should be assumed immutable with lazy parsing.
 *
 * \@publicApi
 */
class HttpHeaders {
    /**
     * Constructs a new HTTP header object with the given values.
     * @param {?=} headers
     */
    constructor(headers) {
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = (/**
             * @return {?}
             */
            () => {
                this.headers = new Map();
                headers.split('\n').forEach((/**
                 * @param {?} line
                 * @return {?}
                 */
                line => {
                    /** @type {?} */
                    const index = line.indexOf(':');
                    if (index > 0) {
                        /** @type {?} */
                        const name = line.slice(0, index);
                        /** @type {?} */
                        const key = name.toLowerCase();
                        /** @type {?} */
                        const value = line.slice(index + 1).trim();
                        this.maybeSetNormalizedName(name, key);
                        if (this.headers.has(key)) {
                            (/** @type {?} */ (this.headers.get(key))).push(value);
                        }
                        else {
                            this.headers.set(key, [value]);
                        }
                    }
                }));
            });
        }
        else {
            this.lazyInit = (/**
             * @return {?}
             */
            () => {
                this.headers = new Map();
                Object.keys(headers).forEach((/**
                 * @param {?} name
                 * @return {?}
                 */
                name => {
                    /** @type {?} */
                    let values = headers[name];
                    /** @type {?} */
                    const key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        this.headers.set(key, values);
                        this.maybeSetNormalizedName(name, key);
                    }
                }));
            });
        }
    }
    /**
     * Checks for existence of a header by a given name.
     *
     * @param {?} name The header name to check for existence.
     *
     * @return {?} Whether the header exits.
     */
    has(name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    }
    /**
     * Retrieves the first header value that matches a given name.
     *
     * @param {?} name The header name to retrieve.
     *
     * @return {?} A string if the header exists, null otherwise
     */
    get(name) {
        this.init();
        /** @type {?} */
        const values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    }
    /**
     * Retrieves the names of the headers.
     *
     * @return {?} A list of header names.
     */
    keys() {
        this.init();
        return Array.from(this.normalizedNames.values());
    }
    /**
     * Retrieves a list of header values for a given header name.
     *
     * @param {?} name The header name from which to retrieve the values.
     *
     * @return {?} A string of values if the header exists, null otherwise.
     */
    getAll(name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    }
    /**
     * Appends a new header value to the existing set of
     * header values.
     *
     * @param {?} name The header name for which to append the values.
     *
     * @param {?} value
     * @return {?} A clone of the HTTP header object with the value appended.
     */
    append(name, value) {
        return this.clone({ name, value, op: 'a' });
    }
    /**
     * Sets a header value for a given name. If the header name already exists,
     * its value is replaced with the given value.
     *
     * @param {?} name The header name.
     * @param {?} value The value to set or overide for a given name.
     *
     * @return {?} A clone of the HTTP header object with the newly set header value.
     */
    set(name, value) {
        return this.clone({ name, value, op: 's' });
    }
    /**
     * Deletes all header values for a given name.
     *
     * @param {?} name The header name.
     * @param {?=} value The header values to delete for a given name.
     *
     * @return {?} A clone of the HTTP header object.
     */
    delete(name, value) {
        return this.clone({ name, value, op: 'd' });
    }
    /**
     * @private
     * @param {?} name
     * @param {?} lcName
     * @return {?}
     */
    maybeSetNormalizedName(name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach((/**
                 * @param {?} update
                 * @return {?}
                 */
                update => this.applyUpdate(update)));
                this.lazyUpdate = null;
            }
        }
    }
    /**
     * @private
     * @param {?} other
     * @return {?}
     */
    copyFrom(other) {
        other.init();
        Array.from(other.headers.keys()).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            this.headers.set(key, (/** @type {?} */ (other.headers.get(key))));
            this.normalizedNames.set(key, (/** @type {?} */ (other.normalizedNames.get(key))));
        }));
    }
    /**
     * @private
     * @param {?} update
     * @return {?}
     */
    clone(update) {
        /** @type {?} */
        const clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    }
    /**
     * @private
     * @param {?} update
     * @return {?}
     */
    applyUpdate(update) {
        /** @type {?} */
        const key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                /** @type {?} */
                let value = (/** @type {?} */ (update.value));
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                /** @type {?} */
                const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push(...value);
                this.headers.set(key, base);
                break;
            case 'd':
                /** @type {?} */
                const toDelete = (/** @type {?} */ (update.value));
                if (!toDelete) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    /** @type {?} */
                    let existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter((/**
                     * @param {?} value
                     * @return {?}
                     */
                    value => toDelete.indexOf(value) === -1));
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    }
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    forEach(fn) {
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => fn((/** @type {?} */ (this.normalizedNames.get(key))), (/** @type {?} */ (this.headers.get(key))))));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A codec for encoding and decoding parameters in URLs.
 *
 * Used by `HttpParams`.
 *
 * \@publicApi
 *
 * @record
 */
function HttpParameterCodec() { }
if (false) {}
/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * \@publicApi
 */
class HttpUrlEncodingCodec {
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param {?} key The key name.
     * @return {?} The encoded key name.
     */
    encodeKey(key) { return standardEncoding(key); }
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param {?} value The value.
     * @return {?} The encoded value.
     */
    encodeValue(value) { return standardEncoding(value); }
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param {?} key The encoded key name.
     * @return {?} The decoded key name.
     */
    decodeKey(key) { return decodeURIComponent(key); }
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param {?} value The encoded value.
     * @return {?} The decoded value.
     */
    decodeValue(value) { return decodeURIComponent(value); }
}
/**
 * @param {?} rawParams
 * @param {?} codec
 * @return {?}
 */
function paramParser(rawParams, codec) {
    /** @type {?} */
    const map = new Map();
    if (rawParams.length > 0) {
        /** @type {?} */
        const params = rawParams.split('&');
        params.forEach((/**
         * @param {?} param
         * @return {?}
         */
        (param) => {
            /** @type {?} */
            const eqIdx = param.indexOf('=');
            const [key, val] = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
            /** @type {?} */
            const list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        }));
    }
    return map;
}
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * @record
 */
function Update$1() { }
if (false) {}
/**
 * Options used to construct an `HttpParams` instance.
 *
 * \@publicApi
 * @record
 */
function HttpParamsOptions() { }
if (false) {}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * \@publicApi
 */
class HttpParams {
    /**
     * @param {?=} options
     */
    constructor(options = (/** @type {?} */ ({}))) {
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error(`Cannot specify both fromString and fromObject.`);
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                /** @type {?} */
                const value = ((/** @type {?} */ (options.fromObject)))[key];
                (/** @type {?} */ (this.map)).set(key, Array.isArray(value) ? value : [value]);
            }));
        }
        else {
            this.map = null;
        }
    }
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param {?} param The parameter name.
     * @return {?} True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    has(param) {
        this.init();
        return (/** @type {?} */ (this.map)).has(param);
    }
    /**
     * Retrieves the first value for a parameter.
     * @param {?} param The parameter name.
     * @return {?} The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    get(param) {
        this.init();
        /** @type {?} */
        const res = (/** @type {?} */ (this.map)).get(param);
        return !!res ? res[0] : null;
    }
    /**
     * Retrieves all values for a  parameter.
     * @param {?} param The parameter name.
     * @return {?} All values in a string array,
     * or `null` if the parameter not present.
     */
    getAll(param) {
        this.init();
        return (/** @type {?} */ (this.map)).get(param) || null;
    }
    /**
     * Retrieves all the parameters for this body.
     * @return {?} The parameter names in a string array.
     */
    keys() {
        this.init();
        return Array.from((/** @type {?} */ (this.map)).keys());
    }
    /**
     * Appends a new value to existing values for a parameter.
     * @param {?} param The parameter name.
     * @param {?} value The new value to add.
     * @return {?} A new body with the appended value.
     */
    append(param, value) { return this.clone({ param, value, op: 'a' }); }
    /**
     * Replaces the value for a parameter.
     * @param {?} param The parameter name.
     * @param {?} value The new value.
     * @return {?} A new body with the new value.
     */
    set(param, value) { return this.clone({ param, value, op: 's' }); }
    /**
     * Removes a given value or all values from a parameter.
     * @param {?} param The parameter name.
     * @param {?=} value The value to remove, if provided.
     * @return {?} A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    delete(param, value) { return this.clone({ param, value, op: 'd' }); }
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */
    toString() {
        this.init();
        return this.keys()
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const eKey = this.encoder.encodeKey(key);
            return (/** @type {?} */ ((/** @type {?} */ (this.map)).get(key))).map((/**
             * @param {?} value
             * @return {?}
             */
            value => eKey + '=' + this.encoder.encodeValue(value)))
                .join('&');
        }))
            .join('&');
    }
    /**
     * @private
     * @param {?} update
     * @return {?}
     */
    clone(update) {
        /** @type {?} */
        const clone = new HttpParams((/** @type {?} */ ({ encoder: this.encoder })));
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => (/** @type {?} */ (this.map)).set(key, (/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ (this.cloneFrom)).map)).get(key))))));
            (/** @type {?} */ (this.updates)).forEach((/**
             * @param {?} update
             * @return {?}
             */
            update => {
                switch (update.op) {
                    case 'a':
                    case 's':
                        /** @type {?} */
                        const base = (update.op === 'a' ? (/** @type {?} */ (this.map)).get(update.param) : undefined) || [];
                        base.push((/** @type {?} */ (update.value)));
                        (/** @type {?} */ (this.map)).set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            /** @type {?} */
                            let base = (/** @type {?} */ (this.map)).get(update.param) || [];
                            /** @type {?} */
                            const idx = base.indexOf(update.value);
                            if (idx !== -1) {
                                base.splice(idx, 1);
                            }
                            if (base.length > 0) {
                                (/** @type {?} */ (this.map)).set(update.param, base);
                            }
                            else {
                                (/** @type {?} */ (this.map)).delete(update.param);
                            }
                        }
                        else {
                            (/** @type {?} */ (this.map)).delete(update.param);
                            break;
                        }
                }
            }));
            this.cloneFrom = this.updates = null;
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Construction interface for `HttpRequest`s.
 *
 * All values are optional and will override default values if provided.
 * @record
 */
function HttpRequestInit() { }
if (false) {}
/**
 * Determine whether the given HTTP method may include a body.
 * @param {?} method
 * @return {?}
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 * @param {?} value
 * @return {?}
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 * @param {?} value
 * @return {?}
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 * @param {?} value
 * @return {?}
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * \@publicApi
 * @template T
 */
class HttpRequest {
    /**
     * @param {?} method
     * @param {?} url
     * @param {?=} third
     * @param {?=} fourth
     */
    constructor(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        /** @type {?} */
        let options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? (/** @type {?} */ (third)) : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = (/** @type {?} */ (third));
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            /** @type {?} */
            const params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                /** @type {?} */
                const qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                /** @type {?} */
                const sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */
    serializeBody() {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return ((/** @type {?} */ (this.body))).toString();
    }
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */
    detectContentTypeHeader() {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        /** @type {?} */
        const method = update.method || this.method;
        /** @type {?} */
        const url = update.url || this.url;
        /** @type {?} */
        const responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        /** @type {?} */
        const body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        /** @type {?} */
        const withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        /** @type {?} */
        const reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        /** @type {?} */
        let headers = update.headers || this.headers;
        /** @type {?} */
        let params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce((/**
                 * @param {?} headers
                 * @param {?} name
                 * @return {?}
                 */
                (headers, name) => headers.set(name, (/** @type {?} */ (update.setHeaders))[name])), headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce((/**
             * @param {?} params
             * @param {?} param
             * @return {?}
             */
            (params, param) => params.set(param, (/** @type {?} */ (update.setParams))[param])), params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params, headers, reportProgress, responseType, withCredentials,
        });
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const HttpEventType = {
    /**
     * The request was sent out over the wire.
     */
    Sent: 0,
    /**
     * An upload progress event was received.
     */
    UploadProgress: 1,
    /**
     * The response status code and headers were received.
     */
    ResponseHeader: 2,
    /**
     * A download progress event was received.
     */
    DownloadProgress: 3,
    /**
     * The full response including the body was received.
     */
    Response: 4,
    /**
     * A custom event from an interceptor or a backend.
     */
    User: 5,
};
HttpEventType[HttpEventType.Sent] = 'Sent';
HttpEventType[HttpEventType.UploadProgress] = 'UploadProgress';
HttpEventType[HttpEventType.ResponseHeader] = 'ResponseHeader';
HttpEventType[HttpEventType.DownloadProgress] = 'DownloadProgress';
HttpEventType[HttpEventType.Response] = 'Response';
HttpEventType[HttpEventType.User] = 'User';
/**
 * Base interface for progress events.
 *
 * \@publicApi
 * @record
 */
function HttpProgressEvent() { }
if (false) {}
/**
 * A download progress event.
 *
 * \@publicApi
 * @record
 */
function HttpDownloadProgressEvent() { }
if (false) {}
/**
 * An upload progress event.
 *
 * \@publicApi
 * @record
 */
function HttpUploadProgressEvent() { }
if (false) {}
/**
 * An event indicating that the request was sent to the server. Useful
 * when a request may be retried multiple times, to distinguish between
 * retries on the final event stream.
 *
 * \@publicApi
 * @record
 */
function HttpSentEvent() { }
if (false) {}
/**
 * A user-defined event.
 *
 * Grouping all custom events under this type ensures they will be handled
 * and forwarded by all implementations of interceptors.
 *
 * \@publicApi
 * @record
 * @template T
 */
function HttpUserEvent() { }
if (false) {}
/**
 * An error that represents a failed attempt to JSON.parse text coming back
 * from the server.
 *
 * It bundles the Error object with the actual response body that failed to parse.
 *
 *
 * @record
 */
function HttpJsonParseError() { }
if (false) {}
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * \@publicApi
 * @abstract
 */
class HttpResponseBase {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */
    constructor(init, defaultStatus = 200, defaultStatusText = 'OK') {
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
}
if (false) {}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * \@publicApi
 */
class HttpHeaderResponse extends HttpResponseBase {
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     * @param {?=} init
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.ResponseHeader;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
if (false) {}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * \@publicApi
 * @template T
 */
class HttpResponse extends HttpResponseBase {
    /**
     * Construct a new `HttpResponse`.
     * @param {?=} init
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.Response;
        this.body = init.body !== undefined ? init.body : null;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
if (false) {}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * \@publicApi
 */
class HttpErrorResponse extends HttpResponseBase {
    /**
     * @param {?} init
     */
    constructor(init) {
        // Initialize with a default status of 0 / Unknown Error.
        super(init, 0, 'Unknown Error');
        this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (this.status >= 200 && this.status < 300) {
            this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
        }
        else {
            this.message =
                `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
        }
        this.error = init.error || null;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 * @template T
 * @param {?} options
 * @param {?} body
 * @return {?}
 */
function addBody(options, body) {
    return {
        body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 *
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * \@usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 *
 * \@publicApi
 */
class HttpClient {
    /**
     * @param {?} handler
     */
    constructor(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     * @param {?} first
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    request(first, url, options = {}) {
        /** @type {?} */
        let req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = (/** @type {?} */ (first));
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            /** @type {?} */
            let headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            /** @type {?} */
            let params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams((/** @type {?} */ ({ fromObject: options.params })));
                }
            }
            // Construct the request.
            req = new HttpRequest(first, (/** @type {?} */ (url)), (options.body !== undefined ? options.body : null), {
                headers,
                params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        /** @type {?} */
        const events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((/**
         * @param {?} req
         * @return {?}
         */
        (req) => this.handler.handle(req))));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        /** @type {?} */
        const res$ = (/** @type {?} */ (events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event instanceof HttpResponse)))));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        })));
                    case 'blob':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        })));
                    case 'text':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        })));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => res.body)));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
        }
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param {?} url     The endpoint URL.
     * @param {?=} options The HTTP options to send with the request.
     *
     * @return {?}
     */
    delete(url, options = {}) {
        return this.request('DELETE', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    get(url, options = {}) {
        return this.request('GET', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    head(url, options = {}) {
        return this.request('HEAD', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @template T
     * @param {?} url The resource URL.
     * @param {?} callbackParam The callback function name.
     *
     * @return {?}
     */
    jsonp(url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    options(url, options = {}) {
        return this.request('OPTIONS', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    patch(url, body, options = {}) {
        return this.request('PATCH', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    post(url, body, options = {}) {
        return this.request('POST', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    put(url, body, options = {}) {
        return this.request('PUT', url, addBody(options, body));
    }
}
HttpClient.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpClient.ctorParameters = () => [
    { type: HttpHandler }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Intercepts and handles an `HttpRequest` or `HttpResponse`.
 *
 * Most interceptors transform the outgoing request before passing it to the
 * next interceptor in the chain, by calling `next.handle(transformedReq)`.
 * An interceptor may transform the
 * response event stream as well, by applying additional RxJS operators on the stream
 * returned by `next.handle()`.
 *
 * More rarely, an interceptor may handle the request entirely,
 * and compose a new event stream instead of invoking `next.handle()`. This is an
 * acceptable behavior, but keep in mind that further interceptors will be skipped entirely.
 *
 * It is also rare but valid for an interceptor to return multiple responses on the
 * event stream for a single request.
 *
 * \@publicApi
 *
 * @see [HTTP Guide](guide/http#intercepting-requests-and-responses)
 *
 * \@usageNotes
 *
 * To use the same instance of `HttpInterceptors` for the entire app, import the `HttpClientModule`
 * only in your `AppModule`, and add the interceptors to the root application injector .
 * If you import `HttpClientModule` multiple times across different modules (for example, in lazy
 * loading modules), each import creates a new copy of the `HttpClientModule`, which overwrites the interceptors
 * provided in the root module.
 *
 * @record
 */
function HttpInterceptor() { }
if (false) {}
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
class HttpInterceptorHandler {
    /**
     * @param {?} next
     * @param {?} interceptor
     */
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
if (false) {}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * \@publicApi
 * @type {?}
 */
const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');
class NoopInterceptor {
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        return next.handle(req);
    }
}
NoopInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
/** @type {?} */
let nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
/** @type {?} */
const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
/** @type {?} */
const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
/** @type {?} */
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 * @abstract
 */
class JsonpCallbackContext {
}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * \@publicApi
 */
class JsonpClientBackend {
    /**
     * @param {?} callbackMap
     * @param {?} document
     */
    constructor(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @private
     * @return {?}
     */
    nextCallback() { return `ng_jsonp_callback_${nextRequestId++}`; }
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param {?} req The request object.
     * @return {?} An observable of the response events.
     *
     */
    handle(req) {
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            /** @type {?} */
            const callback = this.nextCallback();
            /** @type {?} */
            const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
            // Construct the <script> tag and point it at the URL.
            /** @type {?} */
            const node = this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            /** @type {?} */
            let body = null;
            // Whether the response callback has been called.
            /** @type {?} */
            let finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            /** @type {?} */
            let cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            this.callbackMap[callback] = (/**
             * @param {?=} data
             * @return {?}
             */
            (data) => {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            });
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            /** @type {?} */
            const cleanup = (/**
             * @return {?}
             */
            () => {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete this.callbackMap[callback];
            });
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            /** @type {?} */
            const onLoad = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body,
                    status: 200,
                    statusText: 'OK', url,
                }));
                // Complete the stream, the response is over.
                observer.complete();
            });
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            /** @type {?} */
            const onError = (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error,
                    status: 0,
                    statusText: 'JSONP Error', url,
                }));
            });
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return (/**
             * @return {?}
             */
            () => {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            });
        }));
    }
}
JsonpClientBackend.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
JsonpClientBackend.ctorParameters = () => [
    { type: JsonpCallbackContext },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
if (false) {}
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * \@publicApi
 */
class JsonpInterceptor {
    /**
     * @param {?} jsonp
     */
    constructor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * Identifies and handles a given JSONP request.
     * @param {?} req The outgoing request object to handle.
     * @param {?} next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @return {?} An observable of the event stream.
     */
    intercept(req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle((/** @type {?} */ (req)));
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    }
}
JsonpInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
JsonpInterceptor.ctorParameters = () => [
    { type: JsonpClientBackend }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 * @param {?} xhr
 * @return {?}
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * \@publicApi
 * @abstract
 */
class XhrFactory {
}
if (false) {}
/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 *
 */
class BrowserXhr {
    constructor() { }
    /**
     * @return {?}
     */
    build() { return (/** @type {?} */ ((new XMLHttpRequest()))); }
}
BrowserXhr.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
BrowserXhr.ctorParameters = () => [];
/**
 * Tracks a response from the server that does not yet have a body.
 * @record
 */
function PartialResponse() { }
if (false) {}
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * \@publicApi
 */
class HttpXhrBackend {
    /**
     * @param {?} xhrFactory
     */
    constructor(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Processes a request and returns a stream of response events.
     * @param {?} req The request object.
     * @return {?} An observable of the response events.
     */
    handle(req) {
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error(`Attempted to construct Jsonp request without JsonpClientModule installed.`);
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            /** @type {?} */
            const xhr = this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach((/**
             * @param {?} name
             * @param {?} values
             * @return {?}
             */
            (name, values) => xhr.setRequestHeader(name, values.join(','))));
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                /** @type {?} */
                const detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                /** @type {?} */
                const responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = (/** @type {?} */ (((responseType !== 'json') ? responseType : 'text')));
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            /** @type {?} */
            const reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            /** @type {?} */
            let headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            /** @type {?} */
            const partialFromXhr = (/**
             * @return {?}
             */
            () => {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                /** @type {?} */
                const status = xhr.status === 1223 ? 204 : xhr.status;
                /** @type {?} */
                const statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                /** @type {?} */
                const headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                /** @type {?} */
                const url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers, status, statusText, url });
                return headerResponse;
            });
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            /** @type {?} */
            const onLoad = (/**
             * @return {?}
             */
            () => {
                // Read response state from the memoized partial data.
                let { headers, status, statusText, url } = partialFromXhr();
                // The body will be read out if present.
                /** @type {?} */
                let body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                /** @type {?} */
                let ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    /** @type {?} */
                    const originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = (/** @type {?} */ ({ error, text: body }));
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                }
            });
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            /** @type {?} */
            const onError = (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                const { url } = partialFromXhr();
                /** @type {?} */
                const res = new HttpErrorResponse({
                    error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            });
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            /** @type {?} */
            let sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            /** @type {?} */
            const onDownProgress = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                /** @type {?} */
                let progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            });
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            /** @type {?} */
            const onUpProgress = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Upload progress events are simpler. Begin building the progress
                // event.
                /** @type {?} */
                let progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            });
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send((/** @type {?} */ (reqBody)));
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return (/**
             * @return {?}
             */
            () => {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            });
        }));
    }
}
HttpXhrBackend.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpXhrBackend.ctorParameters = () => [
    { type: XhrFactory }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
/** @type {?} */
const XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * \@publicApi
 * @abstract
 */
class HttpXsrfTokenExtractor {
}
if (false) {}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
class HttpXsrfCookieExtractor {
    /**
     * @param {?} doc
     * @param {?} platform
     * @param {?} cookieName
     */
    constructor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */
        this.parseCount = 0;
    }
    /**
     * @return {?}
     */
    getToken() {
        if (this.platform === 'server') {
            return null;
        }
        /** @type {?} */
        const cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    }
}
HttpXsrfCookieExtractor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpXsrfCookieExtractor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_COOKIE_NAME,] }] }
];
if (false) {}
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
class HttpXsrfInterceptor {
    /**
     * @param {?} tokenService
     * @param {?} headerName
     */
    constructor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        /** @type {?} */
        const token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    }
}
HttpXsrfInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpXsrfInterceptor.ctorParameters = () => [
    { type: HttpXsrfTokenExtractor },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_HEADER_NAME,] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
class HttpInterceptingHandler {
    /**
     * @param {?} backend
     * @param {?} injector
     */
    constructor(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    handle(req) {
        if (this.chain === null) {
            /** @type {?} */
            const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight((/**
             * @param {?} next
             * @param {?} interceptor
             * @return {?}
             */
            (next, interceptor) => new HttpInterceptorHandler(next, interceptor)), this.backend);
        }
        return this.chain.handle(req);
    }
}
HttpInterceptingHandler.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpInterceptingHandler.ctorParameters = () => [
    { type: HttpBackend },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
if (false) {}
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 * @param {?} backend
 * @param {?=} interceptors
 * @return {?}
 */
function interceptingHandler(backend, interceptors = []) {
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight((/**
     * @param {?} next
     * @param {?} interceptor
     * @return {?}
     */
    (next, interceptor) => new HttpInterceptorHandler(next, interceptor)), backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 * @return {?}
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * \@publicApi
 */
class HttpClientXsrfModule {
    /**
     * Disable the default XSRF protection.
     * @return {?}
     */
    static disable() {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    }
    /**
     * Configure XSRF protection.
     * @param {?=} options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     * @return {?}
     */
    static withOptions(options = {}) {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    }
}
HttpClientXsrfModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                providers: [
                    HttpXsrfInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                    { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                    { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                ],
            },] }
];
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * \@publicApi
 */
class HttpClientModule {
}
HttpClientModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                /**
                 * Optional configuration for XSRF protection.
                 */
                imports: [
                    HttpClientXsrfModule.withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN',
                    }),
                ],
                /**
                 * Configures the [dependency injector](guide/glossary#injector) where it is imported
                 * with supporting services for HTTP communications.
                 */
                providers: [
                    HttpClient,
                    { provide: HttpHandler, useClass: HttpInterceptingHandler },
                    HttpXhrBackend,
                    { provide: HttpBackend, useExisting: HttpXhrBackend },
                    BrowserXhr,
                    { provide: XhrFactory, useExisting: BrowserXhr },
                ],
            },] }
];
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * \@publicApi
 */
class HttpClientJsonpModule {
}
HttpClientJsonpModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                providers: [
                    JsonpClientBackend,
                    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/@angular/forms/fesm2015/forms.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/forms/fesm2015/forms.js ***!
  \*******************************************************/
/*! exports provided: ɵangular_packages_forms_forms_d, ɵInternalFormsSharedModule, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_z, ɵNgNoValidate, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_y, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_ba, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgFormSelectorWarning, NgModel, NgModelGroup, NumberValueAccessor, RadioControlValueAccessor, RangeValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function() { return ɵInternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function() { return ɵInternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function() { return NG_FORM_SELECTOR_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function() { return ɵNgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function() { return ɵNgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function() { return NG_MODEL_WITH_FORM_CONTROL_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function() { return ɵNgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function() { return ɵNgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bf", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function() { return REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormSelectorWarning", function() { return NgFormSelectorWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/**
 * @license Angular v8.2.7
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description
 * Defines an interface that acts as a bridge between the Angular forms API and a
 * native element in the DOM.
 *
 * Implement this interface to create a custom form control directive
 * that integrates with Angular forms.
 *
 * @see DefaultValueAccessor
 *
 * \@publicApi
 * @record
 */
function ControlValueAccessor() { }
if (false) {}
/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 * \@publicApi
 * @type {?}
 */
const NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => CheckboxControlValueAccessor)),
    multi: true,
};
/**
 * \@description
 * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
 * element.
 *
 * \@usageNotes
 *
 * ### Using a checkbox with a reactive form.
 *
 * The following example shows how to use a checkbox with a reactive form.
 *
 * ```ts
 * const rememberLoginControl = new FormControl();
 * ```
 *
 * ```
 * <input type="checkbox" [formControl]="rememberLoginControl">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
class CheckboxControlValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * Sets the "checked" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    writeValue(value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
    }
    /**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
}
CheckboxControlValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                providers: [CHECKBOX_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
CheckboxControlValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => DefaultValueAccessor)),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 * @return {?}
 */
function _isAndroid() {
    /** @type {?} */
    const userAgent = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * \@description
 * Provide this token to control if form directives buffer IME input until
 * the "compositionend" event occurs.
 * \@publicApi
 * @type {?}
 */
const COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
/**
 * \@description
 * The default `ControlValueAccessor` for writing a value and listening to changes on input
 * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * \@usageNotes
 *
 * ### Using the default value accessor
 *
 * The following example shows how to use an input element that activates the default value accessor
 * (in this case, a text field).
 *
 * ```ts
 * const firstNameControl = new FormControl();
 * ```
 *
 * ```
 * <input type="text" [formControl]="firstNameControl">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
class DefaultValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _compositionMode
     */
    constructor(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        /**
         * \@description
         * The registered callback function called when an input event occurs on the input element.
         */
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        /**
         * Whether the user is creating a composition string (IME events).
         */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    /**
     * Sets the "value" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    writeValue(value) {
        /** @type {?} */
        const normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    }
    /**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _handleInput(value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this.onChange(value);
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    _compositionStart() { this._composing = true; }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _compositionEnd(value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
    }
}
DefaultValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                // TODO: vsavkin replace the above selector with the one below it once
                // https://github.com/angular/angular/issues/3011 is implemented
                // selector: '[ngModel],[formControl],[formControlName]',
                host: {
                    '(input)': '$any(this)._handleInput($event.target.value)',
                    '(blur)': 'onTouched()',
                    '(compositionstart)': '$any(this)._compositionStart()',
                    '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
                },
                providers: [DEFAULT_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
DefaultValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COMPOSITION_BUFFER_MODE,] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@description
 * Base class for control directives.
 *
 * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
 *
 * \@publicApi
 * @abstract
 */
class AbstractControlDirective {
    /**
     * \@description
     * Reports the value of the control if it is present, otherwise null.
     * @return {?}
     */
    get value() { return this.control ? this.control.value : null; }
    /**
     * \@description
     * Reports whether the control is valid. A control is considered valid if no
     * validation errors exist with the current value.
     * If the control is not present, null is returned.
     * @return {?}
     */
    get valid() { return this.control ? this.control.valid : null; }
    /**
     * \@description
     * Reports whether the control is invalid, meaning that an error exists in the input value.
     * If the control is not present, null is returned.
     * @return {?}
     */
    get invalid() { return this.control ? this.control.invalid : null; }
    /**
     * \@description
     * Reports whether a control is pending, meaning that that async validation is occurring and
     * errors are not yet available for the input value. If the control is not present, null is
     * returned.
     * @return {?}
     */
    get pending() { return this.control ? this.control.pending : null; }
    /**
     * \@description
     * Reports whether the control is disabled, meaning that the control is disabled
     * in the UI and is exempt from validation checks and excluded from aggregate
     * values of ancestor controls. If the control is not present, null is returned.
     * @return {?}
     */
    get disabled() { return this.control ? this.control.disabled : null; }
    /**
     * \@description
     * Reports whether the control is enabled, meaning that the control is included in ancestor
     * calculations of validity or value. If the control is not present, null is returned.
     * @return {?}
     */
    get enabled() { return this.control ? this.control.enabled : null; }
    /**
     * \@description
     * Reports the control's validation errors. If the control is not present, null is returned.
     * @return {?}
     */
    get errors() { return this.control ? this.control.errors : null; }
    /**
     * \@description
     * Reports whether the control is pristine, meaning that the user has not yet changed
     * the value in the UI. If the control is not present, null is returned.
     * @return {?}
     */
    get pristine() { return this.control ? this.control.pristine : null; }
    /**
     * \@description
     * Reports whether the control is dirty, meaning that the user has changed
     * the value in the UI. If the control is not present, null is returned.
     * @return {?}
     */
    get dirty() { return this.control ? this.control.dirty : null; }
    /**
     * \@description
     * Reports whether the control is touched, meaning that the user has triggered
     * a `blur` event on it. If the control is not present, null is returned.
     * @return {?}
     */
    get touched() { return this.control ? this.control.touched : null; }
    /**
     * \@description
     * Reports the validation status of the control. Possible values include:
     * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
     * If the control is not present, null is returned.
     * @return {?}
     */
    get status() { return this.control ? this.control.status : null; }
    /**
     * \@description
     * Reports whether the control is untouched, meaning that the user has not yet triggered
     * a `blur` event on it. If the control is not present, null is returned.
     * @return {?}
     */
    get untouched() { return this.control ? this.control.untouched : null; }
    /**
     * \@description
     * Returns a multicasting observable that emits a validation status whenever it is
     * calculated for the control. If the control is not present, null is returned.
     * @return {?}
     */
    get statusChanges() {
        return this.control ? this.control.statusChanges : null;
    }
    /**
     * \@description
     * Returns a multicasting observable of value changes for the control that emits every time the
     * value of the control changes in the UI or programmatically.
     * If the control is not present, null is returned.
     * @return {?}
     */
    get valueChanges() {
        return this.control ? this.control.valueChanges : null;
    }
    /**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */
    get path() { return null; }
    /**
     * \@description
     * Resets the control with the provided value if the control is present.
     * @param {?=} value
     * @return {?}
     */
    reset(value = undefined) {
        if (this.control)
            this.control.reset(value);
    }
    /**
     * \@description
     * Reports whether the control with the given path has the error specified.
     *
     * \@usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @param {?} errorCode The code of the error to check
     * @param {?=} path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @return {?} whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */
    hasError(errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
    }
    /**
     * \@description
     * Reports error data for the control with the given path.
     *
     * \@usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @param {?} errorCode The code of the error to check
     * @param {?=} path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @return {?} error data for that particular error. If the control or error is not present,
     * null is returned.
     */
    getError(errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description
 * A base class for directives that contain multiple registered instances of `NgControl`.
 * Only used by the forms module.
 *
 * \@publicApi
 * @abstract
 */
class ControlContainer extends AbstractControlDirective {
    /**
     * \@description
     * The top-level form directive for the control.
     * @return {?}
     */
    get formDirective() { return null; }
    /**
     * \@description
     * The path to this group.
     * @return {?}
     */
    get path() { return null; }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * \@description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * \@publicApi
 * @abstract
 */
class NgControl extends AbstractControlDirective {
    constructor() {
        super(...arguments);
        /**
         * \@description
         * The parent form for the control.
         *
         * \@internal
         */
        this._parent = null;
        /**
         * \@description
         * The name for the control
         */
        this.name = null;
        /**
         * \@description
         * The value accessor for the control
         */
        this.valueAccessor = null;
        /**
         * \@description
         * The uncomposed array of synchronous validators for the control
         *
         * \@internal
         */
        this._rawValidators = [];
        /**
         * \@description
         * The uncomposed array of async validators for the control
         *
         * \@internal
         */
        this._rawAsyncValidators = [];
    }
    /**
     * \@description
     * The registered synchronous validator function for the control
     *
     * @throws An exception that this method is not implemented
     * @return {?}
     */
    get validator() { return (/** @type {?} */ (unimplemented())); }
    /**
     * \@description
     * The registered async validator function for the control
     *
     * @throws An exception that this method is not implemented
     * @return {?}
     */
    get asyncValidator() { return (/** @type {?} */ (unimplemented())); }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AbstractControlStatus {
    /**
     * @param {?} cd
     */
    constructor(cd) { this._cd = cd; }
    /**
     * @return {?}
     */
    get ngClassUntouched() { return this._cd.control ? this._cd.control.untouched : false; }
    /**
     * @return {?}
     */
    get ngClassTouched() { return this._cd.control ? this._cd.control.touched : false; }
    /**
     * @return {?}
     */
    get ngClassPristine() { return this._cd.control ? this._cd.control.pristine : false; }
    /**
     * @return {?}
     */
    get ngClassDirty() { return this._cd.control ? this._cd.control.dirty : false; }
    /**
     * @return {?}
     */
    get ngClassValid() { return this._cd.control ? this._cd.control.valid : false; }
    /**
     * @return {?}
     */
    get ngClassInvalid() { return this._cd.control ? this._cd.control.invalid : false; }
    /**
     * @return {?}
     */
    get ngClassPending() { return this._cd.control ? this._cd.control.pending : false; }
}
if (false) {}
/** @type {?} */
const ngControlStatusHost = {
    '[class.ng-untouched]': 'ngClassUntouched',
    '[class.ng-touched]': 'ngClassTouched',
    '[class.ng-pristine]': 'ngClassPristine',
    '[class.ng-dirty]': 'ngClassDirty',
    '[class.ng-valid]': 'ngClassValid',
    '[class.ng-invalid]': 'ngClassInvalid',
    '[class.ng-pending]': 'ngClassPending',
};
/**
 * \@description
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status.
 *
 * \@usageNotes
 *
 * ### CSS classes applied
 *
 * The following classes are applied as the properties become true:
 *
 * * ng-valid
 * * ng-invalid
 * * ng-pending
 * * ng-pristine
 * * ng-dirty
 * * ng-untouched
 * * ng-touched
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
class NgControlStatus extends AbstractControlStatus {
    /**
     * @param {?} cd
     */
    constructor(cd) { super(cd); }
}
NgControlStatus.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] }
];
/** @nocollapse */
NgControlStatus.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
];
/**
 * \@description
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * @see `NgControlStatus`
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
class NgControlStatusGroup extends AbstractControlStatus {
    /**
     * @param {?} cd
     */
    constructor(cd) { super(cd); }
}
NgControlStatusGroup.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                host: ngControlStatusHost
            },] }
];
/** @nocollapse */
NgControlStatusGroup.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * \@description
 * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
 *
 * @see `NG_ASYNC_VALIDATORS`
 *
 * \@usageNotes
 *
 * ### Providing a custom validator
 *
 * The following example registers a custom validator directive. Adding the validator to the
 * existing collection of validators requires the `multi: true` option.
 *
 * ```typescript
 * \@Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors | null {
 *     return { 'custom': true };
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @type {?}
 */
const NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
/**
 * \@description
 * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
 *
 * @see `NG_VALIDATORS`
 *
 * \@publicApi
 * @type {?}
 */
const NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
/** @type {?} */
const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * \@description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * @see [Form Validation](/guide/form-validation)
 *
 * \@publicApi
 */
class Validators {
    /**
     * \@description
     * Validator that requires the control's value to be greater than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * \@usageNotes
     *
     * ### Validate against a minimum of 3
     *
     * ```typescript
     * const control = new FormControl(2, Validators.min(3));
     *
     * console.log(control.errors); // {min: {min: 3, actual: 2}}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} min
     * @return {?} A validator function that returns an error map with the
     * `min` property if the validation check fails, otherwise `null`.
     *
     */
    static min(min) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                return null; // don't validate empty values to allow optional controls
            }
            /** @type {?} */
            const value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
            return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
        });
    }
    /**
     * \@description
     * Validator that requires the control's value to be less than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * \@usageNotes
     *
     * ### Validate against a maximum of 15
     *
     * ```typescript
     * const control = new FormControl(16, Validators.max(15));
     *
     * console.log(control.errors); // {max: {max: 15, actual: 16}}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} max
     * @return {?} A validator function that returns an error map with the
     * `max` property if the validation check fails, otherwise `null`.
     *
     */
    static max(max) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                return null; // don't validate empty values to allow optional controls
            }
            /** @type {?} */
            const value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
            return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
        });
    }
    /**
     * \@description
     * Validator that requires the control have a non-empty value.
     *
     * \@usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} control
     * @return {?} An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     */
    static required(control) {
        return isEmptyInputValue(control.value) ? { 'required': true } : null;
    }
    /**
     * \@description
     * Validator that requires the control's value be true. This validator is commonly
     * used for required checkboxes.
     *
     * \@usageNotes
     *
     * ### Validate that the field value is true
     *
     * ```typescript
     * const control = new FormControl('', Validators.requiredTrue);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} control
     * @return {?} An error map that contains the `required` property
     * set to `true` if the validation check fails, otherwise `null`.
     *
     */
    static requiredTrue(control) {
        return control.value === true ? null : { 'required': true };
    }
    /**
     * \@description
     * Validator that requires the control's value pass an email validation test.
     *
     * \@usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad\@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} control
     * @return {?} An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     */
    static email(control) {
        if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    }
    /**
     * \@description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute.
     *
     * \@usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} minLength
     * @return {?} A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     *
     */
    static minLength(minLength) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            /** @type {?} */
            const length = control.value ? control.value.length : 0;
            return length < minLength ?
                { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                null;
        });
    }
    /**
     * \@description
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute.
     *
     * \@usageNotes
     *
     * ### Validate that the field has maximum of 5 characters
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} maxLength
     * @return {?} A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     *
     */
    static maxLength(maxLength) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const length = control.value ? control.value.length : 0;
            return length > maxLength ?
                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                null;
        });
    }
    /**
     * \@description
     * Validator that requires the control's value to match a regex pattern. This validator is also
     * provided by default if you use the HTML5 `pattern` attribute.
     *
     * \@usageNotes
     *
     * ### Validate that the field only contains letters or spaces
     *
     * ```typescript
     * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
     *
     * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
     * ```
     *
     * ```html
     * <input pattern="[a-zA-Z ]*">
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} pattern A regular expression to be used as is to test the values, or a string.
     * If a string is passed, the `^` character is prepended and the `$` character is
     * appended to the provided string (if not already present), and the resulting regular
     * expression is used to test the values.
     *
     * @return {?} A validator function that returns an error map with the
     * `pattern` property if the validation check fails, otherwise `null`.
     *
     */
    static pattern(pattern) {
        if (!pattern)
            return Validators.nullValidator;
        /** @type {?} */
        let regex;
        /** @type {?} */
        let regexStr;
        if (typeof pattern === 'string') {
            regexStr = '';
            if (pattern.charAt(0) !== '^')
                regexStr += '^';
            regexStr += pattern;
            if (pattern.charAt(pattern.length - 1) !== '$')
                regexStr += '$';
            regex = new RegExp(regexStr);
        }
        else {
            regexStr = pattern.toString();
            regex = pattern;
        }
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            /** @type {?} */
            const value = control.value;
            return regex.test(value) ? null :
                { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
        });
    }
    /**
     * \@description
     * Validator that performs no operation.
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} control
     * @return {?}
     */
    static nullValidator(control) { return null; }
    /**
     * @param {?} validators
     * @return {?}
     */
    static compose(validators) {
        if (!validators)
            return null;
        /** @type {?} */
        const presentValidators = (/** @type {?} */ (validators.filter(isPresent)));
        if (presentValidators.length == 0)
            return null;
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        });
    }
    /**
     * \@description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} validators
     * @return {?} A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     *
     */
    static composeAsync(validators) {
        if (!validators)
            return null;
        /** @type {?} */
        const presentValidators = (/** @type {?} */ (validators.filter(isPresent)));
        if (presentValidators.length == 0)
            return null;
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            const observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
        });
    }
}
/**
 * @param {?} o
 * @return {?}
 */
function isPresent(o) {
    return o != null;
}
/**
 * @param {?} r
 * @return {?}
 */
function toObservable(r) {
    /** @type {?} */
    const obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;
    if (!(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs))) {
        throw new Error(`Expected validator to return Promise or Observable.`);
    }
    return obs;
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeValidators(control, validators) {
    return validators.map((/**
     * @param {?} v
     * @return {?}
     */
    v => v(control)));
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeAsyncValidators(control, validators) {
    return validators.map((/**
     * @param {?} v
     * @return {?}
     */
    v => v(control)));
}
/**
 * @param {?} arrayOfErrors
 * @return {?}
 */
function _mergeErrors(arrayOfErrors) {
    /** @type {?} */
    const res = arrayOfErrors.reduce((/**
     * @param {?} res
     * @param {?} errors
     * @return {?}
     */
    (res, errors) => {
        return errors != null ? Object.assign({}, (/** @type {?} */ (res)), errors) : (/** @type {?} */ (res));
    }), {});
    return Object.keys(res).length === 0 ? null : res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeValidator(validator) {
    if (((/** @type {?} */ (validator))).validate) {
        return (/**
         * @param {?} c
         * @return {?}
         */
        (c) => ((/** @type {?} */ (validator))).validate(c));
    }
    else {
        return (/** @type {?} */ (validator));
    }
}
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeAsyncValidator(validator) {
    if (((/** @type {?} */ (validator))).validate) {
        return (/**
         * @param {?} c
         * @return {?}
         */
        (c) => ((/** @type {?} */ (validator))).validate(c));
    }
    else {
        return (/** @type {?} */ (validator));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => NumberValueAccessor)),
    multi: true
};
/**
 * \@description
 * The `ControlValueAccessor` for writing a number value and listening to number input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * \@usageNotes
 *
 * ### Using a number input with a reactive form.
 *
 * The following example shows how to use a number input with a reactive form.
 *
 * ```ts
 * const totalCountControl = new FormControl();
 * ```
 *
 * ```
 * <input type="number" [formControl]="totalCountControl">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
class NumberValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * Sets the "value" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    writeValue(value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        /** @type {?} */
        const normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    }
    /**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => { fn(value == '' ? null : parseFloat(value)); });
    }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
}
NumberValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [NUMBER_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
NumberValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => RadioControlValueAccessor)),
    multi: true
};
/**
 * \@description
 * Class used by Angular to track radio buttons. For internal use only.
 */
class RadioControlRegistry {
    constructor() {
        this._accessors = [];
    }
    /**
     * \@description
     * Adds a control to the internal registry. For internal use only.
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    add(control, accessor) {
        this._accessors.push([control, accessor]);
    }
    /**
     * \@description
     * Removes a control from the internal registry. For internal use only.
     * @param {?} accessor
     * @return {?}
     */
    remove(accessor) {
        for (let i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    }
    /**
     * \@description
     * Selects a radio button. For internal use only.
     * @param {?} accessor
     * @return {?}
     */
    select(accessor) {
        this._accessors.forEach((/**
         * @param {?} c
         * @return {?}
         */
        (c) => {
            if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        }));
    }
    /**
     * @private
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    _isSameGroup(controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    }
}
RadioControlRegistry.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
if (false) {}
/**
 * \@description
 * The `ControlValueAccessor` for writing radio control values and listening to radio control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * \@usageNotes
 *
 * ### Using radio buttons with reactive form directives
 *
 * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
 * a reactive form, radio buttons in the same group should have the same `formControlName`.
 * Providing a `name` attribute is optional.
 *
 * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
class RadioControlValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _registry
     * @param {?} _injector
     */
    constructor(_renderer, _elementRef, _registry, _injector) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * \@description
     * A lifecycle method called when the directive is initialized. For internal use only.
     * @return {?}
     */
    ngOnInit() {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    }
    /**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */
    ngOnDestroy() { this._registry.remove(this); }
    /**
     * \@description
     * Sets the "checked" property value on the radio input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    writeValue(value) {
        this._state = value === this.value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
    }
    /**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnChange(fn) {
        this._fn = fn;
        this.onChange = (/**
         * @return {?}
         */
        () => {
            fn(this.value);
            this._registry.select(this);
        });
    }
    /**
     * Sets the "value" on the radio input element and unchecks it.
     *
     * @param {?} value
     * @return {?}
     */
    fireUncheck(value) { this.writeValue(value); }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * @private
     * @return {?}
     */
    _checkName() {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    }
    /**
     * @private
     * @return {?}
     */
    _throwNameError() {
        throw new Error(`
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
    }
}
RadioControlValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                providers: [RADIO_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
RadioControlValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: RadioControlRegistry },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
RadioControlValueAccessor.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => RangeValueAccessor)),
    multi: true
};
/**
 * \@description
 * The `ControlValueAccessor` for writing a range value and listening to range input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * \@usageNotes
 *
 * ### Using a range input with a reactive form
 *
 * The following example shows how to use a range input with a reactive form.
 *
 * ```ts
 * const ageControl = new FormControl();
 * ```
 *
 * ```
 * <input type="range" [formControl]="ageControl">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
class RangeValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * Sets the "value" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    writeValue(value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    }
    /**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => { fn(value == '' ? null : parseFloat(value)); });
    }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Sets the "disabled" property on the range input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
}
RangeValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [RANGE_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
RangeValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
const FormErrorExamples = {
    formControlName: `
    <div [formGroup]="myGroup">
      <input formControlName="firstName">
    </div>

    In your class:

    this.myGroup = new FormGroup({
       firstName: new FormControl()
    });`,
    formGroupName: `
    <div [formGroup]="myGroup">
       <div formGroupName="person">
          <input formControlName="firstName">
       </div>
    </div>

    In your class:

    this.myGroup = new FormGroup({
       person: new FormGroup({ firstName: new FormControl() })
    });`,
    formArrayName: `
    <div [formGroup]="myGroup">
      <div formArrayName="cities">
        <div *ngFor="let city of cityArray.controls; index as i">
          <input [formControlName]="i">
        </div>
      </div>
    </div>

    In your class:

    this.cityArray = new FormArray([new FormControl('SF')]);
    this.myGroup = new FormGroup({
      cities: this.cityArray
    });`,
    ngModelGroup: `
    <form>
       <div ngModelGroup="person">
          <input [(ngModel)]="person.name" name="firstName">
       </div>
    </form>`,
    ngModelWithFormGroup: `
    <div [formGroup]="myGroup">
       <input formControlName="firstName">
       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
    </div>
  `
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReactiveErrors {
    /**
     * @return {?}
     */
    static controlParentException() {
        throw new Error(`formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
       directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${FormErrorExamples.formControlName}`);
    }
    /**
     * @return {?}
     */
    static ngModelGroupException() {
        throw new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

       Option 1:  Update the parent to be formGroupName (reactive form strategy)

        ${FormErrorExamples.formGroupName}

        Option 2: Use ngModel instead of formControlName (template-driven strategy)

        ${FormErrorExamples.ngModelGroup}`);
    }
    /**
     * @return {?}
     */
    static missingFormException() {
        throw new Error(`formGroup expects a FormGroup instance. Please pass one in.

       Example:

       ${FormErrorExamples.formControlName}`);
    }
    /**
     * @return {?}
     */
    static groupParentException() {
        throw new Error(`formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${FormErrorExamples.formGroupName}`);
    }
    /**
     * @return {?}
     */
    static arrayParentException() {
        throw new Error(`formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
       directive and pass it an existing FormGroup instance (you can create one in your class).

        Example:

        ${FormErrorExamples.formArrayName}`);
    }
    /**
     * @return {?}
     */
    static disabledAttrWarning() {
        console.warn(`
      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
      you. We recommend using this approach to avoid 'changed after checked' errors.
       
      Example: 
      form = new FormGroup({
        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
        last: new FormControl('Drew', Validators.required)
      });
    `);
    }
    /**
     * @param {?} directiveName
     * @return {?}
     */
    static ngModelWarning(directiveName) {
        console.warn(`
    It looks like you're using ngModel on the same form field as ${directiveName}. 
    Support for using the ngModel input property and ngModelChange event with 
    reactive form directives has been deprecated in Angular v6 and will be removed 
    in Angular v7.
    
    For more information on this, see our API docs here:
    https://angular.io/api/forms/${directiveName === 'formControl' ? 'FormControlDirective'
            : 'FormControlName'}#use-with-ngmodel
    `);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => SelectControlValueAccessor)),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString(id, value) {
    if (id == null)
        return `${value}`;
    if (value && typeof value === 'object')
        value = 'Object';
    return `${id}: ${value}`.slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/**
 * \@description
 * The `ControlValueAccessor` for writing select control values and listening to select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * \@usageNotes
 *
 * ### Using select controls in a reactive form
 *
 * The following examples show how to use a select control in a reactive form.
 *
 * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Using select controls in a template-driven form
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * ### Customizing option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * ```ts
 * const selectedCountriesControl = new FormControl();
 * ```
 *
 * ```
 * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * **Note:** We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
class SelectControlValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */
        this._optionMap = new Map();
        /**
         * \@internal
         */
        this._idCounter = 0;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
    }
    /**
     * \@description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     * @param {?} fn
     * @return {?}
     */
    set compareWith(fn) {
        if (typeof fn !== 'function') {
            throw new Error(`compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
    }
    /**
     * Sets the "value" property on the input element. The "selectedIndex"
     * property is also set if an ID is provided on the option element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        /** @type {?} */
        const id = this._getOptionId(value);
        if (id == null) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
        }
        /** @type {?} */
        const valueString = _buildValueString(id, value);
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
    }
    /**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = (/**
         * @param {?} valueString
         * @return {?}
         */
        (valueString) => {
            this.value = this._getOptionValue(valueString);
            fn(this.value);
        });
    }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Sets the "disabled" property on the select input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * \@internal
     * @return {?}
     */
    _registerOption() { return (this._idCounter++).toString(); }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _getOptionId(value) {
        for (const id of Array.from(this._optionMap.keys())) {
            if (this._compareWith(this._optionMap.get(id), value))
                return id;
        }
        return null;
    }
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    _getOptionValue(valueString) {
        /** @type {?} */
        const id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    }
}
SelectControlValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                providers: [SELECT_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
SelectControlValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
SelectControlValueAccessor.propDecorators = {
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}
/**
 * \@description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectControlValueAccessor`
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
class NgSelectOption {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
            this.id = this._select._registerOption();
    }
    /**
     * \@description
     * Tracks the value bound to the option element. Unlike the value binding,
     * ngValue supports binding to objects.
     * @param {?} value
     * @return {?}
     */
    set ngValue(value) {
        if (this._select == null)
            return;
        this._select._optionMap.set(this.id, value);
        this._setElementValue(_buildValueString(this.id, value));
        this._select.writeValue(this._select.value);
    }
    /**
     * \@description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._setElementValue(value);
        if (this._select)
            this._select.writeValue(this._select.value);
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */
    ngOnDestroy() {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    }
}
NgSelectOption.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'option' },] }
];
/** @nocollapse */
NgSelectOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: SelectControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
];
NgSelectOption.propDecorators = {
    ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngValue',] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => SelectMultipleControlValueAccessor)),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString$1(id, value) {
    if (id == null)
        return `${value}`;
    if (typeof value === 'string')
        value = `'${value}'`;
    if (value && typeof value === 'object')
        value = 'Object';
    return `${id}: ${value}`.slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId$1(valueString) {
    return valueString.split(':')[0];
}
/**
 * Mock interface for HTML Options
 * @record
 */
function HTMLOption() { }
if (false) {}
/**
 * Mock interface for HTMLCollection
 * @abstract
 */
class HTMLCollection {
}
if (false) {}
/**
 * \@description
 * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
 * directives.
 *
 * @see `SelectControlValueAccessor`
 *
 * \@usageNotes
 *
 * ### Using a multi-select control
 *
 * The follow example shows you how to use a multi-select control with a reactive form.
 *
 * ```ts
 * const countryControl = new FormControl();
 * ```
 *
 * ```
 * <select multiple name="countries" [formControl]="countryControl">
 *   <option *ngFor="let country of countries" [ngValue]="country">
 *     {{ country.name }}
 *   </option>
 * </select>
 * ```
 *
 * ### Customizing option selection
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * See the `SelectControlValueAccessor` for usage.
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
class SelectMultipleControlValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */
        this._optionMap = new Map();
        /**
         * \@internal
         */
        this._idCounter = 0;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
    }
    /**
     * \@description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     * @param {?} fn
     * @return {?}
     */
    set compareWith(fn) {
        if (typeof fn !== 'function') {
            throw new Error(`compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
    }
    /**
     * \@description
     * Sets the "value" property on one or of more
     * of the select's options.
     *
     * @param {?} value The value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        /** @type {?} */
        let optionSelectedStateSetter;
        if (Array.isArray(value)) {
            // convert values to ids
            /** @type {?} */
            const ids = value.map((/**
             * @param {?} v
             * @return {?}
             */
            (v) => this._getOptionId(v)));
            optionSelectedStateSetter = (/**
             * @param {?} opt
             * @param {?} o
             * @return {?}
             */
            (opt, o) => { opt._setSelected(ids.indexOf(o.toString()) > -1); });
        }
        else {
            optionSelectedStateSetter = (/**
             * @param {?} opt
             * @param {?} o
             * @return {?}
             */
            (opt, o) => { opt._setSelected(false); });
        }
        this._optionMap.forEach(optionSelectedStateSetter);
    }
    /**
     * \@description
     * Registers a function called when the control value changes
     * and writes an array of the selected options.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => {
            /** @type {?} */
            const selected = [];
            if (_.hasOwnProperty('selectedOptions')) {
                /** @type {?} */
                const options = _.selectedOptions;
                for (let i = 0; i < options.length; i++) {
                    /** @type {?} */
                    const opt = options.item(i);
                    /** @type {?} */
                    const val = this._getOptionValue(opt.value);
                    selected.push(val);
                }
            }
            // Degrade on IE
            else {
                /** @type {?} */
                const options = (/** @type {?} */ (_.options));
                for (let i = 0; i < options.length; i++) {
                    /** @type {?} */
                    const opt = options.item(i);
                    if (opt.selected) {
                        /** @type {?} */
                        const val = this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
            }
            this.value = selected;
            fn(selected);
        });
    }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Sets the "disabled" property on the select input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _registerOption(value) {
        /** @type {?} */
        const id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _getOptionId(value) {
        for (const id of Array.from(this._optionMap.keys())) {
            if (this._compareWith((/** @type {?} */ (this._optionMap.get(id)))._value, value))
                return id;
        }
        return null;
    }
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    _getOptionValue(valueString) {
        /** @type {?} */
        const id = _extractId$1(valueString);
        return this._optionMap.has(id) ? (/** @type {?} */ (this._optionMap.get(id)))._value : valueString;
    }
}
SelectMultipleControlValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
SelectMultipleControlValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
SelectMultipleControlValueAccessor.propDecorators = {
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}
/**
 * \@description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectMultipleControlValueAccessor`
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
class ɵNgSelectMultipleOption {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
            this.id = this._select._registerOption(this);
        }
    }
    /**
     * \@description
     * Tracks the value bound to the option element. Unlike the value binding,
     * ngValue supports binding to objects.
     * @param {?} value
     * @return {?}
     */
    set ngValue(value) {
        if (this._select == null)
            return;
        this._value = value;
        this._setElementValue(_buildValueString$1(this.id, value));
        this._select.writeValue(this._select.value);
    }
    /**
     * \@description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this._select) {
            this._value = value;
            this._setElementValue(_buildValueString$1(this.id, value));
            this._select.writeValue(this._select.value);
        }
        else {
            this._setElementValue(value);
        }
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /**
     * \@internal
     * @param {?} selected
     * @return {?}
     */
    _setSelected(selected) {
        this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    }
    /**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */
    ngOnDestroy() {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    }
}
ɵNgSelectMultipleOption.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'option' },] }
];
/** @nocollapse */
ɵNgSelectMultipleOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
];
ɵNgSelectMultipleOption.propDecorators = {
    ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngValue',] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} name
 * @param {?} parent
 * @return {?}
 */
function controlPath(name, parent) {
    return [...(/** @type {?} */ (parent.path)), name];
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpControl(control, dir) {
    if (!control)
        _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor)
        _throwError(dir, 'No value accessor for form control with');
    control.validator = Validators.compose([(/** @type {?} */ (control.validator)), dir.validator]);
    control.asyncValidator = Validators.composeAsync([(/** @type {?} */ (control.asyncValidator)), dir.asyncValidator]);
    (/** @type {?} */ (dir.valueAccessor)).writeValue(control.value);
    setUpViewChangePipeline(control, dir);
    setUpModelChangePipeline(control, dir);
    setUpBlurPipeline(control, dir);
    if ((/** @type {?} */ (dir.valueAccessor)).setDisabledState) {
        control.registerOnDisabledChange((/**
         * @param {?} isDisabled
         * @return {?}
         */
        (isDisabled) => { (/** @type {?} */ ((/** @type {?} */ (dir.valueAccessor)).setDisabledState))(isDisabled); }));
    }
    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    dir._rawValidators.forEach((/**
     * @param {?} validator
     * @return {?}
     */
    (validator) => {
        if (((/** @type {?} */ (validator))).registerOnValidatorChange)
            (/** @type {?} */ (((/** @type {?} */ (validator))).registerOnValidatorChange))((/**
             * @return {?}
             */
            () => control.updateValueAndValidity()));
    }));
    dir._rawAsyncValidators.forEach((/**
     * @param {?} validator
     * @return {?}
     */
    (validator) => {
        if (((/** @type {?} */ (validator))).registerOnValidatorChange)
            (/** @type {?} */ (((/** @type {?} */ (validator))).registerOnValidatorChange))((/**
             * @return {?}
             */
            () => control.updateValueAndValidity()));
    }));
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function cleanUpControl(control, dir) {
    (/** @type {?} */ (dir.valueAccessor)).registerOnChange((/**
     * @return {?}
     */
    () => _noControlError(dir)));
    (/** @type {?} */ (dir.valueAccessor)).registerOnTouched((/**
     * @return {?}
     */
    () => _noControlError(dir)));
    dir._rawValidators.forEach((/**
     * @param {?} validator
     * @return {?}
     */
    (validator) => {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    }));
    dir._rawAsyncValidators.forEach((/**
     * @param {?} validator
     * @return {?}
     */
    (validator) => {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    }));
    if (control)
        control._clearChangeFns();
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpViewChangePipeline(control, dir) {
    (/** @type {?} */ (dir.valueAccessor)).registerOnChange((/**
     * @param {?} newValue
     * @return {?}
     */
    (newValue) => {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change')
            updateControl(control, dir);
    }));
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpBlurPipeline(control, dir) {
    (/** @type {?} */ (dir.valueAccessor)).registerOnTouched((/**
     * @return {?}
     */
    () => {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange)
            updateControl(control, dir);
        if (control.updateOn !== 'submit')
            control.markAsTouched();
    }));
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function updateControl(control, dir) {
    if (control._pendingDirty)
        control.markAsDirty();
    control.setValue(control._pendingValue, { emitModelToViewChange: false });
    dir.viewToModelUpdate(control._pendingValue);
    control._pendingChange = false;
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpModelChangePipeline(control, dir) {
    control.registerOnChange((/**
     * @param {?} newValue
     * @param {?} emitModelEvent
     * @return {?}
     */
    (newValue, emitModelEvent) => {
        // control -> view
        (/** @type {?} */ (dir.valueAccessor)).writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    }));
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpFormContainer(control, dir) {
    if (control == null)
        _throwError(dir, 'Cannot find control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
/**
 * @param {?} dir
 * @return {?}
 */
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
/**
 * @param {?} dir
 * @param {?} message
 * @return {?}
 */
function _throwError(dir, message) {
    /** @type {?} */
    let messageEnd;
    if ((/** @type {?} */ (dir.path)).length > 1) {
        messageEnd = `path: '${(/** @type {?} */ (dir.path)).join(' -> ')}'`;
    }
    else if ((/** @type {?} */ (dir.path))[0]) {
        messageEnd = `name: '${dir.path}'`;
    }
    else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(`${message} ${messageEnd}`);
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeValidators(validators) {
    return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeAsyncValidators(validators) {
    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
        null;
}
/**
 * @param {?} changes
 * @param {?} viewModel
 * @return {?}
 */
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    /** @type {?} */
    const change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"])(viewModel, change.currentValue);
}
/** @type {?} */
const BUILTIN_ACCESSORS = [
    CheckboxControlValueAccessor,
    RangeValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
];
/**
 * @param {?} valueAccessor
 * @return {?}
 */
function isBuiltInAccessor(valueAccessor) {
    return BUILTIN_ACCESSORS.some((/**
     * @param {?} a
     * @return {?}
     */
    a => valueAccessor.constructor === a));
}
/**
 * @param {?} form
 * @param {?} directives
 * @return {?}
 */
function syncPendingControls(form, directives) {
    form._syncPendingControls();
    directives.forEach((/**
     * @param {?} dir
     * @return {?}
     */
    dir => {
        /** @type {?} */
        const control = (/** @type {?} */ (dir.control));
        if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
        }
    }));
}
// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
/**
 * @param {?} dir
 * @param {?} valueAccessors
 * @return {?}
 */
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    if (!Array.isArray(valueAccessors))
        _throwError(dir, 'Value accessor was not provided as an array for form control with');
    /** @type {?} */
    let defaultAccessor = undefined;
    /** @type {?} */
    let builtinAccessor = undefined;
    /** @type {?} */
    let customAccessor = undefined;
    valueAccessors.forEach((/**
     * @param {?} v
     * @return {?}
     */
    (v) => {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor)
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor)
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    }));
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
    _throwError(dir, 'No valid value accessor for form control with');
    return null;
}
/**
 * @template T
 * @param {?} list
 * @param {?} el
 * @return {?}
 */
function removeDir(list, el) {
    /** @type {?} */
    const index = list.indexOf(el);
    if (index > -1)
        list.splice(index, 1);
}
// TODO(kara): remove after deprecation period
/**
 * @param {?} name
 * @param {?} type
 * @param {?} instance
 * @param {?} warningConfig
 * @return {?}
 */
function _ngModelWarning(name, type, instance, warningConfig) {
    if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || warningConfig === 'never')
        return;
    if (((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce) ||
        (warningConfig === 'always' && !instance._ngModelWarningSent)) {
        ReactiveErrors.ngModelWarning(name);
        type._ngModelWarningSentOnce = true;
        instance._ngModelWarningSent = true;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 * @type {?}
 */
const VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 * @type {?}
 */
const INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 * @type {?}
 */
const PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 * @type {?}
 */
const DISABLED = 'DISABLED';
/**
 * @param {?} control
 * @param {?} path
 * @param {?} delimiter
 * @return {?}
 */
function _find(control, path, delimiter) {
    if (path == null)
        return null;
    if (!(path instanceof Array)) {
        path = ((/** @type {?} */ (path))).split(delimiter);
    }
    if (path instanceof Array && (path.length === 0))
        return null;
    return ((/** @type {?} */ (path))).reduce((/**
     * @param {?} v
     * @param {?} name
     * @return {?}
     */
    (v, name) => {
        if (v instanceof FormGroup) {
            return v.controls.hasOwnProperty((/** @type {?} */ (name))) ? v.controls[name] : null;
        }
        if (v instanceof FormArray) {
            return v.at((/** @type {?} */ (name))) || null;
        }
        return null;
    }), control);
}
/**
 * @param {?=} validatorOrOpts
 * @return {?}
 */
function coerceToValidator(validatorOrOpts) {
    /** @type {?} */
    const validator = (/** @type {?} */ ((isOptionsObj(validatorOrOpts) ? ((/** @type {?} */ (validatorOrOpts))).validators :
        validatorOrOpts)));
    return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
/**
 * @param {?=} asyncValidator
 * @param {?=} validatorOrOpts
 * @return {?}
 */
function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
    /** @type {?} */
    const origAsyncValidator = (/** @type {?} */ ((isOptionsObj(validatorOrOpts) ? ((/** @type {?} */ (validatorOrOpts))).asyncValidators :
        asyncValidator)));
    return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) :
        origAsyncValidator || null;
}
/**
 * Interface for options provided to an `AbstractControl`.
 *
 * \@publicApi
 * @record
 */
function AbstractControlOptions() { }
if (false) {}
/**
 * @param {?=} validatorOrOpts
 * @return {?}
 */
function isOptionsObj(validatorOrOpts) {
    return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
        typeof validatorOrOpts === 'object';
}
/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * @see [Forms Guide](/guide/forms)
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 * @see [Dynamic Forms Guide](/guide/dynamic-form)
 *
 * \@publicApi
 * @abstract
 */
class AbstractControl {
    /**
     * Initialize the AbstractControl instance.
     *
     * @param {?} validator The function that determines the synchronous validity of this control.
     * @param {?} asyncValidator The function that determines the asynchronous validity of this
     * control.
     */
    constructor(validator, asyncValidator) {
        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /**
         * \@internal
         */
        this._onCollectionChange = (/**
         * @return {?}
         */
        () => { });
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @return True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        this.pristine = true;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */
        this.touched = false;
        /**
         * \@internal
         */
        this._onDisabledChange = [];
    }
    /**
     * The parent control.
     * @return {?}
     */
    get parent() { return this._parent; }
    /**
     * A control is `valid` when its `status` is `VALID`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if the control has passed all of its validation tests,
     * false otherwise.
     */
    get valid() { return this.status === VALID; }
    /**
     * A control is `invalid` when its `status` is `INVALID`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if this control has failed one or more of its validation checks,
     * false otherwise.
     */
    get invalid() { return this.status === INVALID; }
    /**
     * A control is `pending` when its `status` is `PENDING`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if this control is in the process of conducting a validation check,
     * false otherwise.
     */
    get pending() { return this.status == PENDING; }
    /**
     * A control is `disabled` when its `status` is `DISABLED`.
     *
     * Disabled controls are exempt from validation checks and
     * are not included in the aggregate value of their ancestor
     * controls.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if the control is disabled, false otherwise.
     */
    get disabled() { return this.status === DISABLED; }
    /**
     * A control is `enabled` as long as its `status` is not `DISABLED`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if the control has any status other than 'DISABLED',
     * false if the status is 'DISABLED'.
     *
     */
    get enabled() { return this.status !== DISABLED; }
    /**
     * A control is `dirty` if the user has changed the value
     * in the UI.
     *
     * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
     * Programmatic changes to a control's value do not mark it dirty.
     */
    get dirty() { return !this.pristine; }
    /**
     * True if the control has not been marked as touched
     *
     * A control is `untouched` if the user has not yet triggered
     * a `blur` event on it.
     * @return {?}
     */
    get untouched() { return !this.touched; }
    /**
     * Reports the update strategy of the `AbstractControl` (meaning
     * the event on which the control updates itself).
     * Possible values: `'change'` | `'blur'` | `'submit'`
     * Default value: `'change'`
     * @return {?}
     */
    get updateOn() {
        return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
    }
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this overwrites any existing sync validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @param {?} newValidator
     * @return {?}
     */
    setValidators(newValidator) {
        this.validator = coerceToValidator(newValidator);
    }
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @param {?} newValidator
     * @return {?}
     */
    setAsyncValidators(newValidator) {
        this.asyncValidator = coerceToAsyncValidator(newValidator);
    }
    /**
     * Empties out the sync validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @return {?}
     */
    clearValidators() { this.validator = null; }
    /**
     * Empties out the async validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @return {?}
     */
    clearAsyncValidators() { this.asyncValidator = null; }
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value.
     *
     * @see `markAsUntouched()` / `markAsDirty()` / `markAsPristine()`
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes
     * and emits events events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    markAsTouched(opts = {}) {
        ((/** @type {?} */ (this))).touched = true;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
        }
    }
    /**
     * Marks the control and all its descendant controls as `touched`.
     * @see `markAsTouched()`
     * @return {?}
     */
    markAllAsTouched() {
        this.markAsTouched({ onlySelf: true });
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.markAllAsTouched()));
    }
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     * @see `markAsTouched()` / `markAsDirty()` / `markAsPristine()`
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    markAsUntouched(opts = {}) {
        ((/** @type {?} */ (this))).touched = false;
        this._pendingTouched = false;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => { control.markAsUntouched({ onlySelf: true }); }));
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    }
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @see `markAsTouched()` / `markAsUntouched()` / `markAsPristine()`
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    markAsDirty(opts = {}) {
        ((/** @type {?} */ (this))).pristine = false;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
        }
    }
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     * @see `markAsTouched()` / `markAsUntouched()` / `markAsDirty()`
     *
     * @param {?=} opts Configuration options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * @return {?}
     */
    markAsPristine(opts = {}) {
        ((/** @type {?} */ (this))).pristine = true;
        this._pendingDirty = false;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => { control.markAsPristine({ onlySelf: true }); }));
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    }
    /**
     * Marks the control as `pending`.
     *
     * A control is pending while the control performs async validation.
     *
     * @see {\@link AbstractControl.status}
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes and
     * emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
     * observable emits an event with the latest status the control is marked pending.
     * When false, no events are emitted.
     *
     * @return {?}
     */
    markAsPending(opts = {}) {
        ((/** @type {?} */ (this))).status = PENDING;
        if (opts.emitEvent !== false) {
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
        }
    }
    /**
     * Disables the control. This means the control is exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children are also disabled.
     *
     * @see {\@link AbstractControl.status}
     *
     * @param {?=} opts Configuration options that determine how the control propagates
     * changes and emits events after the control is disabled.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is disabled.
     * When false, no events are emitted.
     * @return {?}
     */
    disable(opts = {}) {
        // If parent has been marked artificially dirty we don't want to re-calculate the
        // parent's dirtiness based on the children.
        /** @type {?} */
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        ((/** @type {?} */ (this))).status = DISABLED;
        ((/** @type {?} */ (this))).errors = null;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => { control.disable(Object.assign({}, opts, { onlySelf: true })); }));
        this._updateValue();
        if (opts.emitEvent !== false) {
            ((/** @type {?} */ (this.valueChanges))).emit(this.value);
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        this._updateAncestors(Object.assign({}, opts, { skipPristineCheck }));
        this._onDisabledChange.forEach((/**
         * @param {?} changeFn
         * @return {?}
         */
        (changeFn) => changeFn(true)));
    }
    /**
     * Enables the control. This means the control is included in validation checks and
     * the aggregate value of its parent. Its status recalculates based on its value and
     * its validators.
     *
     * By default, if the control has children, all children are enabled.
     *
     * @see {\@link AbstractControl.status}
     *
     * @param {?=} opts Configure options that control how the control propagates changes and
     * emits events when marked as untouched
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is enabled.
     * When false, no events are emitted.
     * @return {?}
     */
    enable(opts = {}) {
        // If parent has been marked artificially dirty we don't want to re-calculate the
        // parent's dirtiness based on the children.
        /** @type {?} */
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        ((/** @type {?} */ (this))).status = VALID;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => { control.enable(Object.assign({}, opts, { onlySelf: true })); }));
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors(Object.assign({}, opts, { skipPristineCheck }));
        this._onDisabledChange.forEach((/**
         * @param {?} changeFn
         * @return {?}
         */
        (changeFn) => changeFn(false)));
    }
    /**
     * @private
     * @param {?} opts
     * @return {?}
     */
    _updateAncestors(opts) {
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
            if (!opts.skipPristineCheck) {
                this._parent._updatePristine();
            }
            this._parent._updateTouched();
        }
    }
    /**
     * @param {?} parent Sets the parent of the control
     * @return {?}
     */
    setParent(parent) { this._parent = parent; }
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param {?=} opts Configuration options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     * @return {?}
     */
    updateValueAndValidity(opts = {}) {
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            ((/** @type {?} */ (this))).errors = this._runValidator();
            ((/** @type {?} */ (this))).status = this._calculateStatus();
            if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
            }
        }
        if (opts.emitEvent !== false) {
            ((/** @type {?} */ (this.valueChanges))).emit(this.value);
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
        }
    }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _updateTreeValidity(opts = { emitEvent: true }) {
        this._forEachChild((/**
         * @param {?} ctrl
         * @return {?}
         */
        (ctrl) => ctrl._updateTreeValidity(opts)));
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
    }
    /**
     * @private
     * @return {?}
     */
    _setInitialStatus() {
        ((/** @type {?} */ (this))).status = this._allControlsDisabled() ? DISABLED : VALID;
    }
    /**
     * @private
     * @return {?}
     */
    _runValidator() {
        return this.validator ? this.validator(this) : null;
    }
    /**
     * @private
     * @param {?=} emitEvent
     * @return {?}
     */
    _runAsyncValidator(emitEvent) {
        if (this.asyncValidator) {
            ((/** @type {?} */ (this))).status = PENDING;
            /** @type {?} */
            const obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription =
                obs.subscribe((/**
                 * @param {?} errors
                 * @return {?}
                 */
                (errors) => this.setErrors(errors, { emitEvent })));
        }
    }
    /**
     * @private
     * @return {?}
     */
    _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    }
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * \@usageNotes
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */
    setErrors(errors, opts = {}) {
        ((/** @type {?} */ (this))).errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    }
    /**
     * Retrieves a child control given the control's name or path.
     *
     * \@usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     * @param {?} path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @return {?}
     */
    get(path) { return _find(this, path, '.'); }
    /**
     * \@description
     * Reports error data for the control with the given path.
     *
     * \@usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @param {?} errorCode The code of the error to check
     * @param {?=} path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @return {?} error data for that particular error. If the control or error is not present,
     * null is returned.
     */
    getError(errorCode, path) {
        /** @type {?} */
        const control = path ? this.get(path) : this;
        return control && control.errors ? control.errors[errorCode] : null;
    }
    /**
     * \@description
     * Reports whether the control with the given path has the error specified.
     *
     * \@usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @param {?} errorCode The code of the error to check
     * @param {?=} path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @return {?} whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */
    hasError(errorCode, path) {
        return !!this.getError(errorCode, path);
    }
    /**
     * Retrieves the top-level ancestor of this control.
     * @return {?}
     */
    get root() {
        /** @type {?} */
        let x = this;
        while (x._parent) {
            x = x._parent;
        }
        return x;
    }
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    _updateControlsErrors(emitEvent) {
        ((/** @type {?} */ (this))).status = this._calculateStatus();
        if (emitEvent) {
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    _initObservables() {
        ((/** @type {?} */ (this))).valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        ((/** @type {?} */ (this))).statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @private
     * @return {?}
     */
    _calculateStatus() {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    }
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    _anyControlsHaveStatus(status) {
        return this._anyControls((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.status === status));
    }
    /**
     * \@internal
     * @return {?}
     */
    _anyControlsDirty() {
        return this._anyControls((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.dirty));
    }
    /**
     * \@internal
     * @return {?}
     */
    _anyControlsTouched() {
        return this._anyControls((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.touched));
    }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _updatePristine(opts = {}) {
        ((/** @type {?} */ (this))).pristine = !this._anyControlsDirty();
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _updateTouched(opts = {}) {
        ((/** @type {?} */ (this))).touched = this._anyControlsTouched();
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    }
    /**
     * \@internal
     * @param {?} formState
     * @return {?}
     */
    _isBoxedValue(formState) {
        return typeof formState === 'object' && formState !== null &&
            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    }
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    _registerOnCollectionChange(fn) { this._onCollectionChange = fn; }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _setUpdateStrategy(opts) {
        if (isOptionsObj(opts) && ((/** @type {?} */ (opts))).updateOn != null) {
            this._updateOn = (/** @type {?} */ (((/** @type {?} */ (opts))).updateOn));
        }
    }
    /**
     * Check to see if parent has been marked artificially dirty.
     *
     * \@internal
     * @private
     * @param {?=} onlySelf
     * @return {?}
     */
    _parentMarkedDirty(onlySelf) {
        /** @type {?} */
        const parentDirty = this._parent && this._parent.dirty;
        return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
    }
}
if (false) {}
/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events.
 *
 * @see `AbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * \@usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 * ```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 * ```
 *
 * \@publicApi
 */
class FormControl extends AbstractControl {
    /**
     * Creates a new `FormControl` instance.
     *
     * @param {?=} formState Initializes the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator functions
     *
     */
    constructor(formState = null, validatorOrOpts, asyncValidator) {
        super(coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        /**
         * \@internal
         */
        this._onChange = [];
        this._applyFormState(formState);
        this._setUpdateStrategy(validatorOrOpts);
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        this._initObservables();
    }
    /**
     * Sets a new value for the form control.
     *
     * @param {?} value The new value for the control.
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     * @return {?}
     */
    setValue(value, options = {}) {
        ((/** @type {?} */ (this))).value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach((/**
             * @param {?} changeFn
             * @return {?}
             */
            (changeFn) => changeFn(this.value, options.emitViewToModelChange !== false)));
        }
        this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {\@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {\@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     *
     * @see `setValue` for options
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    patchValue(value, options = {}) {
        this.setValue(value, options);
    }
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param {?=} formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     * @return {?}
     */
    reset(formState = null, options = {}) {
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        this._pendingChange = false;
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() { }
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    _anyControls(condition) { return false; }
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() { return this.disabled; }
    /**
     * Register a listener for change events.
     *
     * @param {?} fn The method that is called when the value changes
     * @return {?}
     */
    registerOnChange(fn) { this._onChange.push(fn); }
    /**
     * \@internal
     * @return {?}
     */
    _clearChangeFns() {
        this._onChange = [];
        this._onDisabledChange = [];
        this._onCollectionChange = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * Register a listener for disabled events.
     *
     * @param {?} fn The method that is called when the disabled status changes.
     * @return {?}
     */
    registerOnDisabledChange(fn) {
        this._onDisabledChange.push(fn);
    }
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    _forEachChild(cb) { }
    /**
     * \@internal
     * @return {?}
     */
    _syncPendingControls() {
        if (this.updateOn === 'submit') {
            if (this._pendingDirty)
                this.markAsDirty();
            if (this._pendingTouched)
                this.markAsTouched();
            if (this._pendingChange) {
                this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                return true;
            }
        }
        return false;
    }
    /**
     * @private
     * @param {?} formState
     * @return {?}
     */
    _applyFormState(formState) {
        if (this._isBoxedValue(formState)) {
            ((/** @type {?} */ (this))).value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            ((/** @type {?} */ (this))).value = this._pendingValue = formState;
        }
    }
}
if (false) {}
/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * \@usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * \@publicApi
 */
class FormGroup extends AbstractControl {
    /**
     * Creates a new `FormGroup` instance.
     *
     * @param {?} controls A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator functions
     *
     */
    constructor(controls, validatorOrOpts, asyncValidator) {
        super(coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use {\@link FormGroup#addControl addControl} instead.
     *
     * @param {?} name The control name to register in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    registerControl(name, control) {
        if (this.controls[name])
            return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
    }
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param {?} name The control name to add to the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    addControl(name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    }
    /**
     * Remove a control from this group.
     *
     * @param {?} name The control name to remove from the collection
     * @return {?}
     */
    removeControl(name) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange((/**
             * @return {?}
             */
            () => { }));
        delete (this.controls[name]);
        this.updateValueAndValidity();
        this._onCollectionChange();
    }
    /**
     * Replace an existing control.
     *
     * @param {?} name The control name to replace in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    setControl(name, control) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange((/**
             * @return {?}
             */
            () => { }));
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    }
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * Reports false for disabled controls. If you'd like to check for existence in the group
     * only, use {\@link AbstractControl#get get} instead.
     *
     * @param {?} controlName The control name to check for existence in the collection
     *
     * @return {?} false for disabled controls, true otherwise.
     */
    contains(controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    }
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * \@usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you excluding the value of a control.
     *
     * @param {?} value The new value for the control that matches the structure of the group.
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * @return {?}
     */
    setValue(value, options = {}) {
        this._checkAllValuesPresent(value);
        Object.keys(value).forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this._throwIfControlMissing(name);
            this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        }));
        this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of the `FormGroup`. It accepts an object with control
     * names as keys, and does its best to match the values to the correct controls
     * in the group.
     *
     * It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     * \@usageNotes
     * ### Patch the value for a form group
     *
     * ```
     * const form = new FormGroup({
     *    first: new FormControl(),
     *    last: new FormControl()
     * });
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.patchValue({first: 'Nancy'});
     * console.log(form.value);   // {first: 'Nancy', last: null}
     * ```
     *
     * @param {?} value The object that matches the structure of the group.
     * @param {?=} options Configuration options that determine how the control propagates changes and
     * emits events after the value is patched.
     * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
     * true.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */
    patchValue(value, options = {}) {
        Object.keys(value).forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            if (this.controls[name]) {
                this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            }
        }));
        this.updateValueAndValidity(options);
    }
    /**
     * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * \@usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} value Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @return {?}
     */
    reset(value = {}, options = {}) {
        this._forEachChild((/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (control, name) => {
            control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        }));
        this._updatePristine(options);
        this._updateTouched(options);
        this.updateValueAndValidity(options);
    }
    /**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     * The `value` property is the best way to get the value of the group, because
     * it excludes disabled controls in the `FormGroup`.
     * @return {?}
     */
    getRawValue() {
        return this._reduceChildren({}, (/**
         * @param {?} acc
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (acc, control, name) => {
            acc[name] = control instanceof FormControl ? control.value : ((/** @type {?} */ (control))).getRawValue();
            return acc;
        }));
    }
    /**
     * \@internal
     * @return {?}
     */
    _syncPendingControls() {
        /** @type {?} */
        let subtreeUpdated = this._reduceChildren(false, (/**
         * @param {?} updated
         * @param {?} child
         * @return {?}
         */
        (updated, child) => {
            return child._syncPendingControls() ? true : updated;
        }));
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    }
    /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    _throwIfControlMissing(name) {
        if (!Object.keys(this.controls).length) {
            throw new Error(`
        There are no form controls registered with this group yet.  If you're using ngModel,
        you may want to check next tick (e.g. use setTimeout).
      `);
        }
        if (!this.controls[name]) {
            throw new Error(`Cannot find form control with name: ${name}.`);
        }
    }
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    _forEachChild(cb) {
        Object.keys(this.controls).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => cb(this.controls[k], k)));
    }
    /**
     * \@internal
     * @return {?}
     */
    _setUpControls() {
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
        }));
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() { ((/** @type {?} */ (this))).value = this._reduceValue(); }
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    _anyControls(condition) {
        /** @type {?} */
        let res = false;
        this._forEachChild((/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (control, name) => {
            res = res || (this.contains(name) && condition(control));
        }));
        return res;
    }
    /**
     * \@internal
     * @return {?}
     */
    _reduceValue() {
        return this._reduceChildren({}, (/**
         * @param {?} acc
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (acc, control, name) => {
            if (control.enabled || this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        }));
    }
    /**
     * \@internal
     * @param {?} initValue
     * @param {?} fn
     * @return {?}
     */
    _reduceChildren(initValue, fn) {
        /** @type {?} */
        let res = initValue;
        this._forEachChild((/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (control, name) => { res = fn(res, control, name); }));
        return res;
    }
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() {
        for (const controlName of Object.keys(this.controls)) {
            if (this.controls[controlName].enabled) {
                return false;
            }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _checkAllValuesPresent(value) {
        this._forEachChild((/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (control, name) => {
            if (value[name] === undefined) {
                throw new Error(`Must supply a value for form control with name: '${name}'.`);
            }
        }));
    }
}
if (false) {}
/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * \@usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
 * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 * \@publicApi
 */
class FormArray extends AbstractControl {
    /**
     * Creates a new `FormArray` instance.
     *
     * @param {?} controls An array of child controls. Each child control is given an index
     * where it is registered.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator functions
     *
     */
    constructor(controls, validatorOrOpts, asyncValidator) {
        super(coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
    /**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to retrieve the control
     * @return {?}
     */
    at(index) { return this.controls[index]; }
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param {?} control Form control to be inserted
     * @return {?}
     */
    push(control) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    }
    /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to insert the control
     * @param {?} control Form control to be inserted
     * @return {?}
     */
    insert(index, control) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity();
    }
    /**
     * Remove the control at the given `index` in the array.
     *
     * @param {?} index Index in the array to remove the control
     * @return {?}
     */
    removeAt(index) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange((/**
             * @return {?}
             */
            () => { }));
        this.controls.splice(index, 1);
        this.updateValueAndValidity();
    }
    /**
     * Replace an existing control.
     *
     * @param {?} index Index in the array to replace the control
     * @param {?} control The `AbstractControl` control to replace the existing control
     * @return {?}
     */
    setControl(index, control) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange((/**
             * @return {?}
             */
            () => { }));
        this.controls.splice(index, 1);
        if (control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
        }
        this.updateValueAndValidity();
        this._onCollectionChange();
    }
    /**
     * Length of the control array.
     * @return {?}
     */
    get length() { return this.controls.length; }
    /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * \@usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param {?} value Array of values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */
    setValue(value, options = {}) {
        this._checkAllValuesPresent(value);
        value.forEach((/**
         * @param {?} newValue
         * @param {?} index
         * @return {?}
         */
        (newValue, index) => {
            this._throwIfControlMissing(index);
            this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        }));
        this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of the `FormArray`. It accepts an array that matches the
     * structure of the control, and does its best to match the values to the correct
     * controls in the group.
     *
     * It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     * \@usageNotes
     * ### Patch the values for controls in a form array
     *
     * ```
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.patchValue(['Nancy']);
     * console.log(arr.value);   // ['Nancy', null]
     * ```
     *
     * @param {?} value Array of latest values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */
    patchValue(value, options = {}) {
        value.forEach((/**
         * @param {?} newValue
         * @param {?} index
         * @return {?}
         */
        (newValue, index) => {
            if (this.at(index)) {
                this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
            }
        }));
        this.updateValueAndValidity(options);
    }
    /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * \@usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     *
     * @param {?=} value Array of values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */
    reset(value = [], options = {}) {
        this._forEachChild((/**
         * @param {?} control
         * @param {?} index
         * @return {?}
         */
        (control, index) => {
            control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        }));
        this._updatePristine(options);
        this._updateTouched(options);
        this.updateValueAndValidity(options);
    }
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     * @return {?}
     */
    getRawValue() {
        return this.controls.map((/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            return control instanceof FormControl ? control.value : ((/** @type {?} */ (control))).getRawValue();
        }));
    }
    /**
     * Remove all controls in the `FormArray`.
     *
     * \@usageNotes
     * ### Remove all elements from a FormArray
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.length);  // 2
     *
     * arr.clear();
     * console.log(arr.length);  // 0
     * ```
     *
     * It's a simpler and more efficient alternative to removing all elements one by one:
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     *
     * while (arr.length) {
     *    arr.removeAt(0);
     * }
     * ```
     * @return {?}
     */
    clear() {
        if (this.controls.length < 1)
            return;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control._registerOnCollectionChange((/**
         * @return {?}
         */
        () => { }))));
        this.controls.splice(0);
        this.updateValueAndValidity();
    }
    /**
     * \@internal
     * @return {?}
     */
    _syncPendingControls() {
        /** @type {?} */
        let subtreeUpdated = this.controls.reduce((/**
         * @param {?} updated
         * @param {?} child
         * @return {?}
         */
        (updated, child) => {
            return child._syncPendingControls() ? true : updated;
        }), false);
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    }
    /**
     * \@internal
     * @param {?} index
     * @return {?}
     */
    _throwIfControlMissing(index) {
        if (!this.controls.length) {
            throw new Error(`
        There are no form controls registered with this array yet.  If you're using ngModel,
        you may want to check next tick (e.g. use setTimeout).
      `);
        }
        if (!this.at(index)) {
            throw new Error(`Cannot find form control at index ${index}`);
        }
    }
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    _forEachChild(cb) {
        this.controls.forEach((/**
         * @param {?} control
         * @param {?} index
         * @return {?}
         */
        (control, index) => { cb(control, index); }));
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() {
        ((/** @type {?} */ (this))).value =
            this.controls.filter((/**
             * @param {?} control
             * @return {?}
             */
            (control) => control.enabled || this.disabled))
                .map((/**
             * @param {?} control
             * @return {?}
             */
            (control) => control.value));
    }
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    _anyControls(condition) {
        return this.controls.some((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.enabled && condition(control)));
    }
    /**
     * \@internal
     * @return {?}
     */
    _setUpControls() {
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => this._registerControl(control)));
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _checkAllValuesPresent(value) {
        this._forEachChild((/**
         * @param {?} control
         * @param {?} i
         * @return {?}
         */
        (control, i) => {
            if (value[i] === undefined) {
                throw new Error(`Must supply a value for form control at index: ${i}.`);
            }
        }));
    }
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() {
        for (const control of this.controls) {
            if (control.enabled)
                return false;
        }
        return this.controls.length > 0 || this.disabled;
    }
    /**
     * @private
     * @param {?} control
     * @return {?}
     */
    _registerControl(control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => NgForm))
};
const ɵ0 = /**
 * @return {?}
 */
() => Promise.resolve(null);
/** @type {?} */
const resolvedPromise = ((ɵ0))();
/**
 * \@description
 * Creates a top-level `FormGroup` instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You optionally export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * `FormGroup` instance are duplicated on the directive itself, so a reference to it
 * gives you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, use `NgModel` with a `name`
 * attribute. You may use `NgModelGroup` to create sub-groups within the form.
 *
 * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event emits the original form
 * submission event.
 *
 * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
 * To import the `FormsModule` but skip its usage in some forms,
 * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
 * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
 * unnecessary because the `<form>` tags are inert. In that case, you would
 * refrain from using the `formGroup` directive.
 *
 * \@usageNotes
 *
 * ### Migrating from deprecated ngForm selector
 *
 * Support for using `ngForm` element selector has been deprecated in Angular v6 and will be removed
 * in Angular v9.
 *
 * This has been deprecated to keep selectors consistent with other core Angular selectors,
 * as element selectors are typically written in kebab-case.
 *
 * Now deprecated:
 * ```html
 * <ngForm #myForm="ngForm">
 * ```
 *
 * After:
 * ```html
 * <ng-form #myForm="ngForm">
 * ```
 *
 * ### Listening for form submission
 *
 * The following example shows how to capture the form values from the "ngSubmit" event.
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Setting the update options
 *
 * The following example shows you how to change the "updateOn" option from its default using
 * ngFormOptions.
 *
 * ```html
 * <form [ngFormOptions]="{updateOn: 'blur'}">
 *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
 * </form>
 * ```
 *
 * \@ngModule FormsModule
 * \@publicApi
 */
class NgForm extends ControlContainer {
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     */
    constructor(validators, asyncValidators) {
        super();
        /**
         * \@description
         * Returns whether the form submission has been triggered.
         */
        this.submitted = false;
        this._directives = [];
        /**
         * \@description
         * Event emitter for the "ngSubmit" event
         */
        this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
    }
    /**
     * \@description
     * Lifecycle method called after the view is initialized. For internal use only.
     * @return {?}
     */
    ngAfterViewInit() { this._setUpdateStrategy(); }
    /**
     * \@description
     * The directive instance.
     * @return {?}
     */
    get formDirective() { return this; }
    /**
     * \@description
     * The internal `FormGroup` instance.
     * @return {?}
     */
    get control() { return this.form; }
    /**
     * \@description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it is always an empty array.
     * @return {?}
     */
    get path() { return []; }
    /**
     * \@description
     * Returns a map of the controls in this group.
     * @return {?}
     */
    get controls() { return this.form.controls; }
    /**
     * \@description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */
    addControl(dir) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = this._findContainer(dir.path);
            ((/** @type {?} */ (dir))).control =
                (/** @type {?} */ (container.registerControl(dir.name, dir.control)));
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({ emitEvent: false });
            this._directives.push(dir);
        }));
    }
    /**
     * \@description
     * Retrieves the `FormControl` instance from the provided `NgModel` directive.
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */
    getControl(dir) { return (/** @type {?} */ (this.form.get(dir.path))); }
    /**
     * \@description
     * Removes the `NgModel` instance from the internal list of directives
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */
    removeControl(dir) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
            removeDir(this._directives, dir);
        }));
    }
    /**
     * \@description
     * Adds a new `NgModelGroup` directive instance to the form.
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */
    addFormGroup(dir) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = this._findContainer(dir.path);
            /** @type {?} */
            const group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        }));
    }
    /**
     * \@description
     * Removes the `NgModelGroup` directive instance from the form.
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */
    removeFormGroup(dir) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        }));
    }
    /**
     * \@description
     * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */
    getFormGroup(dir) { return (/** @type {?} */ (this.form.get(dir.path))); }
    /**
     * Sets the new value for the provided `NgControl` directive.
     *
     * @param {?} dir The `NgControl` directive instance.
     * @param {?} value The new value for the directive's control.
     * @return {?}
     */
    updateModel(dir, value) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const ctrl = (/** @type {?} */ (this.form.get((/** @type {?} */ (dir.path)))));
            ctrl.setValue(value);
        }));
    }
    /**
     * \@description
     * Sets the value for this `FormGroup`.
     *
     * @param {?} value The new value
     * @return {?}
     */
    setValue(value) { this.control.setValue(value); }
    /**
     * \@description
     * Method called when the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param {?} $event The "submit" event object
     * @return {?}
     */
    onSubmit($event) {
        ((/** @type {?} */ (this))).submitted = true;
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        return false;
    }
    /**
     * \@description
     * Method called when the "reset" event is triggered on the form.
     * @return {?}
     */
    onReset() { this.resetForm(); }
    /**
     * \@description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param {?=} value The new value for the form.
     * @return {?}
     */
    resetForm(value = undefined) {
        this.form.reset(value);
        ((/** @type {?} */ (this))).submitted = false;
    }
    /**
     * @private
     * @return {?}
     */
    _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
        }
    }
    /**
     * \@internal
     * @param {?} path
     * @return {?}
     */
    _findContainer(path) {
        path.pop();
        return path.length ? (/** @type {?} */ (this.form.get(path))) : this.form;
    }
}
NgForm.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]',
                providers: [formDirectiveProvider],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                outputs: ['ngSubmit'],
                exportAs: 'ngForm'
            },] }
];
/** @nocollapse */
NgForm.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
NgForm.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngFormOptions',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TemplateDrivenErrors {
    /**
     * @return {?}
     */
    static modelParentException() {
        throw new Error(`
      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
      formGroup's partner directive "formControlName" instead.  Example:

      ${FormErrorExamples.formControlName}

      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

      Example:

      ${FormErrorExamples.ngModelWithFormGroup}`);
    }
    /**
     * @return {?}
     */
    static formGroupNameException() {
        throw new Error(`
      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

      Option 1: Use formControlName instead of ngModel (reactive strategy):

      ${FormErrorExamples.formGroupName}

      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

      ${FormErrorExamples.ngModelGroup}`);
    }
    /**
     * @return {?}
     */
    static missingNameException() {
        throw new Error(`If ngModel is used within a form tag, either the name attribute must be set or the form
      control must be defined as 'standalone' in ngModelOptions.

      Example 1: <input [(ngModel)]="person.firstName" name="first">
      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
    }
    /**
     * @return {?}
     */
    static modelGroupParentException() {
        throw new Error(`
      ngModelGroup cannot be used with a parent formGroup directive.

      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

      ${FormErrorExamples.formGroupName}

      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

      ${FormErrorExamples.ngModelGroup}`);
    }
    /**
     * @return {?}
     */
    static ngFormWarning() {
        console.warn(`
    It looks like you're using 'ngForm'.

    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed
    in Angular v9.

    Use 'ng-form' instead.

    Before:
    <ngForm #myForm="ngForm">

    After:
    <ng-form #myForm="ngForm">
    `);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description
 * `InjectionToken` to provide to turn off the warning when using 'ngForm' deprecated selector.
 * @type {?}
 */
const NG_FORM_SELECTOR_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgFormSelectorWarning');
/**
 * This directive is solely used to display warnings when the deprecated `ngForm` selector is used.
 *
 * @deprecated in Angular v6 and will be removed in Angular v9.
 * \@ngModule FormsModule
 * \@publicApi
 */
class NgFormSelectorWarning {
    /**
     * @param {?} ngFormWarning
     */
    constructor(ngFormWarning) {
        if (((!ngFormWarning || ngFormWarning === 'once') && !NgFormSelectorWarning._ngFormWarning) ||
            ngFormWarning === 'always') {
            TemplateDrivenErrors.ngFormWarning();
            NgFormSelectorWarning._ngFormWarning = true;
        }
    }
}
/**
 * Static property used to track whether the deprecation warning for this selector has been sent.
 * Used to support warning config of "once".
 *
 * \@internal
 */
NgFormSelectorWarning._ngFormWarning = false;
NgFormSelectorWarning.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngForm' },] }
];
/** @nocollapse */
NgFormSelectorWarning.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_FORM_SELECTOR_WARNING,] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description
 * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
 *
 * \@publicApi
 */
class AbstractFormGroupDirective extends ControlContainer {
    /**
     * \@description
     * An internal callback method triggered on the instance after the inputs are set.
     * Registers the group with its parent group.
     * @return {?}
     */
    ngOnInit() {
        this._checkParentType();
        (/** @type {?} */ (this.formDirective)).addFormGroup(this);
    }
    /**
     * \@description
     * An internal callback method triggered before the instance is destroyed.
     * Removes the group from its parent group.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
        }
    }
    /**
     * \@description
     * The `FormGroup` bound to this directive.
     * @return {?}
     */
    get control() { return (/** @type {?} */ (this.formDirective)).getFormGroup(this); }
    /**
     * \@description
     * The path to this group from the top-level directive.
     * @return {?}
     */
    get path() { return controlPath(this.name, this._parent); }
    /**
     * \@description
     * The top-level directive for this group if present, otherwise null.
     * @return {?}
     */
    get formDirective() { return this._parent ? this._parent.formDirective : null; }
    /**
     * \@description
     * The synchronous validators registered with this group.
     * @return {?}
     */
    get validator() { return composeValidators(this._validators); }
    /**
     * \@description
     * The async validators registered with this group.
     * @return {?}
     */
    get asyncValidator() {
        return composeAsyncValidators(this._asyncValidators);
    }
    /**
     * \@internal
     * @return {?}
     */
    _checkParentType() { }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const modelGroupProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => NgModelGroup))
};
/**
 * \@description
 * Creates and binds a `FormGroup` instance to a DOM element.
 *
 * This directive can only be used as a child of `NgForm` (within `<form>` tags).
 *
 * Use this directive to validate a sub-group of your form separately from the
 * rest of your form, or if some values in your domain model make more sense
 * to consume together in a nested object.
 *
 * Provide a name for the sub-group and it will become the key
 * for the sub-group in the form's full value. If you need direct access, export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * \@usageNotes
 *
 * ### Consuming controls in a grouping
 *
 * The following example shows you how to combine controls together in a sub-group
 * of the form.
 *
 * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * \@ngModule FormsModule
 * \@publicApi
 */
class NgModelGroup extends AbstractFormGroupDirective {
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._validators = validators;
        this._asyncValidators = asyncValidators;
    }
    /**
     * \@internal
     * @return {?}
     */
    _checkParentType() {
        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
        }
    }
}
NgModelGroup.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] }
];
/** @nocollapse */
NgModelGroup.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
NgModelGroup.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModelGroup',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const formControlBinding = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => NgModel))
};
const ɵ0$1 = /**
 * @return {?}
 */
() => Promise.resolve(null);
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 * @type {?}
 */
const resolvedPromise$1 = ((ɵ0$1))();
/**
 * \@description
 * Creates a `FormControl` instance from a domain model and binds it
 * to a form control element.
 *
 * The `FormControl` instance tracks the value, user interaction, and
 * validation status of the control and keeps the view synced with the model. If used
 * within a parent form, the directive also registers itself with the form as a child
 * control.
 *
 * This directive is used by itself or as part of a larger form. Use the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional `Input`. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class sets the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI always syncs back to
 * the domain model in your class.
 *
 * To inspect the properties of the associated `FormControl` (like validity state),
 * export the directive into a local template variable using `ngModel` as the key (ex: `#myVar="ngModel"`).
 * You then access the control using the directive's `control` property,
 * but most properties used (like `valid` and `dirty`) fall through to the control anyway for direct access.
 * See a full list of properties directly available in `AbstractControlDirective`.
 *
 * @see `RadioControlValueAccessor`
 * @see `SelectControlValueAccessor`
 *
 * \@usageNotes
 *
 * ### Using ngModel on a standalone control
 *
 * The following examples show a simple standalone control using `ngModel`:
 *
 * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
 * as the parent form syncs the value for you. You access its properties by exporting it into a
 * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
 * needed on form submission.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * ### Using ngModel within a form
 *
 * The following example shows controls using `ngModel` within a form:
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Using a standalone ngModel within a group
 *
 * The following example shows you how to use a standalone ngModel control
 * within a form. This controls the display of the form, but doesn't contain form data.
 *
 * ```html
 * <form>
 *   <input name="login" ngModel placeholder="Login">
 *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
 * </form>
 * <!-- form value: {login: ''} -->
 * ```
 *
 * ### Setting the ngModel name attribute through options
 *
 * The following example shows you an alternate way to set the name attribute. The name attribute is used
 * within a custom form component, and the name `\@Input` property serves a different purpose.
 *
 * ```html
 * <form>
 *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
 *   </my-person-control>
 * </form>
 * <!-- form value: {user: ''} -->
 * ```
 *
 * \@ngModule FormsModule
 * \@publicApi
 */
class NgModel extends NgControl {
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    constructor(parent, validators, asyncValidators, valueAccessors) {
        super();
        this.control = new FormControl();
        /**
         * \@internal
         */
        this._registered = false;
        /**
         * \@description
         * Event emitter for producing the `ngModelChange` event after
         * the view model updates.
         */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._parent = parent;
        this._rawValidators = validators || [];
        this._rawAsyncValidators = asyncValidators || [];
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }
    /**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */
    ngOnChanges(changes) {
        this._checkForErrors();
        if (!this._registered)
            this._setUpControl();
        if ('isDisabled' in changes) {
            this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);
            this.viewModel = this.model;
        }
    }
    /**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal
     * use only.
     * @return {?}
     */
    ngOnDestroy() { this.formDirective && this.formDirective.removeControl(this); }
    /**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */
    get path() {
        return this._parent ? controlPath(this.name, this._parent) : [this.name];
    }
    /**
     * \@description
     * The top-level directive for this control if present, otherwise null.
     * @return {?}
     */
    get formDirective() { return this._parent ? this._parent.formDirective : null; }
    /**
     * \@description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     * @return {?}
     */
    get validator() { return composeValidators(this._rawValidators); }
    /**
     * \@description
     * Async validator function composed of all the async validators registered with this
     * directive.
     * @return {?}
     */
    get asyncValidator() {
        return composeAsyncValidators(this._rawAsyncValidators);
    }
    /**
     * \@description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param {?} newValue The new value emitted by `ngModelChange`.
     * @return {?}
     */
    viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    }
    /**
     * @private
     * @return {?}
     */
    _setUpControl() {
        this._setUpdateStrategy();
        this._isStandalone() ? this._setUpStandalone() :
            this.formDirective.addControl(this);
        this._registered = true;
    }
    /**
     * @private
     * @return {?}
     */
    _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
    }
    /**
     * @private
     * @return {?}
     */
    _setUpStandalone() {
        setUpControl(this.control, this);
        this.control.updateValueAndValidity({ emitEvent: false });
    }
    /**
     * @private
     * @return {?}
     */
    _checkForErrors() {
        if (!this._isStandalone()) {
            this._checkParentType();
        }
        this._checkName();
    }
    /**
     * @private
     * @return {?}
     */
    _checkParentType() {
        if (!(this._parent instanceof NgModelGroup) &&
            this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
        }
        else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _checkName() {
        if (this.options && this.options.name)
            this.name = this.options.name;
        if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _updateValue(value) {
        resolvedPromise$1.then((/**
         * @return {?}
         */
        () => { this.control.setValue(value, { emitViewToModelChange: false }); }));
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    _updateDisabled(changes) {
        /** @type {?} */
        const disabledValue = changes['isDisabled'].currentValue;
        /** @type {?} */
        const isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
        resolvedPromise$1.then((/**
         * @return {?}
         */
        () => {
            if (isDisabled && !this.control.disabled) {
                this.control.disable();
            }
            else if (!isDisabled && this.control.disabled) {
                this.control.enable();
            }
        }));
    }
}
NgModel.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[ngModel]:not([formControlName]):not([formControl])',
                providers: [formControlBinding],
                exportAs: 'ngModel'
            },] }
];
/** @nocollapse */
NgModel.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] }
];
NgModel.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModelOptions',] }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description
 *
 * Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * \@publicApi
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 */
class ɵNgNoValidate {
}
ɵNgNoValidate.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                host: { 'novalidate': '' },
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Token to provide to turn off the ngModel warning on formControl and formControlName.
 * @type {?}
 */
const NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
/** @type {?} */
const formControlBinding$1 = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => FormControlDirective))
};
/**
 * \@description
 * * Syncs a standalone `FormControl` instance to a form control element.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * \@usageNotes
 *
 * ### Registering a single form control
 *
 * The following examples shows how to register a standalone control and set its value.
 *
 * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * ### Use with ngModel
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
 *
 * Now deprecated:
 *
 * ```html
 * <input [formControl]="control" [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * This has been deprecated for a few reasons. First, developers have found this pattern
 * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
 * an input/output property named `ngModel` on the reactive form directive that simply
 * approximates (some of) its behavior. Specifically, it allows getting/setting the value
 * and intercepting value events. However, some of `ngModel`'s other features - like
 * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
 * which has understandably caused some confusion.
 *
 * In addition, this pattern mixes template-driven and reactive forms strategies, which
 * we generally don't recommend because it doesn't take advantage of the full benefits of
 * either strategy. Setting the value in the template violates the template-agnostic
 * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
 * the class removes the convenience of defining forms in the template.
 *
 * To update your code before v7, you'll want to decide whether to stick with reactive form
 * directives (and get/set values using reactive forms patterns) or switch over to
 * template-driven directives.
 *
 * After (choice 1 - use reactive forms):
 *
 * ```html
 * <input [formControl]="control">
 * ```
 *
 * ```ts
 * this.control.setValue('some value');
 * ```
 *
 * After (choice 2 - use template-driven forms):
 *
 * ```html
 * <input [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * By default, when you use this pattern, you will see a deprecation warning once in dev
 * mode. You can choose to silence this warning by providing a config for
 * `ReactiveFormsModule` at import time:
 *
 * ```ts
 * imports: [
 *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
 * ]
 * ```
 *
 * Alternatively, you can choose to surface a separate warning for each instance of this
 * pattern with a config value of `"always"`. This may help to track down where in the code
 * the pattern is being used as the code is being updated.
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */
class FormControlDirective extends NgControl {
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     * @param {?} _ngModelWarningConfig
     */
    constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        /**
         * @deprecated as of v6
         */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular `FormControlDirective` instance. Used to support warning config of "always".
         *
         * \@internal
         */
        this._ngModelWarningSent = false;
        this._rawValidators = validators || [];
        this._rawAsyncValidators = asyncValidators || [];
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }
    /**
     * \@description
     * Triggers a warning that this input should not be used with reactive forms.
     * @param {?} isDisabled
     * @return {?}
     */
    set isDisabled(isDisabled) { ReactiveErrors.disabledAttrWarning(); }
    /**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);
            if (this.control.disabled && (/** @type {?} */ (this.valueAccessor)).setDisabledState) {
                (/** @type {?} */ ((/** @type {?} */ (this.valueAccessor)).setDisabledState))(true);
            }
            this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);
            this.form.setValue(this.model);
            this.viewModel = this.model;
        }
    }
    /**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */
    get path() { return []; }
    /**
     * \@description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     * @return {?}
     */
    get validator() { return composeValidators(this._rawValidators); }
    /**
     * \@description
     * Async validator function composed of all the async validators registered with this
     * directive.
     * @return {?}
     */
    get asyncValidator() {
        return composeAsyncValidators(this._rawAsyncValidators);
    }
    /**
     * \@description
     * The `FormControl` bound to this directive.
     * @return {?}
     */
    get control() { return this.form; }
    /**
     * \@description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param {?} newValue The new value for the view model.
     * @return {?}
     */
    viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    _isControlChanged(changes) {
        return changes.hasOwnProperty('form');
    }
}
/**
 * \@description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlDirective. Used to support warning config of "once".
 *
 * \@internal
 */
FormControlDirective._ngModelWarningSentOnce = false;
FormControlDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] }
];
/** @nocollapse */
FormControlDirective.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
];
FormControlDirective.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formControl',] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => FormGroupDirective))
};
/**
 * \@description
 *
 * Binds an existing `FormGroup` to a DOM element.
 *
 * This directive accepts an existing `FormGroup` instance. It will then use this
 * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
 * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
 * and `FormArrayName` directives.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * ### Register Form Group
 *
 * The following example registers a `FormGroup` with first name and last name controls,
 * and listens for the *ngSubmit* event when the button is clicked.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */
class FormGroupDirective extends ControlContainer {
    /**
     * @param {?} _validators
     * @param {?} _asyncValidators
     */
    constructor(_validators, _asyncValidators) {
        super();
        this._validators = _validators;
        this._asyncValidators = _asyncValidators;
        /**
         * \@description
         * Reports whether the form submission has been triggered.
         */
        this.submitted = false;
        /**
         * \@description
         * Tracks the list of added `FormControlName` instances
         */
        this.directives = [];
        /**
         * \@description
         * Tracks the `FormGroup` bound to this directive.
         */
        this.form = (/** @type {?} */ (null));
        /**
         * \@description
         * Emits an event when the form submission has been triggered.
         */
        this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */
    ngOnChanges(changes) {
        this._checkFormPresent();
        if (changes.hasOwnProperty('form')) {
            this._updateValidators();
            this._updateDomValue();
            this._updateRegistrations();
        }
    }
    /**
     * \@description
     * Returns this directive's instance.
     * @return {?}
     */
    get formDirective() { return this; }
    /**
     * \@description
     * Returns the `FormGroup` bound to this directive.
     * @return {?}
     */
    get control() { return this.form; }
    /**
     * \@description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it always an empty array.
     * @return {?}
     */
    get path() { return []; }
    /**
     * \@description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @return {?}
     */
    addControl(dir) {
        /** @type {?} */
        const ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
    }
    /**
     * \@description
     * Retrieves the `FormControl` instance from the provided `FormControlName` directive
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @return {?}
     */
    getControl(dir) { return (/** @type {?} */ (this.form.get(dir.path))); }
    /**
     * \@description
     * Removes the `FormControlName` instance from the internal list of directives
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @return {?}
     */
    removeControl(dir) { removeDir(this.directives, dir); }
    /**
     * Adds a new `FormGroupName` directive instance to the form.
     *
     * @param {?} dir The `FormGroupName` directive instance.
     * @return {?}
     */
    addFormGroup(dir) {
        /** @type {?} */
        const ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    }
    /**
     * No-op method to remove the form group.
     *
     * @param {?} dir The `FormGroupName` directive instance.
     * @return {?}
     */
    removeFormGroup(dir) { }
    /**
     * \@description
     * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
     *
     * @param {?} dir The `FormGroupName` directive instance.
     * @return {?}
     */
    getFormGroup(dir) { return (/** @type {?} */ (this.form.get(dir.path))); }
    /**
     * Adds a new `FormArrayName` directive instance to the form.
     *
     * @param {?} dir The `FormArrayName` directive instance.
     * @return {?}
     */
    addFormArray(dir) {
        /** @type {?} */
        const ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    }
    /**
     * No-op method to remove the form array.
     *
     * @param {?} dir The `FormArrayName` directive instance.
     * @return {?}
     */
    removeFormArray(dir) { }
    /**
     * \@description
     * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
     *
     * @param {?} dir The `FormArrayName` directive instance.
     * @return {?}
     */
    getFormArray(dir) { return (/** @type {?} */ (this.form.get(dir.path))); }
    /**
     * Sets the new value for the provided `FormControlName` directive.
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @param {?} value The new value for the directive's control.
     * @return {?}
     */
    updateModel(dir, value) {
        /** @type {?} */
        const ctrl = (/** @type {?} */ (this.form.get(dir.path)));
        ctrl.setValue(value);
    }
    /**
     * \@description
     * Method called with the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param {?} $event The "submit" event object
     * @return {?}
     */
    onSubmit($event) {
        ((/** @type {?} */ (this))).submitted = true;
        syncPendingControls(this.form, this.directives);
        this.ngSubmit.emit($event);
        return false;
    }
    /**
     * \@description
     * Method called when the "reset" event is triggered on the form.
     * @return {?}
     */
    onReset() { this.resetForm(); }
    /**
     * \@description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param {?=} value The new value for the form.
     * @return {?}
     */
    resetForm(value = undefined) {
        this.form.reset(value);
        ((/** @type {?} */ (this))).submitted = false;
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateDomValue() {
        this.directives.forEach((/**
         * @param {?} dir
         * @return {?}
         */
        dir => {
            /** @type {?} */
            const newCtrl = this.form.get(dir.path);
            if (dir.control !== newCtrl) {
                cleanUpControl(dir.control, dir);
                if (newCtrl)
                    setUpControl(newCtrl, dir);
                ((/** @type {?} */ (dir))).control = newCtrl;
            }
        }));
        this.form._updateTreeValidity({ emitEvent: false });
    }
    /**
     * @private
     * @return {?}
     */
    _updateRegistrations() {
        this.form._registerOnCollectionChange((/**
         * @return {?}
         */
        () => this._updateDomValue()));
        if (this._oldForm)
            this._oldForm._registerOnCollectionChange((/**
             * @return {?}
             */
            () => { }));
        this._oldForm = this.form;
    }
    /**
     * @private
     * @return {?}
     */
    _updateValidators() {
        /** @type {?} */
        const sync = composeValidators(this._validators);
        this.form.validator = Validators.compose([(/** @type {?} */ (this.form.validator)), (/** @type {?} */ (sync))]);
        /** @type {?} */
        const async = composeAsyncValidators(this._asyncValidators);
        this.form.asyncValidator = Validators.composeAsync([(/** @type {?} */ (this.form.asyncValidator)), (/** @type {?} */ (async))]);
    }
    /**
     * @private
     * @return {?}
     */
    _checkFormPresent() {
        if (!this.form) {
            ReactiveErrors.missingFormException();
        }
    }
}
FormGroupDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[formGroup]',
                providers: [formDirectiveProvider$1],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                exportAs: 'ngForm'
            },] }
];
/** @nocollapse */
FormGroupDirective.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
FormGroupDirective.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formGroup',] }],
    ngSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => FormGroupName))
};
/**
 * \@description
 *
 * Syncs a nested `FormGroup` to a DOM element.
 *
 * This directive can only be used with a parent `FormGroupDirective`.
 *
 * It accepts the string name of the nested `FormGroup` to link, and
 * looks for a `FormGroup` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Use nested form groups to validate a sub-group of a
 * form separately from the rest or to group the values of certain
 * controls into their own nested object.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * \@usageNotes
 *
 * ### Access the group by name
 *
 * The following example uses the {\@link AbstractControl#get get} method to access the
 * associated `FormGroup`
 *
 * ```ts
 *   this.form.get('name');
 * ```
 *
 * ### Access individual controls in the group
 *
 * The following example uses the {\@link AbstractControl#get get} method to access
 * individual controls within the group using dot syntax.
 *
 * ```ts
 *   this.form.get('name.first');
 * ```
 *
 * ### Register a nested `FormGroup`.
 *
 * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
 * and provides methods to retrieve the nested `FormGroup` and individual controls.
 *
 * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */
class FormGroupName extends AbstractFormGroupDirective {
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._validators = validators;
        this._asyncValidators = asyncValidators;
    }
    /**
     * \@internal
     * @return {?}
     */
    _checkParentType() {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
        }
    }
}
FormGroupName.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] }
];
/** @nocollapse */
FormGroupName.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
FormGroupName.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formGroupName',] }]
};
if (false) {}
/** @type {?} */
const formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => FormArrayName))
};
/**
 * \@description
 *
 * Syncs a nested `FormArray` to a DOM element.
 *
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormArray` you want to link, and
 * will look for a `FormArray` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * \@usageNotes
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */
class FormArrayName extends ControlContainer {
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._validators = validators;
        this._asyncValidators = asyncValidators;
    }
    /**
     * \@description
     * A lifecycle method called when the directive's inputs are initialized. For internal use only.
     *
     * @throws If the directive does not have a valid parent.
     * @return {?}
     */
    ngOnInit() {
        this._checkParentType();
        (/** @type {?} */ (this.formDirective)).addFormArray(this);
    }
    /**
     * \@description
     * A lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    }
    /**
     * \@description
     * The `FormArray` bound to this directive.
     * @return {?}
     */
    get control() { return (/** @type {?} */ (this.formDirective)).getFormArray(this); }
    /**
     * \@description
     * The top-level directive for this group if present, otherwise null.
     * @return {?}
     */
    get formDirective() {
        return this._parent ? (/** @type {?} */ (this._parent.formDirective)) : null;
    }
    /**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */
    get path() { return controlPath(this.name, this._parent); }
    /**
     * \@description
     * Synchronous validator function composed of all the synchronous validators registered with this
     * directive.
     * @return {?}
     */
    get validator() { return composeValidators(this._validators); }
    /**
     * \@description
     * Async validator function composed of all the async validators registered with this directive.
     * @return {?}
     */
    get asyncValidator() {
        return composeAsyncValidators(this._asyncValidators);
    }
    /**
     * @private
     * @return {?}
     */
    _checkParentType() {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
        }
    }
}
FormArrayName.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] }
];
/** @nocollapse */
FormArrayName.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
FormArrayName.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formArrayName',] }]
};
if (false) {}
/**
 * @param {?} parent
 * @return {?}
 */
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const controlNameBinding = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => FormControlName))
};
/**
 * \@description
 * Syncs a `FormControl` in an existing `FormGroup` to a form control
 * element by name.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * \@usageNotes
 *
 * ### Register `FormControl` within a group
 *
 * The following example shows how to register multiple form controls within a form group
 * and set their value.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * ### Use with ngModel
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
 *
 * Now deprecated:
 *
 * ```html
 * <form [formGroup]="form">
 *   <input formControlName="first" [(ngModel)]="value">
 * </form>
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * This has been deprecated for a few reasons. First, developers have found this pattern
 * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
 * an input/output property named `ngModel` on the reactive form directive that simply
 * approximates (some of) its behavior. Specifically, it allows getting/setting the value
 * and intercepting value events. However, some of `ngModel`'s other features - like
 * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
 * which has understandably caused some confusion.
 *
 * In addition, this pattern mixes template-driven and reactive forms strategies, which
 * we generally don't recommend because it doesn't take advantage of the full benefits of
 * either strategy. Setting the value in the template violates the template-agnostic
 * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
 * the class removes the convenience of defining forms in the template.
 *
 * To update your code before v7, you'll want to decide whether to stick with reactive form
 * directives (and get/set values using reactive forms patterns) or switch over to
 * template-driven directives.
 *
 * After (choice 1 - use reactive forms):
 *
 * ```html
 * <form [formGroup]="form">
 *   <input formControlName="first">
 * </form>
 * ```
 *
 * ```ts
 * this.form.get('first').setValue('some value');
 * ```
 *
 * After (choice 2 - use template-driven forms):
 *
 * ```html
 * <input [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * By default, when you use this pattern, you will see a deprecation warning once in dev
 * mode. You can choose to silence this warning by providing a config for
 * `ReactiveFormsModule` at import time:
 *
 * ```ts
 * imports: [
 *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
 * ]
 * ```
 *
 * Alternatively, you can choose to surface a separate warning for each instance of this
 * pattern with a config value of `"always"`. This may help to track down where in the code
 * the pattern is being used as the code is being updated.
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */
class FormControlName extends NgControl {
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     * @param {?} _ngModelWarningConfig
     */
    constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this._added = false;
        /**
         * @deprecated as of v6
         */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * \@internal
         */
        this._ngModelWarningSent = false;
        this._parent = parent;
        this._rawValidators = validators || [];
        this._rawAsyncValidators = asyncValidators || [];
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }
    /**
     * \@description
     * Triggers a warning that this input should not be used with reactive forms.
     * @param {?} isDisabled
     * @return {?}
     */
    set isDisabled(isDisabled) { ReactiveErrors.disabledAttrWarning(); }
    /**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this._added)
            this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);
            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
        }
    }
    /**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.formDirective) {
            this.formDirective.removeControl(this);
        }
    }
    /**
     * \@description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param {?} newValue The new value for the view model.
     * @return {?}
     */
    viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    }
    /**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */
    get path() { return controlPath(this.name, (/** @type {?} */ (this._parent))); }
    /**
     * \@description
     * The top-level directive for this group if present, otherwise null.
     * @return {?}
     */
    get formDirective() { return this._parent ? this._parent.formDirective : null; }
    /**
     * \@description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     * @return {?}
     */
    get validator() { return composeValidators(this._rawValidators); }
    /**
     * \@description
     * Async validator function composed of all the async validators registered with this
     * directive.
     * @return {?}
     */
    get asyncValidator() {
        return (/** @type {?} */ (composeAsyncValidators(this._rawAsyncValidators)));
    }
    /**
     * @private
     * @return {?}
     */
    _checkParentType() {
        if (!(this._parent instanceof FormGroupName) &&
            this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
        }
        else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
            !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _setUpControl() {
        this._checkParentType();
        ((/** @type {?} */ (this))).control = this.formDirective.addControl(this);
        if (this.control.disabled && (/** @type {?} */ (this.valueAccessor)).setDisabledState) {
            (/** @type {?} */ ((/** @type {?} */ (this.valueAccessor)).setDisabledState))(true);
        }
        this._added = true;
    }
}
/**
 * \@description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlName. Used to support warning config of "once".
 *
 * \@internal
 */
FormControlName._ngModelWarningSentOnce = false;
FormControlName.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] }
];
/** @nocollapse */
FormControlName.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
];
FormControlName.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formControlName',] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description
 * An interface implemented by classes that perform synchronous validation.
 *
 * \@usageNotes
 *
 * ### Provide a custom validator
 *
 * The following example implements the `Validator` interface to create a
 * validator directive with a custom error key.
 *
 * ```typescript
 * \@Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors|null {
 *     return {'custom': true};
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @record
 */
function Validator() { }
if (false) {}
/**
 * \@description
 * An interface implemented by classes that perform asynchronous validation.
 *
 * \@usageNotes
 *
 * ### Provide a custom async validator directive
 *
 * The following example implements the `AsyncValidator` interface to create an
 * async validator directive with a custom error key.
 *
 * ```typescript
 * import { of as observableOf } from 'rxjs';
 *
 * \@Directive({
 *   selector: '[customAsyncValidator]',
 *   providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CustomAsyncValidatorDirective, multi:
 * true}]
 * })
 * class CustomAsyncValidatorDirective implements AsyncValidator {
 *   validate(control: AbstractControl): Observable<ValidationErrors|null> {
 *     return observableOf({'custom': true});
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @record
 */
function AsyncValidator() { }
if (false) {}
/**
 * \@description
 * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */
const REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => RequiredValidator)),
    multi: true
};
/**
 * \@description
 * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */
const CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => CheckboxRequiredValidator)),
    multi: true
};
/**
 * \@description
 * A directive that adds the `required` validator to any controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a required validator using template-driven forms
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * \@ngModule FormsModule
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */
class RequiredValidator {
    /**
     * \@description
     * Tracks changes to the required attribute bound to this directive.
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = value != null && value !== false && `${value}` !== 'false';
        if (this._onChange)
            this._onChange();
    }
    /**
     * \@description
     * Method that validates whether the control is empty.
     * Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.required ? Validators.required(control) : null;
    }
    /**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnValidatorChange(fn) { this._onChange = fn; }
}
RequiredValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                providers: [REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] }
];
RequiredValidator.propDecorators = {
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a required checkbox validator using template-driven forms
 *
 * The following example shows how to add a checkbox required validator to an input attached to an ngModel binding.
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * \@publicApi
 * \@ngModule FormsModule
 * \@ngModule ReactiveFormsModule
 */
class CheckboxRequiredValidator extends RequiredValidator {
    /**
     * \@description
     * Method that validates whether or not the checkbox has been checked.
     * Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.required ? Validators.requiredTrue(control) : null;
    }
}
CheckboxRequiredValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                providers: [CHECKBOX_REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] }
];
/**
 * \@description
 * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */
const EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => EmailValidator)),
    multi: true
};
/**
 * A directive that adds the `email` validator to controls marked with the
 * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding an email validator
 *
 * The following example shows how to add an email validator to an input attached to an ngModel binding.
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * \@publicApi
 * \@ngModule FormsModule
 * \@ngModule ReactiveFormsModule
 */
class EmailValidator {
    /**
     * \@description
     * Tracks changes to the email attribute bound to this directive.
     * @param {?} value
     * @return {?}
     */
    set email(value) {
        this._enabled = value === '' || value === true || value === 'true';
        if (this._onChange)
            this._onChange();
    }
    /**
     * \@description
     * Method that validates whether an email address is valid.
     * Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this._enabled ? Validators.email(control) : null;
    }
    /**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnValidatorChange(fn) { this._onChange = fn; }
}
EmailValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                providers: [EMAIL_VALIDATOR]
            },] }
];
EmailValidator.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}
/**
 * \@description
 * A function that receives a control and synchronously returns a map of
 * validation errors if present, otherwise null.
 *
 * \@publicApi
 * @record
 */
function ValidatorFn() { }
/**
 * \@description
 * A function that receives a control and returns a Promise or observable
 * that emits validation errors if present, otherwise null.
 *
 * \@publicApi
 * @record
 */
function AsyncValidatorFn() { }
/**
 * \@description
 * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */
const MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => MinLengthValidator)),
    multi: true
};
/**
 * A directive that adds minimum length validation to controls marked with the
 * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` mult-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a minimum length validator
 *
 * The following example shows how to add a minimum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel minlength="4">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
class MinLengthValidator {
    /**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('minlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    }
    /**
     * \@description
     * Method that validates whether the value meets a minimum length
     * requirement. Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.minlength == null ? null : this._validator(control);
    }
    /**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnValidatorChange(fn) { this._onChange = fn; }
    /**
     * @private
     * @return {?}
     */
    _createValidator() {
        this._validator = Validators.minLength(parseInt(this.minlength, 10));
    }
}
MinLengthValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                providers: [MIN_LENGTH_VALIDATOR],
                host: { '[attr.minlength]': 'minlength ? minlength : null' }
            },] }
];
MinLengthValidator.propDecorators = {
    minlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}
/**
 * \@description
 * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */
const MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => MaxLengthValidator)),
    multi: true
};
/**
 * A directive that adds max length validation to controls marked with the
 * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a maximum length validator
 *
 * The following example shows how to add a maximum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel maxlength="25">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
class MaxLengthValidator {
    /**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('maxlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    }
    /**
     * \@description
     * Method that validates whether the value exceeds
     * the maximum length requirement.
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.maxlength != null ? this._validator(control) : null;
    }
    /**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnValidatorChange(fn) { this._onChange = fn; }
    /**
     * @private
     * @return {?}
     */
    _createValidator() {
        this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
    }
}
MaxLengthValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                providers: [MAX_LENGTH_VALIDATOR],
                host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
            },] }
];
MaxLengthValidator.propDecorators = {
    maxlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}
/**
 * \@description
 * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */
const PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => PatternValidator)),
    multi: true
};
/**
 * \@description
 * A directive that adds regex pattern validation to controls marked with the
 * `pattern` attribute. The regex must match the entire control value.
 * The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a pattern validator
 *
 * The following example shows how to add a pattern validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
class PatternValidator {
    /**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('pattern' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    }
    /**
     * \@description
     * Method that validates whether the value matches the
     * the pattern requirement.
     * @param {?} control
     * @return {?}
     */
    validate(control) { return this._validator(control); }
    /**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnValidatorChange(fn) { this._onChange = fn; }
    /**
     * @private
     * @return {?}
     */
    _createValidator() { this._validator = Validators.pattern(this.pattern); }
}
PatternValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                providers: [PATTERN_VALIDATOR],
                host: { '[attr.pattern]': 'pattern ? pattern : null' }
            },] }
];
PatternValidator.propDecorators = {
    pattern: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SHARED_FORM_DIRECTIVES = [
    ɵNgNoValidate,
    NgSelectOption,
    ɵNgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
];
/** @type {?} */
const TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm, NgFormSelectorWarning];
/** @type {?} */
const REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
class ɵInternalFormsSharedModule {
}
ɵInternalFormsSharedModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: SHARED_FORM_DIRECTIVES,
                exports: SHARED_FORM_DIRECTIVES,
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} options
 * @return {?}
 */
function isAbstractControlOptions(options) {
    return ((/** @type {?} */ (options))).asyncValidators !== undefined ||
        ((/** @type {?} */ (options))).validators !== undefined ||
        ((/** @type {?} */ (options))).updateOn !== undefined;
}
/**
 * \@description
 * Creates an `AbstractControl` from a user-specified configuration.
 *
 * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
 * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
 * forms.
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * \@publicApi
 */
class FormBuilder {
    /**
     * \@description
     * Construct a new `FormGroup` instance.
     *
     * @param {?} controlsConfig A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param {?=} options Configuration options object for the `FormGroup`. The object can
     * have two shapes:
     *
     * 1) `AbstractControlOptions` object (preferred), which consists of:
     * * `validators`: A synchronous validator function, or an array of validator functions
     * * `asyncValidators`: A single async validator or array of async validator functions
     * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
     * submit')
     *
     * 2) Legacy configuration object, which consists of:
     * * `validator`: A synchronous validator function, or an array of validator functions
     * * `asyncValidator`: A single async validator or array of async validator functions
     *
     * @return {?}
     */
    group(controlsConfig, options = null) {
        /** @type {?} */
        const controls = this._reduceControls(controlsConfig);
        /** @type {?} */
        let validators = null;
        /** @type {?} */
        let asyncValidators = null;
        /** @type {?} */
        let updateOn = undefined;
        if (options != null) {
            if (isAbstractControlOptions(options)) {
                // `options` are `AbstractControlOptions`
                validators = options.validators != null ? options.validators : null;
                asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
                updateOn = options.updateOn != null ? options.updateOn : undefined;
            }
            else {
                // `options` are legacy form group options
                validators = options['validator'] != null ? options['validator'] : null;
                asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
            }
        }
        return new FormGroup(controls, { asyncValidators, updateOn, validators });
    }
    /**
     * \@description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * \@usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
     * </code-example>
     * @param {?} formState Initializes the control with an initial state value, or
     * with an object that contains both a value and a disabled status.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator
     * functions.
     *
     * @return {?}
     */
    control(formState, validatorOrOpts, asyncValidator) {
        return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    /**
     * Constructs a new `FormArray` from the given array of configurations,
     * validators and options.
     *
     * @param {?} controlsConfig An array of child controls or control configs. Each
     * child control is given an index when it is registered.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator
     * functions.
     * @return {?}
     */
    array(controlsConfig, validatorOrOpts, asyncValidator) {
        /** @type {?} */
        const controls = controlsConfig.map((/**
         * @param {?} c
         * @return {?}
         */
        c => this._createControl(c)));
        return new FormArray(controls, validatorOrOpts, asyncValidator);
    }
    /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    _reduceControls(controlsConfig) {
        /** @type {?} */
        const controls = {};
        Object.keys(controlsConfig).forEach((/**
         * @param {?} controlName
         * @return {?}
         */
        controlName => {
            controls[controlName] = this._createControl(controlsConfig[controlName]);
        }));
        return controls;
    }
    /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    _createControl(controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            /** @type {?} */
            const value = controlConfig[0];
            /** @type {?} */
            const validator = controlConfig.length > 1 ? controlConfig[1] : null;
            /** @type {?} */
            const asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    }
}
FormBuilder.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 * @type {?}
 */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.7');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Exports the required providers and directives for template-driven forms,
 * making them available for import by NgModules that import this module.
 *
 * @see [Forms Guide](/guide/forms)
 *
 * \@publicApi
 */
class FormsModule {
    /**
     * \@description
     * Provides options for configuring the template-driven forms module.
     *
     * @param {?} opts An object of configuration options
     * * `warnOnDeprecatedNgFormSelector` Configures when to emit a warning when the deprecated
     * `ngForm` selector is used.
     * @return {?}
     */
    static withConfig(opts) {
        return {
            ngModule: FormsModule,
            providers: [{ provide: NG_FORM_SELECTOR_WARNING, useValue: opts.warnOnDeprecatedNgFormSelector }]
        };
    }
}
FormsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                providers: [RadioControlRegistry],
                exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
            },] }
];
/**
 * Exports the required infrastructure and directives for reactive forms,
 * making them available for import by NgModules that import this module.
 * @see [Forms](guide/reactive-forms)
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * \@publicApi
 */
class ReactiveFormsModule {
    /**
     * \@description
     * Provides options for configuring the reactive forms module.
     *
     * @param {?} opts An object of configuration options
     * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
     * binding is used with reactive form directives.
     * @return {?}
     */
    static withConfig(opts) {
        return {
            ngModule: ReactiveFormsModule,
            providers: [{
                    provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                    useValue: opts.warnOnNgModelWithFormControl
                }]
        };
    }
}
ReactiveFormsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                providers: [FormBuilder, RadioControlRegistry],
                exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=forms.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/samplemodule/sample/sample.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/samplemodule/sample/sample.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--App Header-->\r\n<app-header></app-header>\r\n\r\n<!--App Modal-->\r\n<app-modal *ngIf=\"modal_params.isdisplayed\" [is_modal_displayed]=\"modal_params\" (close)=\"toggleModal($event)\"></app-modal>\r\n\r\n<!--This is the main container. It must be included in every page since it has important stylings associated with it-->\r\n<div class=\"pagecontainer\">\r\n    <!--App Loader-->\r\n    <app-loader *ngIf=\"loader_params.isdisplayed\" (close)=\"toggleLoader($event)\"></app-loader>\r\n\r\n    <!--App Message-->\r\n    <app-message *ngIf=\"message_params.isdisplayed\" [is_message_displayed]=\"message_params\"></app-message>\r\n\r\n    <div class=\"container\">\r\n        <header>Button Group Example</header>\r\n        <div class=\"button-container\">\r\n            <div class=\"left\">\r\n                <button (click)=\"toggleModal()\">Button (Normal)</button>\r\n                <button class=\"outline\" (click)=\"toggleLoader()\">Button (Outline)</button>\r\n                <button class=\"disabled\">Button (Disabled)</button>\r\n            </div>\r\n            <div class=\"right\">\r\n                <button class=\"nooutline\" (click)=\"toggleMessage()\">Button (No Outline)</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n        <header>Input Group (Three Item) Example</header>\r\n        <div class=\"ig ig-3\">\r\n            <div class=\"ig-item\">\r\n                <header class=\"ig-item-header\">Required Input Example</header>\r\n                <div class=\"ig-input ig-input-required\">\r\n                    <input class=\"ig-item-input\" placeholder=\"Name\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ig-item\">\r\n                <header class=\"ig-item-header\">Dropdown Example</header>\r\n                <div class=\"ig-input\">\r\n                    <app-dropdown\r\n                        [items]=\"['1','2']\"\r\n                        [isMultiSelect]=\"true\"\r\n                        [selectedItem]=\"['1']\"\r\n                        [isSearchable]=\"true\"\r\n                        [isAddTag]=\"true\">\r\n                    </app-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ig-item\">\r\n                <header class=\"ig-item-header\">Sample Text Example</header>\r\n                <div class=\"ig-input\">\r\n                    <header class=\"ig-item-input\">This is a very long text to demonstrate the capablity for text rendering.\r\n                        This is a very long text to demonstrate the capablity for text rendering\r\n                    </header>\r\n                </div>\r\n            </div>\r\n            <div class=\"ig-item\">\r\n                <header class=\"ig-item-header\">Non Required Input Example</header>\r\n                <div class=\"ig-input\">\r\n                    <input class=\"ig-item-input\" placeholder=\"Age\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n        <header>Input Group (Two Item) Example</header>\r\n        <div class=\"ig ig-2\">\r\n            <div class=\"ig-item\">\r\n                <header class=\"ig-item-header\">Required Input Example</header>\r\n                <div class=\"ig-input ig-input-required\">\r\n                    <input class=\"ig-item-input\" placeholder=\"Name\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ig-item\">\r\n                <header class=\"ig-item-header\">Dropdown Example</header>\r\n                <div class=\"ig-input\">\r\n                    <app-dropdown\r\n                        [items]=\"['1','2']\"\r\n                        [isMultiSelect]=\"true\"\r\n                        [selectedItem]=\"['1']\"\r\n                        [isSearchable]=\"true\"\r\n                        [isAddTag]=\"true\">\r\n                    </app-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ig-item\">\r\n                <header class=\"ig-item-header\">Sample Text Example</header>\r\n                <div class=\"ig-input\">\r\n                    <header class=\"ig-item-input\">This is a very long text to demonstrate the capablity for text rendering.\r\n                        This is a very long text to demonstrate the capablity for text rendering\r\n                    </header>\r\n                </div>\r\n            </div>\r\n            <div class=\"ig-item\">\r\n                <header class=\"ig-item-header\">Non Required Input Example</header>\r\n                <div class=\"ig-input\">\r\n                    <input class=\"ig-item-input\" placeholder=\"Age\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n        <header>Table Example</header>\r\n        <div class=\"table\">\r\n            <div class=\"row table-header\">\r\n                <div class=\"column-s\">\r\n                    ID\r\n                </div>\r\n                <div class=\"column-m\">\r\n                    Name\r\n                </div>\r\n                <div class=\"column-l\">\r\n                    Age\r\n                </div>\r\n                <div class=\"column-xl\">\r\n                    Profession\r\n                </div>\r\n                <div class=\"column\">\r\n                    Actions\r\n                </div>\r\n            </div>\r\n            <div class=\"table-data\">\r\n                <div class=\"row\" *ngFor=\"let i of [1,2,3];let index = index\">\r\n                    <div class=\"column-s\">\r\n                        {{index + 1}}\r\n                    </div>\r\n                    <div class=\"column-m\">\r\n                        {{'Name' + index}}\r\n                    </div>\r\n                    <div class=\"column-l\">\r\n                        {{'Name' + index}}\r\n                    </div>\r\n                    <div class=\"column-xl\">\r\n                        {{'Name' + index}}\r\n                    </div>\r\n                    <div class=\"column\">\r\n                        {{'Name' + index}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dropdown/dropdown.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dropdown/dropdown.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown\" [ngClass]=\"{'material':theme === 'material','default':theme === 'default'}\" [ngStyle]=\"style\">\r\n    <!--Button Container-->\r\n    <div #parentdiv class=\"dropdown-button\" [ngClass]=\"{'dropdown-open':isItemsDisplayed}\" id=\"app-dropdown-id\" (click)=\"toggleItemDisplay()\">\r\n\r\n        <!-- Single Select Container-->\r\n        <div class=\"singleselect-container\" *ngIf=\"!isMultiSelect\">\r\n\r\n            <!-- Actual Text Displayed-->\r\n            <div class=\"placeholder\">\r\n                <header *ngIf=\"selectedItem === undefined\">{{placeholder}}</header>\r\n                <header *ngIf=\"selectedItem && bindLabel\">{{selectedItem[bindLabel]}}</header>\r\n                <header *ngIf=\"selectedItem && !bindLabel\">{{selectedItem}}</header>\r\n            </div>\r\n\r\n            <!-- Delete Icon and Texts-->\r\n            <div class=\"deletecontainer\" (click)=\"clearSelected()\" *ngIf=\"isClearable && selectedItem !== undefined\">\r\n                <header *ngIf=\"style['deleteiconsrc'] === undefined && theme === 'default'\">X</header>\r\n                <img alt=\"\" *ngIf=\"style['deleteiconsrc'] !== undefined && theme === 'default'\" [src]=\"style['deleteiconsrc']\" width=\"20\" height=\"20\">\r\n                <i *ngIf=\"theme === 'material'\" class=\"fas fa-times\"></i>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Multi Select Container-->\r\n        <div class=\"multiselect-container\" *ngIf=\"isMultiSelect\">\r\n\r\n            <ng-container *ngIf=\"selectedItem\">\r\n\r\n                <!-- Actual Text Displayed-->\r\n                <div class=\"multiselect-item-container\" *ngIf=\"selectedItem.length > 0\">\r\n                    <div class=\"multiselect-item\" *ngFor=\"let item of selectedItem\">\r\n                        <header *ngIf=\"item[bindLabel] === undefined\">{{item}}<span (click)=\"deleteItem(item)\">X</span></header>\r\n                        <header *ngIf=\"item[bindLabel] !== undefined\">{{item[bindLabel]}}<span (click)=\"deleteItem(item)\">X</span></header>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Placeholder-->\r\n                <div class=\"placeholder multiselect-placeholder\" [ngClass]=\"{'spread':selectedItem.length > 0}\" *ngIf=\"selectedItem.length === 0\">\r\n                    <header *ngIf=\"selectedItem.length === 0\">{{placeholder}}</header>\r\n                </div>\r\n            </ng-container>\r\n\r\n\r\n            <ng-container *ngIf=\"!selectedItem\">\r\n\r\n                <!-- Placeholder-->\r\n                <div class=\"placeholder multiselect-placeholder\">\r\n                    <header>{{placeholder}}</header>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <!-- Delete Icon and Texts-->\r\n            <div class=\"deletecontainer\" (click)=\"clearSelected()\" *ngIf=\"isClearable && selectedItem !== undefined && selectedItem.length > 0\">\r\n                <header *ngIf=\"style['deleteiconsrc'] === undefined && theme === 'default'\">X</header>\r\n                <img alt=\"\" *ngIf=\"style['deleteiconsrc'] !== undefined && theme === 'default'\" [src]=\"style['deleteiconsrc']\" width=\"20\" height=\"20\">\r\n                <i *ngIf=\"theme === 'material'\" class=\"fas fa-times\"></i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Content Container-->\r\n    <div class=\"dropdown-content\" (click)=\"stopPropagation()\" *ngIf=\"isItemsDisplayed\" [style.marginTop.px]=\"parentdiv.offsetHeight\">\r\n\r\n        <!--List of Items (no error)-->\r\n        <div class=\"dropdown-items\" *ngIf=\"!isErrorOccured\">\r\n            <div class=\"dropdown-search-box\" *ngIf=\"isSearchable\">\r\n                <input placeholder=\"Search...\" [(ngModel)]=\"searchText\" (keyup.enter)=\"addMultiItems()\">\r\n            </div>\r\n\r\n            <header class=\"customItems\" *ngIf=\"items.length > 0 && customItems.length > 0 && isAddTag\">Custom Items</header>\r\n            <div *ngFor=\"let item of customItems | textFilter:[searchText,bindLabel]\" class=\"dropdown-item\" (click)=\"selectItem(item)\">\r\n                <header *ngIf=\"bindLabel === undefined\">{{item}}</header>\r\n                <header *ngIf=\"bindLabel !== undefined\">{{item[bindLabel]}}</header>\r\n            </div>\r\n\r\n            <header class=\"customItems\" *ngIf=\"items.length > 0 && customItems.length > 0 && isAddTag\">Regular Items</header>\r\n            <div *ngFor=\"let item of items | textFilter:[searchText,bindLabel]\" class=\"dropdown-item\" (click)=\"selectItem(item)\">\r\n                <header *ngIf=\"bindLabel === undefined\">{{item}}</header>\r\n                <header *ngIf=\"bindLabel !== undefined\">{{item[bindLabel]}}</header>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Error Message-->\r\n        <div class=\"dropdown-no-item-error\" *ngIf=\"isErrorOccured\">\r\n            <header>{{errormessage}}</header>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-header\">\r\n    <div class=\"app-header-left\">\r\n        <div class=\"brand-logo\">\r\n            <img src=\"https://cdn.worldvectorlogo.com/logos/devto.svg\">\r\n        </div>\r\n        <div class=\"app-header-separator\"></div>\r\n        <div class=\"brand-name\">Header Example</div>\r\n    </div>\r\n    <div class=\"app-header-right\">\r\n        <div class=\"user\">\r\n            <header>Hi, {{user.name || 'John'}}</header>\r\n        </div>\r\n        <div class=\"app-header-separator\"></div>\r\n        <div class=\"logout\">\r\n            <i class=\"fas fa-sign-out-alt\"></i>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader\" [style]=\"styles\">\r\n    <img src=\"assets/icons/common/loader.gif\">\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/message/message.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/message/message.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngIf=\"is_message_displayed.type==='message'\">{{is_message_displayed.message}}</p>\r\n<p *ngIf=\"is_message_displayed.type==='error'\">{{is_message_displayed.message}}</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/modal.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/modal.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"modal-header\">\r\n            <header>{{is_modal_displayed.headertext}}</header>\r\n            <i class=\"fas fa-times\" (click)=\"closeModal()\"></i>\r\n        </div>\r\n        <div class=\"modal-content\">\r\n            <header>{{is_modal_displayed.content}}</header>\r\n        </div>\r\n        <div class=\"modal-footer\" *ngIf=\"is_modal_displayed.type === 'error'\">\r\n            <button>Close</button>\r\n        </div>\r\n        <div class=\"modal-footer\" *ngIf=\"is_modal_displayed.type === 'confirmation'\">\r\n            <button (click)=\"affirm()\">{{is_modal_displayed.affirmtext}}</button>\r\n            <button (click)=\"closeModal()\">{{is_modal_displayed.canceltext}}</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/samplemodule/sample-module-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/samplemodule/sample-module-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: SampleModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleModuleRoutingModule", function() { return SampleModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sample_sample_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample/sample.component */ "./src/app/samplemodule/sample/sample.component.ts");




const routes = [
    { path: '', component: _sample_sample_component__WEBPACK_IMPORTED_MODULE_3__["SampleComponent"] },
];
let SampleModuleRoutingModule = class SampleModuleRoutingModule {
};
SampleModuleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SampleModuleRoutingModule);



/***/ }),

/***/ "./src/app/samplemodule/sample/sample.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/samplemodule/sample/sample.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZW1vZHVsZS9zYW1wbGUvc2FtcGxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/samplemodule/sample/sample.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/samplemodule/sample/sample.component.ts ***!
  \*********************************************************/
/*! exports provided: SampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleComponent", function() { return SampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_globalstate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/globalstate.service */ "./src/app/shared/services/globalstate.service.ts");
/* harmony import */ var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/utils.service */ "./src/app/shared/services/utils.service.ts");




let SampleComponent = class SampleComponent {
    constructor(globalstate, service) {
        this.globalstate = globalstate;
        this.service = service;
        // UI Variables
        this.page_params = {
            isinitialised: false,
            user: {}
        };
        this.loader_params = {
            isdisplayed: false
        };
        this.modal_params = {
            context: 'mycontext',
            type: 'confirmation',
            headertext: 'Modal Header',
            content: 'Modal Body',
            affirmtext: 'Proceed',
            canceltext: 'Cancel',
            isdisplayed: false
        };
        this.message_params = {
            type: 'message',
            message: 'Sample Message',
            isdisplayed: false
        };
        _shared_services_globalstate_service__WEBPACK_IMPORTED_MODULE_2__["GlobalStateVariables"]._globalState.subscribe((val) => {
            if (!this.page_params.isinitialised) {
                this.page_params.isinitialised = true;
            }
        });
    }
    /*  --------------------------------   Base Implementations  ---------------------- */
    // Function for retreiving dropdown Values
    loadMetaData() {
        this.toggleLoader(true);
        this.toggleMessage(false);
    }
    ;
    // Function for retreiving data Values
    loadData() {
        this.toggleLoader(true);
        this.toggleMessage(false);
        const payload = {};
        this.service.parseEnv('', 'POST', payload).subscribe((val) => {
            this.toggleLoader(false);
            this.transformData();
        }, (err) => {
            this.toggleLoader(false);
            this.toggleMessage(true, 'Server Error', 'error');
        });
    }
    ;
    transformData() {
    }
    toggleModal(action) {
        if (action === true || action === false) {
            // Action Here
            this.modal_params.isdisplayed = false;
        }
        else {
            this.modal_params.isdisplayed = !this.modal_params.isdisplayed;
        }
    }
    toggleLoader(isdisplayed) {
        if (isdisplayed === true || isdisplayed === false) {
            this.loader_params.isdisplayed = isdisplayed;
        }
        else {
            this.loader_params.isdisplayed = !this.loader_params.isdisplayed;
        }
    }
    toggleMessage(isdisplayed, message, type) {
        if (message) {
            this.message_params.message = message;
        }
        if (type) {
            this.message_params.type = type;
        }
        if (isdisplayed === true || isdisplayed === false) {
            this.message_params.isdisplayed = isdisplayed;
        }
        else {
            this.message_params.isdisplayed = !this.message_params.isdisplayed;
        }
    }
};
SampleComponent.ctorParameters = () => [
    { type: _shared_services_globalstate_service__WEBPACK_IMPORTED_MODULE_2__["GlobalStateVariables"] },
    { type: _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"] }
];
SampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sample.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/samplemodule/sample/sample.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sample.component.scss */ "./src/app/samplemodule/sample/sample.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_globalstate_service__WEBPACK_IMPORTED_MODULE_2__["GlobalStateVariables"], _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]])
], SampleComponent);



/***/ }),

/***/ "./src/app/samplemodule/samplemodule.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/samplemodule/samplemodule.module.ts ***!
  \*****************************************************/
/*! exports provided: SamplemoduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplemoduleModule", function() { return SamplemoduleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _sample_sample_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample/sample.component */ "./src/app/samplemodule/sample/sample.component.ts");
/* harmony import */ var _shared_shared_services_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared-services.module */ "./src/app/shared/shared-services.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _sample_module_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sample-module-routing.module */ "./src/app/samplemodule/sample-module-routing.module.ts");
/* harmony import */ var _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/header/header.module */ "./src/app/shared/components/header/header.module.ts");
/* harmony import */ var _shared_components_message_message_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/message/message.module */ "./src/app/shared/components/message/message.module.ts");
/* harmony import */ var _shared_components_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/loader/loader.module */ "./src/app/shared/components/loader/loader.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/components/dropdown/dropdown.module */ "./src/app/shared/components/dropdown/dropdown.module.ts");












let SamplemoduleModule = class SamplemoduleModule {
};
SamplemoduleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sample_sample_component__WEBPACK_IMPORTED_MODULE_3__["SampleComponent"]],
        imports: [
            // Main Modules
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _sample_module_routing_module__WEBPACK_IMPORTED_MODULE_6__["SampleModuleRoutingModule"],
            // Libraries
            // Shared Services Modules
            _shared_shared_services_module__WEBPACK_IMPORTED_MODULE_4__["SharedServicesModule"],
            // Shared Component Modules
            _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _shared_components_message_message_module__WEBPACK_IMPORTED_MODULE_8__["MessageModule"],
            _shared_components_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__["LoaderModule"],
            _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_10__["ModalModule"],
            _shared_components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"]
        ]
    })
], SamplemoduleModule);



/***/ }),

/***/ "./src/app/shared/components/dropdown/dropdown.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\n/* ------------  Brand Colors  ---------------- */\n/* -----------  Border Colors  ---------------- */\n/* -----------  Button Colors  ---------------- */\n/* -----------  Font Colors  ------------------- */\n/* -----------  Input Group Colors  ------------ */\n/* -----------  Page Layout Colors  ------------ */\n/* -----------  Table Colors  ------------------ */\n/* -----------  Font Settings  ------------------- */\n/* -----------  Button Settings  ----------------- */\n/* -----------  PC Settings  ----------------- */\nh1, h2, h3, h4, h5, h6, header, section, p, a, b, title, textarea, input {\n  margin: 0;\n  padding: 0;\n  font-family: \"Nunito Sans\", \"sans-serif\";\n}\ndiv:focus, header:focus, button:focus {\n  outline: none;\n}\n.pagecontainer {\n  padding: 25px;\n  background: #F2F2F2;\n  min-height: calc(100vh - 70px - 50px);\n}\n.pagecontainer .container {\n  margin-top: 25px;\n  background: white;\n  padding: 25px;\n}\n.pagecontainer .container > header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.pagecontainer .container > header .left, .pagecontainer .container > header .right {\n  display: flex;\n  align-items: center;\n}\n/* Sample Code for Page Container */\n/* ----------------------------------------------------------\n<div class=\"pagecontainer\">\n    <!--App Loader-->\n    <app-loader *ngIf=\"loader_params.isdisplayed\" (close)=\"toggleLoader($event)\"></app-loader>\n\n    <!--App Message-->\n    <app-message *ngIf=\"message_params.isdisplayed\" [is_message_displayed]=\"message_params\"></app-message>\n\n    <!--Sample Page Section 1-->\n    <div class=\"pagesection\">\n        <header>Buttons</header>\n        <div class=\"button-container\">\n            <div class=\"left\">\n                <button (click)=\"toggleModal()\">Show Modal</button>\n                <button (click)=\"toggleLoader()\">Toggle Loader</button>\n            </div>\n            <div class=\"right\">\n                <button (click)=\"toggleMessage()\">Toggle Message</button>\n            </div>\n        </div>\n    </div>\n\n    <!--Sample Page Section 2-->\n    <div class=\"pagesection\">\n\n    </div>\n</div>\n\n ---------------------------------------------------------- */\n.button-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.button-container .left, .button-container .right {\n  display: flex;\n  align-items: center;\n}\n.button-container .left {\n  justify-content: flex-start;\n}\n.button-container .left i, .button-container .left header, .button-container .left button, .button-container .left img {\n  margin-right: 10px;\n}\n.button-container .right {\n  justify-content: flex-end;\n}\n.button-container .right i, .button-container .right header, .button-container .right button, .button-container .right img {\n  margin-left: 10px;\n}\n/* Sample Code for Button Container */\n/* ----------------------------------------------------------\n<div class=\"button-container\">\n    <div class=\"left\">\n        <button (click)=\"toggleModal()\">Show Modal</button>\n        <button (click)=\"toggleLoader()\">Toggle Loader</button>\n    </div>\n    <div class=\"right\">\n        <button (click)=\"toggleMessage()\">Toggle Message</button>\n    </div>\n</div>\n ---------------------------------------------------------- */\n.table {\n  font-size: 13px;\n  color: #212529;\n}\n.table .column {\n  width: 18%;\n  padding: 1%;\n}\n.table .column-s {\n  width: 3%;\n  padding: 1%;\n}\n.table .column-m {\n  width: 8%;\n  padding: 1%;\n}\n.table .column-l {\n  width: 13%;\n  padding: 1%;\n}\n.table .column-xl {\n  width: 18%;\n  padding: 1%;\n}\n.table .row {\n  display: flex;\n  align-items: center;\n  min-height: 30px;\n}\n.table .table-header {\n  background: #f2f2f2;\n  font-weight: 700;\n}\n.table .table-data {\n  max-height: 360px;\n  overflow-y: auto;\n}\n.table .table-data .row {\n  border-bottom: 1px solid #d0dee6;\n}\n/* Sample Code for Table */\n/* ----------------------------------------------------------\n<div class=\"table\">\n    <div class=\"row table-header\">\n        <div class=\"column\">\n            #\n        </div>\n        <div class=\"column\">\n            Name\n        </div>\n    </div>\n    <div class=\"table-data\">\n        <div class=\"row\" *ngFor=\"let i of [1,2,3];let index = index\">\n            <div class=\"column\">\n                {{index + 1}}\n            </div>\n            <div class=\"column\">\n                {{'Name' + index}}\n            </div>\n        </div>\n    </div>\n</div>\n ---------------------------------------------------------- */\n/* Buttons */\nbutton {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 34px;\n  padding: 8px 15px;\n  font-family: \"Nunito Sans\", \"sans-serif\";\n  font-size: 14px;\n  text-decoration: none;\n  font-weight: 400;\n  color: #FFF;\n  border: 1px solid #ff9e00;\n  border-radius: 3px;\n  transition: 0.3s;\n  background-color: #ff9e00;\n  background-image: #ff9e00;\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#498493, endColorstr=#48778A);\n  cursor: pointer;\n}\nbutton i {\n  margin: 0 5px;\n}\nbutton span {\n  margin: 0 5px;\n}\nbutton:hover {\n  transition: 0.5s;\n}\nbutton:focus {\n  outline: none;\n}\nbutton.outline {\n  background: white;\n  color: #ff9e00;\n  border: 1px solid #ff9e00;\n}\nbutton.nooutline {\n  background: white;\n  color: #000;\n  border: none;\n}\nbutton.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n/* Scroll Bars */\n/* width */\n::-webkit-scrollbar {\n  width: 6px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 4px;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\ninput {\n  padding: 3px 7px;\n  border: 1px solid #000;\n}\ninput:focus {\n  outline: none;\n}\n/* Inputs */\n.ig {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.ig .ig-item {\n  min-height: 36px;\n  padding: 5px 0;\n  cursor: text;\n  margin-bottom: 15px;\n}\n.ig .ig-item .ig-item-header {\n  font-weight: 700;\n  font-size: 13px;\n  margin-bottom: 5px;\n  color: #53565A;\n}\n.ig .ig-item .ig-input {\n  border-left: 4px solid white;\n}\n.ig .ig-item .ig-input > header {\n  font-size: 14px;\n  font-weight: 400;\n  color: #53565A;\n  margin-left: -4px;\n  min-height: 38px;\n}\n.ig .ig-item .ig-input > i {\n  border-top: 1px solid #CFDDE6;\n  border-bottom: 1px solid #CFDDE6;\n  height: 37px;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 5px;\n}\n.ig .ig-item .ig-input input {\n  border: 1px solid #CFDDE6;\n  outline: none;\n  font-size: 14px;\n  padding: 9px 15px;\n  width: calc(100% - 32px);\n  margin-left: -4px;\n}\n.ig .ig-item .ig-input input::-webkit-input-placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input input::-moz-placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input input::-ms-input-placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input input::placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input textarea {\n  font-size: 14px;\n  width: calc(100% - 22px);\n  height: 100px;\n  border: 1px solid #CFDDE6;\n  padding: 10px;\n  margin-left: -4px;\n}\n.ig .ig-item .ig-input .dropdown, .ig .ig-item .ig-input .default, .ig .ig-item .ig-input .material {\n  border: 1px solid #CFDDE6;\n  margin-left: -4px;\n}\n.ig .ig-item .ig-input .dropdown .dropdown-button, .ig .ig-item .ig-input .default .dropdown-button, .ig .ig-item .ig-input .material .dropdown-button {\n  border: none;\n}\n.ig .ig-item .ig-input-required {\n  border-left: 4px solid #ED8B00;\n}\n.ig .ig-item .ig-input-required input, .ig .ig-item .ig-input-required textarea {\n  border-left: 1px solid transparent;\n  margin-left: 0;\n}\n.ig .ig-item .ig-input-required .ng-select.custom .ng-select-container {\n  border-left: 1px solid transparent;\n}\n.ig .ig-item .ig-input-large {\n  height: 122px;\n}\n.ig-2 .ig-item {\n  width: calc(50% - 15px);\n  margin-right: 15px;\n}\n.ig-3 .ig-item {\n  width: calc(33% - 15px);\n  margin-right: 15px;\n}\n/* Global */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  font-family: \"Nunito Sans\", \"sans-serif\";\n}\n.dropdown {\n  display: flex;\n  min-height: 37px;\n  min-width: 100px;\n  width: 100%;\n  position: relative;\n  float: left;\n}\n.dropdown .dropdown-button {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  cursor: pointer;\n}\n.dropdown .dropdown-button .placeholder {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  word-break: break-word;\n}\n.dropdown .dropdown-button .placeholder header {\n  margin-bottom: 0;\n  color: #98A4AE;\n  font-weight: 400;\n  font-size: 14px;\n  min-height: auto;\n}\n.dropdown .dropdown-button .deletecontainer {\n  display: flex;\n  align-items: center;\n}\n.dropdown .dropdown-button .singleselect-container {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.dropdown .dropdown-button .multiselect-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.dropdown .dropdown-button .multiselect-container .placeholder {\n  width: unset;\n  justify-content: center;\n}\n.dropdown .dropdown-button .multiselect-container .placeholder img {\n  margin: 0;\n}\n.dropdown .dropdown-button .multiselect-container .multiselect-item-container {\n  width: 100%;\n}\n.dropdown .dropdown-button .multiselect-container .multiselect-item-container .multiselect-item {\n  float: left;\n  word-break: break-word;\n}\n.dropdown .dropdown-button .multiselect-container .multiselect-item-container .multiselect-item header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 6px;\n}\n.dropdown .dropdown-button .multiselect-container .multiselect-item-container .multiselect-item header span {\n  margin-left: 10px;\n}\n.dropdown .dropdown-button .multiselect-container .spread {\n  width: 30px;\n}\n.dropdown .dropdown-content {\n  width: 100%;\n  margin-top: 37px;\n  position: absolute;\n  font-size: 14px;\n  z-index: 1;\n}\n.dropdown .dropdown-content .dropdown-items {\n  width: inherit;\n  max-height: 250px;\n  overflow-y: auto;\n}\n.dropdown .dropdown-content .dropdown-items .dropdown-search-box {\n  display: flex;\n  justify-content: center;\n}\n.dropdown .dropdown-content .dropdown-items .dropdown-search-box input {\n  width: 100%;\n}\n.dropdown .dropdown-content .dropdown-items .dropdown-search-box input:focus {\n  outline: none;\n}\n.dropdown .dropdown-content .dropdown-items .customItems {\n  font-weight: 700;\n}\n.dropdown .dropdown-content .dropdown-items .dropdown-item {\n  cursor: pointer;\n  word-break: break-word;\n  transition: 0.5s;\n}\n.dropdown .dropdown-content .dropdown-no-item-error {\n  height: 100px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.default .material-icons {\n  font-size: 18px;\n  cursor: pointer;\n}\n.default ::-webkit-scrollbar {\n  width: 5px;\n}\n.default ::-webkit-scrollbar-thumb {\n  -webkit-border-radius: 10px;\n  background: #646464;\n}\n.default ::-webkit-scrollbar-thumb:window-inactive {\n  background: rgba(255, 0, 0, 0.4);\n}\n.default .dropdown-button {\n  padding: 5px 10px 5px 10px;\n  border: 1px solid #c8c8c8;\n  cursor: pointer;\n}\n.default .dropdown-button .placeholder {\n  width: 85%;\n}\n.default .dropdown-button .multiselect-container .multiselect-item-container .multiselect-item {\n  border: 1px solid #c8c8c8;\n  margin: 1.5px;\n  border-radius: 4px;\n}\n.default .dropdown-content {\n  box-shadow: 0 1px 2px 1px #c8c8c8;\n  background-color: white;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.default .dropdown-content .dropdown-items .dropdown-search-box {\n  padding: 10px 10px 5px 10px;\n}\n.default .dropdown-content .dropdown-items .dropdown-search-box input {\n  border: none;\n  padding: 5px;\n  border-bottom: 1px solid #c8c8c8;\n}\n.default .dropdown-content .dropdown-items .customItems {\n  margin: 5px 10px 5px 10px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #c8c8c8;\n}\n.default .dropdown-content .dropdown-items .dropdown-item {\n  display: flex;\n  align-items: center;\n  padding: 14px 10px 14px 10px;\n}\n.default .dropdown-content .dropdown-items .dropdown-item:hover {\n  background-color: #f0f0f0;\n}\n.default .dropdown-content .dropdown-no-item-error {\n  display: flex;\n  justify-content: center;\n  font-size: 13px;\n  color: #b4b4b4;\n}\n.default .dropdown-content .dropdown-no-item-error header {\n  width: 90%;\n  text-align: center;\n}\n.material .material-icons {\n  font-size: 18px;\n  cursor: pointer;\n}\n.material ::-webkit-scrollbar {\n  width: 5px;\n}\n.material ::-webkit-scrollbar-thumb {\n  -webkit-border-radius: 10px;\n  background: #646464;\n}\n.material ::-webkit-scrollbar-thumb:window-inactive {\n  background: rgba(255, 0, 0, 0.4);\n}\n.material .dropdown-button {\n  padding: 5px 10px 5px 10px;\n  border-bottom: 1px solid #c8c8c8;\n}\n.material .dropdown-button .placeholder {\n  width: 85%;\n}\n.material .dropdown-button .multiselect-container .multiselect-item-container .multiselect-item {\n  border: 1px solid #c8c8c8;\n  margin: 5px 5px 0 0;\n  border-radius: 4px;\n}\n.material .dropdown-open {\n  border-bottom: 1px solid darkblue;\n}\n.material .dropdown-content {\n  box-shadow: 0 1px 2px 1px #c8c8c8;\n  background-color: white;\n}\n.material .dropdown-content .dropdown-items .dropdown-search-box {\n  padding: 10px 10px 5px 10px;\n}\n.material .dropdown-content .dropdown-items .dropdown-search-box input {\n  border: none;\n  padding: 5px 0;\n  border-bottom: 1px solid #c8c8c8;\n}\n.material .dropdown-content .dropdown-items .customItems {\n  margin: 5px 10px 5px 10px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #c8c8c8;\n}\n.material .dropdown-content .dropdown-items .dropdown-item {\n  display: flex;\n  align-items: center;\n  padding: 14px 10px 14px 10px;\n}\n.material .dropdown-content .dropdown-items .dropdown-item:hover {\n  background-color: #f0f0f0;\n}\n.material .dropdown-content .dropdown-no-item-error {\n  display: flex;\n  justify-content: center;\n  font-size: 13px;\n  color: #b4b4b4;\n}\n.material .dropdown-content .dropdown-no-item-error header {\n  width: 90%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vQzpcXFVzZXJzXFxhYzE0MzExXFxQcm9qZWN0c1xcT3BlbiBTb3VyY2VcXEFuZ3VsYXJTdGFydGVyL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Ryb3Bkb3duL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xcY29sb3JzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Ryb3Bkb3duL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xcdGhlbWUuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vQzpcXFVzZXJzXFxhYzE0MzExXFxQcm9qZWN0c1xcT3BlbiBTb3VyY2VcXEFuZ3VsYXJTdGFydGVyL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc2hlZXRzXFxmb250cy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vQzpcXFVzZXJzXFxhYzE0MzExXFxQcm9qZWN0c1xcT3BlbiBTb3VyY2VcXEFuZ3VsYXJTdGFydGVyL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc2hlZXRzXFxwYWdlcy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcm9wZG93bi9DOlxcVXNlcnNcXGFjMTQzMTFcXFByb2plY3RzXFxPcGVuIFNvdXJjZVxcQW5ndWxhclN0YXJ0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzaGVldHNcXHRhYmxlLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Ryb3Bkb3duL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xcYnV0dG9ucy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcm9wZG93bi9DOlxcVXNlcnNcXGFjMTQzMTFcXFByb2plY3RzXFxPcGVuIFNvdXJjZVxcQW5ndWxhclN0YXJ0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzaGVldHNcXHNjcm9sbC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kcm9wZG93bi9DOlxcVXNlcnNcXGFjMTQzMTFcXFByb2plY3RzXFxPcGVuIFNvdXJjZVxcQW5ndWxhclN0YXJ0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzaGVldHNcXGlucHV0LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Ryb3Bkb3duL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxkcm9wZG93blxcZHJvcGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQSxpREFBQTtBQUtBLGlEQUFBO0FBSUEsaURBQUE7QUFPQSxrREFBQTtBQVFBLGtEQUFBO0FBVUEsa0RBQUE7QUFJQSxrREFBQTtBQ3RDQSxvREFBQTtBQUtBLG9EQUFBO0FBSUEsZ0RBQUE7QUNUQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7QUNZSjtBQ1pBO0VBQ0ksYUFBQTtBRGVKO0FDWEE7RUFDSSxhQUFBO0VBQ0EsbUJKeUJ1QjtFSXhCdkIscUNBQUE7QURjSjtBQ1pJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFITmdCO0FFb0J4QjtBQ1pRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBckJZO0FEbUN4QjtBQ1pZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FEY2hCO0FDUEEsbUNBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFBQTtBQStCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBcEVvQjtBRDRFeEI7QUNMSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBRE9SO0FDSkk7RUFDSSwyQkFBQTtBRE1SO0FDSlE7RUFDSSxrQkFBQTtBRE1aO0FDRkk7RUFDSSx5QkFBQTtBRElSO0FDRlE7RUFDSSxpQkFBQTtBRElaO0FDRUEscUNBQUE7QUFDQTs7Ozs7Ozs7Ozs2REFBQTtBQy9GQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FGMkdKO0FFekdJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUYyR1I7QUV4R0k7RUFDSSxTQUFBO0VBQ0EsV0FBQTtBRjBHUjtBRXZHSTtFQUNJLFNBQUE7RUFDQSxXQUFBO0FGeUdSO0FFdEdJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUZ3R1I7QUVyR0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBRnVHUjtBRXBHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FGc0dSO0FFbkdJO0VBQ0ksbUJMR1U7RUtGVixnQkFBQTtBRnFHUjtBRWxHSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUZvR1I7QUVsR1E7RUFDSSxnQ0FBQTtBRm9HWjtBRTlGQSwwQkFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBQUE7QUNwREEsWUFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkxDYTtFS0FiLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSx5Qk5QVztFTVFYLHlCTk5XO0VNT1gsOEdBQUE7RUFDQSxlQUFBO0FIeUtKO0FHdktJO0VBQ0ksYUFBQTtBSHlLUjtBR3RLSTtFQUNJLGFBQUE7QUh3S1I7QUdwS0E7RUFDSSxnQkFBQTtBSHVLSjtBR3BLQTtFQUNJLGFBQUE7QUh1S0o7QUduS0E7RUFDSSxpQkFBQTtFQUNBLGNOaENXO0VNaUNYLHlCQUFBO0FIc0tKO0FHbktBO0VBQ0ksaUJBQUE7RUFDQSxXTm5Dd0I7RU1vQ3hCLFlBQUE7QUhzS0o7QUduS0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QUhzS0o7QUk1TkEsZ0JBQUE7QUFDQSxVQUFBO0FBQ0E7RUFDSSxVQUFBO0FKK05KO0FJNU5BLFVBQUE7QUFDQTtFQUNJLG1CQUFBO0FKK05KO0FJNU5BLFdBQUE7QUFDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUorTko7QUk1TkEsb0JBQUE7QUFDQTtFQUNJLGdCQUFBO0FKK05KO0FLalBBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBTG9QSjtBS2pQQTtFQUNJLGFBQUE7QUxvUEo7QUtoUEEsV0FBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBTG1QSjtBS2hQSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBTGtQUjtBS2hQUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY1JGUztBR29QckI7QUsvT1E7RUFDSSw0QkFBQTtBTGlQWjtBSy9PWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNSWEs7RVFZTCxpQkFBQTtFQUNBLGdCQUFBO0FMaVBoQjtBSzlPWTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBTGdQaEI7QUs3T1k7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FMK09oQjtBSzVPWTtFQUNJLGNSbkNZO0VRb0NaLGVBQUE7QUw4T2hCO0FLaFBZO0VBQ0ksY1JuQ1k7RVFvQ1osZUFBQTtBTDhPaEI7QUtoUFk7RUFDSSxjUm5DWTtFUW9DWixlQUFBO0FMOE9oQjtBS2hQWTtFQUNJLGNSbkNZO0VRb0NaLGVBQUE7QUw4T2hCO0FLM09ZO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FMNk9oQjtBS3pPWTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUwyT2hCO0FLek9nQjtFQUNJLFlBQUE7QUwyT3BCO0FLdE9RO0VBQ0ksOEJBQUE7QUx3T1o7QUt0T1k7RUFDSSxrQ0FBQTtFQUNBLGNBQUE7QUx3T2hCO0FLcE9nQjtFQUNJLGtDQUFBO0FMc09wQjtBS2pPUTtFQUNJLGFBQUE7QUxtT1o7QUt4Tkk7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0FMMk5SO0FLck5JO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtBTHdOUjtBSnhVQSxXQUFBO0FBQ0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0FJMlVKO0FNclZBO0VBQ0ksYUFBQTtFQUNBLGdCQU5TO0VBT1QsZ0JBTlE7RUFPUixXQU5JO0VBT0osa0JBQUE7RUFDQSxXQUFBO0FOd1ZKO0FNclZJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FkQTtFQWVBLGVBQUE7QU51VlI7QU1yVlE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FOdVZaO0FNclZZO0VBQ0ksZ0JBQUE7RUFDQSxjVERZO0VTRVosZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QU51VmhCO0FNbFZRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FOb1ZaO0FNalZRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0F6Q0o7QU40WFI7QU0vVVE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FOaVZaO0FNL1VZO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FOaVZoQjtBTS9VZ0I7RUFDSSxTQUFBO0FOaVZwQjtBTTVVWTtFQUNJLFdBQUE7QU44VWhCO0FNNVVnQjtFQUNJLFdBQUE7RUFDQSxzQkFBQTtBTjhVcEI7QU01VW9CO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FOOFV4QjtBTTVVd0I7RUFDSSxpQkFBQTtBTjhVNUI7QU10VVk7RUFDSSxXQUFBO0FOd1VoQjtBTWpVSTtFQUNJLFdBM0ZBO0VBNEZBLGdCQTlGSztFQStGTCxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FObVVSO0FNalVRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QU5tVVo7QU1qVVk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QU5tVWhCO0FNalVnQjtFQUNJLFdBQUE7QU5tVXBCO0FNaFVnQjtFQUNJLGFBQUE7QU5rVXBCO0FNOVRZO0VBQ0ksZ0JBQUE7QU5nVWhCO0FNN1RZO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QU4rVGhCO0FNMVRRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBTjRUWjtBTWpUSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FOb1RSO0FNalRJO0VBQ0ksVUFBQTtBTm1UUjtBTWhUSTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7QU5rVFI7QU0vU0k7RUFDSSxnQ0FBQTtBTmlUUjtBTTdTSTtFQUNJLDBCQUFBO0VBQ0EseUJBdkJLO0VBd0JMLGVBQUE7QU4rU1I7QU03U1E7RUFDSSxVQUFBO0FOK1NaO0FNMVNnQjtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FONFNwQjtBTXBTSTtFQUNJLGlDQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FOc1NSO0FNblNZO0VBQ0ksMkJBQUE7QU5xU2hCO0FNblNnQjtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBeERQO0FONlZiO0FNalNZO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQS9ESDtBTmtXYjtBTWhTWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FOa1NoQjtBTS9SWTtFQUNJLHlCQUFBO0FOaVNoQjtBTTdSUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FOK1JaO0FNN1JZO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FOK1JoQjtBTXJSSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FOd1JSO0FNclJJO0VBQ0ksVUFBQTtBTnVSUjtBTXBSSTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7QU5zUlI7QU1uUkk7RUFDSSxnQ0FBQTtBTnFSUjtBTWpSSTtFQUNJLDBCQUFBO0VBQ0EsZ0NBdkJLO0FOMFNiO0FNalJRO0VBQ0ksVUFBQTtBTm1SWjtBTTlRZ0I7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QU5nUnBCO0FNelFJO0VBQ0ksaUNBQUE7QU4yUVI7QU12UUk7RUFDSSxpQ0FBQTtFQUNBLHVCQUFBO0FOeVFSO0FNdFFZO0VBQ0ksMkJBQUE7QU53UWhCO0FNdFFnQjtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBekRQO0FOaVViO0FNcFFZO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQWhFSDtBTnNVYjtBTW5RWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FOcVFoQjtBTWxRWTtFQUNJLHlCQUFBO0FOb1FoQjtBTWhRUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FOa1FaO0FNaFFZO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FOa1FoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AaW1wb3J0IFwiYXBwL3NoYXJlZC9zdHlsZXNoZWV0cy9jb2xvcnMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiYXBwL3NoYXJlZC9zdHlsZXNoZWV0cy90aGVtZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJhcHAvc2hhcmVkL3N0eWxlc2hlZXRzL2ZvbnRzLnNjc3NcIjtcclxuXHJcbkBpbXBvcnQgXCJhcHAvc2hhcmVkL3N0eWxlc2hlZXRzL3BhZ2VzLnNjc3NcIjtcclxuQGltcG9ydCBcImFwcC9zaGFyZWQvc3R5bGVzaGVldHMvdGFibGUuc2Nzc1wiO1xyXG5cclxuQGltcG9ydCBcImFwcC9zaGFyZWQvc3R5bGVzaGVldHMvYnV0dG9ucy5zY3NzXCI7XHJcbkBpbXBvcnQgXCJhcHAvc2hhcmVkL3N0eWxlc2hlZXRzL3Njcm9sbC5zY3NzXCI7XHJcbkBpbXBvcnQgXCJhcHAvc2hhcmVkL3N0eWxlc2hlZXRzL2lucHV0LnNjc3NcIjtcclxuXHJcblxyXG4vKiBHbG9iYWwgKi9cclxuaHRtbCwgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQsICRzZWNvbmRhcnktZm9udDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiLyogLS0tLS0tLS0tLS0tICBCcmFuZCBDb2xvcnMgIC0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJGFjX2NscjogIzAyNzhFQztcclxuJHByX2NscjogIzAyNjdDOTtcclxuJHNjX2NscjogI0VERjNGQztcclxuXHJcbi8qIC0tLS0tLS0tLS0tICBCb3JkZXIgQ29sb3JzICAtLS0tLS0tLS0tLS0tLS0tICovXHJcbiRib3JkZXItY29sb3I6IHJnYigyMDgsIDIyMiwgMjMwKTtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgQnV0dG9uIENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4kYnRuLWJnLWNvbG9yOiAjZmY5ZTAwO1xyXG4kYnRuLWZvbnQtY29sb3I6ICNGRkY7XHJcbiRidG4tYmctaW1hZ2U6ICNmZjllMDA7XHJcbiRidG4tbm8tb3V0bGluZS1mb250LWNvbG9yOiAjMDAwO1xyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tICBGb250IENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4kZm9udF9jbHJfcHJpbWFyeTogcmdiKDk0LCA5MCwgOTUpO1xyXG4kZm9udF9jbHJfc2Vjb25kYXJ5OiByZ2JhKDksIDIwLCAzNywgMC41OSk7XHJcbiRmb250X2Nscl90ZXJ0aWFyeTogcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuJHdhcm5pbmdfZm9udF9jbHI6IHJnYigxODUsIDQzLCA1Mik7XHJcbiR0b29sdGlwZm9udDogcmdiKDE4NSwgNDMsIDUyKTtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgSW5wdXQgR3JvdXAgQ29sb3JzICAtLS0tLS0tLS0tLS0gKi9cclxuJGlucHV0LWJvcmRlcjogIzAwMDtcclxuXHJcbi8vSW5wdXQgR3JvdXAgUGFyYW1zXHJcbiRpZy1pdGVtLWZvbnQtY29sb3I6ICM1MzU2NUE7XHJcbiRpZy1pdGVtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOThBNEFFO1xyXG4kaWctaXRlbS1pbnB1dC1ib3JkZXI6ICNDRkRERTY7XHJcbiRpZy1pbnB1dC1yZXF1aXJlZDogI0VEOEIwMDtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgUGFnZSBMYXlvdXQgQ29sb3JzICAtLS0tLS0tLS0tLS0gKi9cclxuJHBhZ2Vjb250YWluZXItYmFja2dyb3VuZDogI0YyRjJGMjtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgVGFibGUgQ29sb3JzICAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJHRhYmxlLWhlYWRlci1iZzogI2YyZjJmMjtcclxuIiwiLyogLS0tLS0tLS0tLS0gIEZvbnQgU2V0dGluZ3MgIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJHByaW1hcnktZm9udDogJ051bml0byBTYW5zJztcclxuJHNlY29uZGFyeS1mb250OiAnc2Fucy1zZXJpZic7XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0gIEJ1dHRvbiBTZXR0aW5ncyAgLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJGJ0bi1taW4taGVpZ2h0OiAzNHB4O1xyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tICBQQyBTZXR0aW5ncyAgLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJHBhZ2Vjb250YWluZXItcGFkZGluZzogMjVweDtcclxuIiwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgaGVhZGVyLCBzZWN0aW9uLCBwLCBhLCBiLCB0aXRsZSwgdGV4dGFyZWEsIGlucHV0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udCwgJHNlY29uZGFyeS1mb250O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8qIC0tLS0tLS0tLS0tLSAgQnJhbmQgQ29sb3JzICAtLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSAgQm9yZGVyIENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gIEJ1dHRvbiBDb2xvcnMgIC0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tICBGb250IENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gIElucHV0IEdyb3VwIENvbG9ycyAgLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSAgUGFnZSBMYXlvdXQgQ29sb3JzICAtLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tICBUYWJsZSBDb2xvcnMgIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gIEZvbnQgU2V0dGluZ3MgIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tICBCdXR0b24gU2V0dGluZ3MgIC0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSAgUEMgU2V0dGluZ3MgIC0tLS0tLS0tLS0tLS0tLS0tICovXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBoZWFkZXIsIHNlY3Rpb24sIHAsIGEsIGIsIHRpdGxlLCB0ZXh0YXJlYSwgaW5wdXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIFwic2Fucy1zZXJpZlwiO1xufVxuXG5kaXY6Zm9jdXMsIGhlYWRlcjpmb2N1cywgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBhZ2Vjb250YWluZXIge1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCAtIDUwcHgpO1xufVxuLnBhZ2Vjb250YWluZXIgLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyNXB4O1xufVxuLnBhZ2Vjb250YWluZXIgLmNvbnRhaW5lciA+IGhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5wYWdlY29udGFpbmVyIC5jb250YWluZXIgPiBoZWFkZXIgLmxlZnQsIC5wYWdlY29udGFpbmVyIC5jb250YWluZXIgPiBoZWFkZXIgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogU2FtcGxlIENvZGUgZm9yIFBhZ2UgQ29udGFpbmVyICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG48ZGl2IGNsYXNzPVwicGFnZWNvbnRhaW5lclwiPlxuICAgIDwhLS1BcHAgTG9hZGVyLS0+XG4gICAgPGFwcC1sb2FkZXIgKm5nSWY9XCJsb2FkZXJfcGFyYW1zLmlzZGlzcGxheWVkXCIgKGNsb3NlKT1cInRvZ2dsZUxvYWRlcigkZXZlbnQpXCI+PC9hcHAtbG9hZGVyPlxuXG4gICAgPCEtLUFwcCBNZXNzYWdlLS0+XG4gICAgPGFwcC1tZXNzYWdlICpuZ0lmPVwibWVzc2FnZV9wYXJhbXMuaXNkaXNwbGF5ZWRcIiBbaXNfbWVzc2FnZV9kaXNwbGF5ZWRdPVwibWVzc2FnZV9wYXJhbXNcIj48L2FwcC1tZXNzYWdlPlxuXG4gICAgPCEtLVNhbXBsZSBQYWdlIFNlY3Rpb24gMS0tPlxuICAgIDxkaXYgY2xhc3M9XCJwYWdlc2VjdGlvblwiPlxuICAgICAgICA8aGVhZGVyPkJ1dHRvbnM8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTW9kYWwoKVwiPlNob3cgTW9kYWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVMb2FkZXIoKVwiPlRvZ2dsZSBMb2FkZXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTWVzc2FnZSgpXCI+VG9nZ2xlIE1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS1TYW1wbGUgUGFnZSBTZWN0aW9uIDItLT5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZXNlY3Rpb25cIj5cblxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5idXR0b24tY29udGFpbmVyIC5sZWZ0LCAuYnV0dG9uLWNvbnRhaW5lciAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJ1dHRvbi1jb250YWluZXIgLmxlZnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uYnV0dG9uLWNvbnRhaW5lciAubGVmdCBpLCAuYnV0dG9uLWNvbnRhaW5lciAubGVmdCBoZWFkZXIsIC5idXR0b24tY29udGFpbmVyIC5sZWZ0IGJ1dHRvbiwgLmJ1dHRvbi1jb250YWluZXIgLmxlZnQgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmJ1dHRvbi1jb250YWluZXIgLnJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5idXR0b24tY29udGFpbmVyIC5yaWdodCBpLCAuYnV0dG9uLWNvbnRhaW5lciAucmlnaHQgaGVhZGVyLCAuYnV0dG9uLWNvbnRhaW5lciAucmlnaHQgYnV0dG9uLCAuYnV0dG9uLWNvbnRhaW5lciAucmlnaHQgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8qIFNhbXBsZSBDb2RlIGZvciBCdXR0b24gQ29udGFpbmVyICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG48ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1vZGFsKClcIj5TaG93IE1vZGFsPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZUxvYWRlcigpXCI+VG9nZ2xlIExvYWRlcjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVNZXNzYWdlKClcIj5Ub2dnbGUgTWVzc2FnZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnRhYmxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzIxMjUyOTtcbn1cbi50YWJsZSAuY29sdW1uIHtcbiAgd2lkdGg6IDE4JTtcbiAgcGFkZGluZzogMSU7XG59XG4udGFibGUgLmNvbHVtbi1zIHtcbiAgd2lkdGg6IDMlO1xuICBwYWRkaW5nOiAxJTtcbn1cbi50YWJsZSAuY29sdW1uLW0ge1xuICB3aWR0aDogOCU7XG4gIHBhZGRpbmc6IDElO1xufVxuLnRhYmxlIC5jb2x1bW4tbCB7XG4gIHdpZHRoOiAxMyU7XG4gIHBhZGRpbmc6IDElO1xufVxuLnRhYmxlIC5jb2x1bW4teGwge1xuICB3aWR0aDogMTglO1xuICBwYWRkaW5nOiAxJTtcbn1cbi50YWJsZSAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMzBweDtcbn1cbi50YWJsZSAudGFibGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi50YWJsZSAudGFibGUtZGF0YSB7XG4gIG1heC1oZWlnaHQ6IDM2MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnRhYmxlIC50YWJsZS1kYXRhIC5yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QwZGVlNjtcbn1cblxuLyogU2FtcGxlIENvZGUgZm9yIFRhYmxlICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG48ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IHRhYmxlLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAjXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICBOYW1lXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1kYXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdGb3I9XCJsZXQgaSBvZiBbMSwyLDNdO2xldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAge3tpbmRleCArIDF9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAge3snTmFtZScgKyBpbmRleH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBCdXR0b25zICovXG5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMzRweDtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIFwic2Fucy1zZXJpZlwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjllMDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWUwMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogI2ZmOWUwMDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoR3JhZGllbnRUeXBlPTAsIHN0YXJ0Q29sb3JzdHI9IzQ5ODQ5MywgZW5kQ29sb3JzdHI9IzQ4Nzc4QSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbiBpIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbmJ1dHRvbiBzcGFuIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uLm91dGxpbmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICNmZjllMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjllMDA7XG59XG5cbmJ1dHRvbi5ub291dGxpbmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogU2Nyb2xsIEJhcnMgKi9cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBJbnB1dHMgKi9cbi5pZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaWcgLmlnLWl0ZW0ge1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgY3Vyc29yOiB0ZXh0O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmlnIC5pZy1pdGVtIC5pZy1pdGVtLWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzUzNTY1QTtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHdoaXRlO1xufVxuLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCA+IGhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM1MzU2NUE7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBtaW4taGVpZ2h0OiAzOHB4O1xufVxuLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCA+IGkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0NGRERFNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDRkRERTY7XG4gIGhlaWdodDogMzdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0IGlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NGRERFNjtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBtYXJnaW4tbGVmdDogLTRweDtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OEE0QUU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQgdGV4dGFyZWEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NGRERFNjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0IC5kcm9wZG93biwgLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCAuZGVmYXVsdCwgLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCAubWF0ZXJpYWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0ZEREU2O1xuICBtYXJnaW4tbGVmdDogLTRweDtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQgLmRyb3Bkb3duIC5kcm9wZG93bi1idXR0b24sIC5pZyAuaWctaXRlbSAuaWctaW5wdXQgLmRlZmF1bHQgLmRyb3Bkb3duLWJ1dHRvbiwgLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCAubWF0ZXJpYWwgLmRyb3Bkb3duLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQtcmVxdWlyZWQge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNFRDhCMDA7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0LXJlcXVpcmVkIGlucHV0LCAuaWcgLmlnLWl0ZW0gLmlnLWlucHV0LXJlcXVpcmVkIHRleHRhcmVhIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0LXJlcXVpcmVkIC5uZy1zZWxlY3QuY3VzdG9tIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQtbGFyZ2Uge1xuICBoZWlnaHQ6IDEyMnB4O1xufVxuXG4uaWctMiAuaWctaXRlbSB7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDE1cHgpO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pZy0zIC5pZy1pdGVtIHtcbiAgd2lkdGg6IGNhbGMoMzMlIC0gMTVweCk7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLyogR2xvYmFsICovXG5odG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBcInNhbnMtc2VyaWZcIjtcbn1cblxuLmRyb3Bkb3duIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMzdweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWJ1dHRvbiAucGxhY2Vob2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWJ1dHRvbiAucGxhY2Vob2xkZXIgaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6ICM5OEE0QUU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWluLWhlaWdodDogYXV0bztcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tYnV0dG9uIC5kZWxldGVjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1idXR0b24gLnNpbmdsZXNlbGVjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1idXR0b24gLm11bHRpc2VsZWN0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWJ1dHRvbiAubXVsdGlzZWxlY3QtY29udGFpbmVyIC5wbGFjZWhvbGRlciB7XG4gIHdpZHRoOiB1bnNldDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWJ1dHRvbiAubXVsdGlzZWxlY3QtY29udGFpbmVyIC5wbGFjZWhvbGRlciBpbWcge1xuICBtYXJnaW46IDA7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWJ1dHRvbiAubXVsdGlzZWxlY3QtY29udGFpbmVyIC5tdWx0aXNlbGVjdC1pdGVtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1idXR0b24gLm11bHRpc2VsZWN0LWNvbnRhaW5lciAubXVsdGlzZWxlY3QtaXRlbS1jb250YWluZXIgLm11bHRpc2VsZWN0LWl0ZW0ge1xuICBmbG9hdDogbGVmdDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tYnV0dG9uIC5tdWx0aXNlbGVjdC1jb250YWluZXIgLm11bHRpc2VsZWN0LWl0ZW0tY29udGFpbmVyIC5tdWx0aXNlbGVjdC1pdGVtIGhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCA2cHg7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWJ1dHRvbiAubXVsdGlzZWxlY3QtY29udGFpbmVyIC5tdWx0aXNlbGVjdC1pdGVtLWNvbnRhaW5lciAubXVsdGlzZWxlY3QtaXRlbSBoZWFkZXIgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1idXR0b24gLm11bHRpc2VsZWN0LWNvbnRhaW5lciAuc3ByZWFkIHtcbiAgd2lkdGg6IDMwcHg7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHotaW5kZXg6IDE7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWNvbnRlbnQgLmRyb3Bkb3duLWl0ZW1zIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IC5kcm9wZG93bi1pdGVtcyAuZHJvcGRvd24tc2VhcmNoLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IC5kcm9wZG93bi1pdGVtcyAuZHJvcGRvd24tc2VhcmNoLWJveCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IC5kcm9wZG93bi1pdGVtcyAuZHJvcGRvd24tc2VhcmNoLWJveCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWNvbnRlbnQgLmRyb3Bkb3duLWl0ZW1zIC5jdXN0b21JdGVtcyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWNvbnRlbnQgLmRyb3Bkb3duLWl0ZW1zIC5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IC5kcm9wZG93bi1uby1pdGVtLWVycm9yIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGVmYXVsdCAubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kZWZhdWx0IDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuLmRlZmF1bHQgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzY0NjQ2NDtcbn1cbi5kZWZhdWx0IDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6d2luZG93LWluYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNCk7XG59XG4uZGVmYXVsdCAuZHJvcGRvd24tYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kZWZhdWx0IC5kcm9wZG93bi1idXR0b24gLnBsYWNlaG9sZGVyIHtcbiAgd2lkdGg6IDg1JTtcbn1cbi5kZWZhdWx0IC5kcm9wZG93bi1idXR0b24gLm11bHRpc2VsZWN0LWNvbnRhaW5lciAubXVsdGlzZWxlY3QtaXRlbS1jb250YWluZXIgLm11bHRpc2VsZWN0LWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xuICBtYXJnaW46IDEuNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uZGVmYXVsdCAuZHJvcGRvd24tY29udGVudCB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAxcHggI2M4YzhjODtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbn1cbi5kZWZhdWx0IC5kcm9wZG93bi1jb250ZW50IC5kcm9wZG93bi1pdGVtcyAuZHJvcGRvd24tc2VhcmNoLWJveCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA1cHggMTBweDtcbn1cbi5kZWZhdWx0IC5kcm9wZG93bi1jb250ZW50IC5kcm9wZG93bi1pdGVtcyAuZHJvcGRvd24tc2VhcmNoLWJveCBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M4YzhjODtcbn1cbi5kZWZhdWx0IC5kcm9wZG93bi1jb250ZW50IC5kcm9wZG93bi1pdGVtcyAuY3VzdG9tSXRlbXMge1xuICBtYXJnaW46IDVweCAxMHB4IDVweCAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M4YzhjODtcbn1cbi5kZWZhdWx0IC5kcm9wZG93bi1jb250ZW50IC5kcm9wZG93bi1pdGVtcyAuZHJvcGRvd24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTBweCAxNHB4IDEwcHg7XG59XG4uZGVmYXVsdCAuZHJvcGRvd24tY29udGVudCAuZHJvcGRvd24taXRlbXMgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuLmRlZmF1bHQgLmRyb3Bkb3duLWNvbnRlbnQgLmRyb3Bkb3duLW5vLWl0ZW0tZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2I0YjRiNDtcbn1cbi5kZWZhdWx0IC5kcm9wZG93bi1jb250ZW50IC5kcm9wZG93bi1uby1pdGVtLWVycm9yIGhlYWRlciB7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdGVyaWFsIC5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1hdGVyaWFsIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuLm1hdGVyaWFsIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM2NDY0NjQ7XG59XG4ubWF0ZXJpYWwgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp3aW5kb3ctaW5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC40KTtcbn1cbi5tYXRlcmlhbCAuZHJvcGRvd24tYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzhjOGM4O1xufVxuLm1hdGVyaWFsIC5kcm9wZG93bi1idXR0b24gLnBsYWNlaG9sZGVyIHtcbiAgd2lkdGg6IDg1JTtcbn1cbi5tYXRlcmlhbCAuZHJvcGRvd24tYnV0dG9uIC5tdWx0aXNlbGVjdC1jb250YWluZXIgLm11bHRpc2VsZWN0LWl0ZW0tY29udGFpbmVyIC5tdWx0aXNlbGVjdC1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcbiAgbWFyZ2luOiA1cHggNXB4IDAgMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLm1hdGVyaWFsIC5kcm9wZG93bi1vcGVuIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtibHVlO1xufVxuLm1hdGVyaWFsIC5kcm9wZG93bi1jb250ZW50IHtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDFweCAjYzhjOGM4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXRlcmlhbCAuZHJvcGRvd24tY29udGVudCAuZHJvcGRvd24taXRlbXMgLmRyb3Bkb3duLXNlYXJjaC1ib3gge1xuICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDEwcHg7XG59XG4ubWF0ZXJpYWwgLmRyb3Bkb3duLWNvbnRlbnQgLmRyb3Bkb3duLWl0ZW1zIC5kcm9wZG93bi1zZWFyY2gtYm94IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOGM4Yzg7XG59XG4ubWF0ZXJpYWwgLmRyb3Bkb3duLWNvbnRlbnQgLmRyb3Bkb3duLWl0ZW1zIC5jdXN0b21JdGVtcyB7XG4gIG1hcmdpbjogNXB4IDEwcHggNXB4IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzhjOGM4O1xufVxuLm1hdGVyaWFsIC5kcm9wZG93bi1jb250ZW50IC5kcm9wZG93bi1pdGVtcyAuZHJvcGRvd24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTBweCAxNHB4IDEwcHg7XG59XG4ubWF0ZXJpYWwgLmRyb3Bkb3duLWNvbnRlbnQgLmRyb3Bkb3duLWl0ZW1zIC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cbi5tYXRlcmlhbCAuZHJvcGRvd24tY29udGVudCAuZHJvcGRvd24tbm8taXRlbS1lcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjYjRiNGI0O1xufVxuLm1hdGVyaWFsIC5kcm9wZG93bi1jb250ZW50IC5kcm9wZG93bi1uby1pdGVtLWVycm9yIGhlYWRlciB7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIkc2VjdGlvbi1ib3R0b20tbWFyZ2luOiAyMHB4O1xyXG5cclxuXHJcbmRpdjpmb2N1cywgaGVhZGVyOmZvY3VzLCBidXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5wYWdlY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcGFnZWNvbnRhaW5lci1iYWNrZ3JvdW5kO1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDcwcHggLSA1MHB4KTtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6ICRwYWdlY29udGFpbmVyLXBhZGRpbmc7XHJcblxyXG4gICAgICAgID4gaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkc2VjdGlvbi1ib3R0b20tbWFyZ2luO1xyXG5cclxuICAgICAgICAgICAgLmxlZnQsIC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIFNhbXBsZSBDb2RlIGZvciBQYWdlIENvbnRhaW5lciAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbjxkaXYgY2xhc3M9XCJwYWdlY29udGFpbmVyXCI+XHJcbiAgICA8IS0tQXBwIExvYWRlci0tPlxyXG4gICAgPGFwcC1sb2FkZXIgKm5nSWY9XCJsb2FkZXJfcGFyYW1zLmlzZGlzcGxheWVkXCIgKGNsb3NlKT1cInRvZ2dsZUxvYWRlcigkZXZlbnQpXCI+PC9hcHAtbG9hZGVyPlxyXG5cclxuICAgIDwhLS1BcHAgTWVzc2FnZS0tPlxyXG4gICAgPGFwcC1tZXNzYWdlICpuZ0lmPVwibWVzc2FnZV9wYXJhbXMuaXNkaXNwbGF5ZWRcIiBbaXNfbWVzc2FnZV9kaXNwbGF5ZWRdPVwibWVzc2FnZV9wYXJhbXNcIj48L2FwcC1tZXNzYWdlPlxyXG5cclxuICAgIDwhLS1TYW1wbGUgUGFnZSBTZWN0aW9uIDEtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWdlc2VjdGlvblwiPlxyXG4gICAgICAgIDxoZWFkZXI+QnV0dG9uczwvaGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVNb2RhbCgpXCI+U2hvdyBNb2RhbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTG9hZGVyKClcIj5Ub2dnbGUgTG9hZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1lc3NhZ2UoKVwiPlRvZ2dsZSBNZXNzYWdlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLVNhbXBsZSBQYWdlIFNlY3Rpb24gMi0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2VzZWN0aW9uXCI+XHJcblxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206ICRzZWN0aW9uLWJvdHRvbS1tYXJnaW47XHJcblxyXG5cclxuICAgIC5sZWZ0LCAucmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubGVmdCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICBpLCBoZWFkZXIsIGJ1dHRvbiwgaW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIGksIGhlYWRlciwgYnV0dG9uLCBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBTYW1wbGUgQ29kZSBmb3IgQnV0dG9uIENvbnRhaW5lciAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbjxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGVmdFwiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1vZGFsKClcIj5TaG93IE1vZGFsPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTG9hZGVyKClcIj5Ub2dnbGUgTG9hZGVyPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1lc3NhZ2UoKVwiPlRvZ2dsZSBNZXNzYWdlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4iLCIudGFibGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcblxyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgd2lkdGg6IDE4JTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLXMge1xyXG4gICAgICAgIHdpZHRoOiAzJTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLW0ge1xyXG4gICAgICAgIHdpZHRoOiA4JTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLWwge1xyXG4gICAgICAgIHdpZHRoOiAxMyU7XHJcbiAgICAgICAgcGFkZGluZzogMSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbi14bCB7XHJcbiAgICAgICAgd2lkdGg6IDE4JTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAucm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGFibGUtaGVhZGVyLWJnO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLWRhdGEge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBTYW1wbGUgQ29kZSBmb3IgVGFibGUgKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG48ZGl2IGNsYXNzPVwidGFibGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3cgdGFibGUtaGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAjXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1kYXRhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0Zvcj1cImxldCBpIG9mIFsxLDIsM107bGV0IGluZGV4ID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAge3tpbmRleCArIDF9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAge3snTmFtZScgKyBpbmRleH19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4iLCIvKiBCdXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogJGJ0bi1taW4taGVpZ2h0O1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udCwgJHNlY29uZGFyeS1mb250O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAkYnRuLWZvbnQtY29sb3I7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJ0bi1iZy1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWJnLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJ0bi1iZy1pbWFnZTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KEdyYWRpZW50VHlwZT0wLCBzdGFydENvbG9yc3RyPSM0OTg0OTMsIGVuZENvbG9yc3RyPSM0ODc3OEEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vLyBPdXRsaW5lZFxyXG5idXR0b24ub3V0bGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAkYnRuLWJnLWNvbG9yO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJ0bi1iZy1jb2xvcjtcclxufVxyXG5cclxuYnV0dG9uLm5vb3V0bGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAkYnRuLW5vLW91dGxpbmUtZm9udC1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4iLCIvKiBTY3JvbGwgQmFycyAqL1xyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxuaW5wdXQge1xyXG4gICAgcGFkZGluZzogM3B4IDdweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRpbnB1dC1ib3JkZXI7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBJbnB1dHMgKi9cclxuLmlnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC8vIEFuIEl0ZW0gb2YgSW5wdXQgR3JvdXAgKGNvbnRhaW5zIHNpbmdsZS9tdWx0aXBsZSB0ZXh0Ym94ZXMpXHJcbiAgICAuaWctaXRlbSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzZweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgICAgLmlnLWl0ZW0taGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkaWctaXRlbS1mb250LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlnLWlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgID4gaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGlnLWl0ZW0tZm9udC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiBpIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkaWctaXRlbS1pbnB1dC1ib3JkZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGlnLWl0ZW0taW5wdXQtYm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRpZy1pdGVtLWlucHV0LWJvcmRlcjtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRpZy1pdGVtLXBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkaWctaXRlbS1pbnB1dC1ib3JkZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAuZHJvcGRvd24sIC5kZWZhdWx0LCAubWF0ZXJpYWwge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGlnLWl0ZW0taW5wdXQtYm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWctaW5wdXQtcmVxdWlyZWQge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICRpZy1pbnB1dC1yZXF1aXJlZDtcclxuXHJcbiAgICAgICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uZy1zZWxlY3QuY3VzdG9tIHtcclxuICAgICAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWctaW5wdXQtbGFyZ2Uge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMnB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4uaWctMiB7XHJcbiAgICAuaWctaXRlbSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTVweCk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmlnLTMge1xyXG4gICAgLmlnLWl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDMzJSAtIDE1cHgpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlc1wiO1xyXG5cclxuLy9EaW1lbnNpb25zXHJcbiRtaW4taGVpZ2h0OiAzN3B4O1xyXG4kbWluLXdpZHRoOiAxMDBweDtcclxuJHdpZHRoOiAxMDAlO1xyXG5cclxuLmRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4taGVpZ2h0OiAkbWluLWhlaWdodDtcclxuICAgIG1pbi13aWR0aDogJG1pbi13aWR0aDtcclxuICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICAvL0Ryb3Bkb3duIEJ1dHRvbiBDb250YWluZXJcclxuICAgIC5kcm9wZG93bi1idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgLnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cclxuICAgICAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGlnLWl0ZW0tcGxhY2Vob2xkZXItY29sb3I7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZWxldGVjb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNpbmdsZXNlbGVjdC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAkd2lkdGg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm11bHRpc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICAucGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubXVsdGlzZWxlY3QtaXRlbS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLm11bHRpc2VsZWN0LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zcHJlYWQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vRHJvcGRvd24gQ29udGVudCBDb250YWluZXJcclxuICAgIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgICAgIG1hcmdpbi10b3A6ICRtaW4taGVpZ2h0O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgLmRyb3Bkb3duLWl0ZW1zIHtcclxuICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgLmRyb3Bkb3duLXNlYXJjaC1ib3gge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmN1c3RvbUl0ZW1zIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRyb3Bkb3duLW5vLWl0ZW0tZXJyb3Ige1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uZGVmYXVsdCB7XHJcbiAgICAkYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMCwgMjAwLCAyMDApO1xyXG5cclxuICAgIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTAwLCAxMDAsIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp3aW5kb3ctaW5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQnV0dG9uXHJcbiAgICAuZHJvcGRvd24tYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuICAgICAgICBib3JkZXI6ICRib3JkZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAucGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm11bHRpc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIC5tdWx0aXNlbGVjdC1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAubXVsdGlzZWxlY3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMCwgMjAwLCAyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0NvbnRlbnRcclxuICAgIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggMXB4IHJnYigyMDAsIDIwMCwgMjAwKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuXHJcbiAgICAgICAgLmRyb3Bkb3duLWl0ZW1zIHtcclxuICAgICAgICAgICAgLmRyb3Bkb3duLXNlYXJjaC1ib3gge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDVweCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmN1c3RvbUl0ZW1zIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDEwcHggMTRweCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kcm9wZG93bi1uby1pdGVtLWVycm9yIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcclxuXHJcbiAgICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLm1hdGVyaWFsIHtcclxuICAgICRib3JkZXI6IDFweCBzb2xpZCByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcblxyXG4gICAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxMDAsIDEwMCwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOndpbmRvdy1pbmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9CdXR0b25cclxuICAgIC5kcm9wZG93bi1idXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXI7XHJcblxyXG4gICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubXVsdGlzZWxlY3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLm11bHRpc2VsZWN0LWl0ZW0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIC5tdWx0aXNlbGVjdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggNXB4IDAgMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93bi1vcGVuIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2JsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Db250ZW50XHJcbiAgICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDFweCByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgIC5kcm9wZG93bi1pdGVtcyB7XHJcbiAgICAgICAgICAgIC5kcm9wZG93bi1zZWFyY2gtYm94IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCA1cHggMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmN1c3RvbUl0ZW1zIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDEwcHggMTRweCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kcm9wZG93bi1uby1pdGVtLWVycm9yIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcclxuXHJcbiAgICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/dropdown/dropdown.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown.component.ts ***!
  \******************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownComponent = class DropdownComponent {
    constructor() {
        this.placeholder = 'Select';
        this.isSearchable = true;
        this.isClearable = true;
        this.isMultiSelect = false;
        this.isAddTag = false;
        this.style = {};
        this.theme = 'default';
        this.isDebugMode = true;
        // Outputs
        this.selectedItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Internal UI Variables
        this.customItems = [];
        this.isItemsDisplayed = false;
        this.isErrorOccured = false;
        this.errormessage = '';
    }
    clickedOutside($event) {
        this.isItemsDisplayed = false;
    }
    ngOnChanges() {
        this.isErrorOccured = false;
        if (this.bindValue && !this.bindLabel) {
            this.toggleErrorMessage('Please provide both bind label and bind value');
        }
        else if (!this.bindValue && this.bindLabel) {
            this.toggleErrorMessage('Please provide both bind label and bind value');
        }
        if (this.isMultiSelect === true) {
            if (this.selectedItem.constructor !== Array) {
                this.toggleErrorMessage('`selectedItem` must be an Array if `isMultiSelect` is true');
            }
        }
    }
    stopPropagation() {
        event.stopPropagation();
    }
    toggleItemDisplay() {
        event.stopPropagation();
        this.isItemsDisplayed = !this.isItemsDisplayed;
        if (this.items === undefined) {
            this.toggleErrorMessage('Loading...');
        }
    }
    selectItem(item) {
        if (this.isMultiSelect === false) {
            this.selectedItem = item;
        }
        else {
            if (this.selectedItem === undefined) {
                this.selectedItem = [];
            }
            this.selectedItem.push(item);
        }
        this.selectedItemChange.emit(this.selectedItem);
    }
    clearSelected() {
        event.stopPropagation();
        if (this.isMultiSelect) {
            this.selectedItem = [];
        }
        else {
            this.selectedItem = undefined;
        }
        this.selectedItemChange.emit(this.selectedItem);
    }
    deleteItem(item) {
        event.stopPropagation();
        this.customItems.splice(this.customItems.indexOf(item), 1);
        this.selectedItem.splice(this.selectedItem.indexOf(item), 1);
    }
    addMultiItems() {
        if (this.isAddTag) {
            if (!this.customItems) {
                this.customItems = [];
            }
            if (this.bindLabel) {
                const temp_dict = {};
                temp_dict[this.bindValue] = 0;
                temp_dict[this.bindLabel] = this.searchText;
                this.customItems.push(temp_dict);
            }
            else {
                this.customItems.push(this.searchText);
            }
            this.searchText = '';
        }
    }
    toggleErrorMessage(message) {
        if (message) {
            this.isErrorOccured = true;
            this.errormessage = message;
        }
        else {
            this.isErrorOccured = false;
            this.errormessage = '';
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], DropdownComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownComponent.prototype, "selectedItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownComponent.prototype, "placeholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], DropdownComponent.prototype, "bindLabel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], DropdownComponent.prototype, "bindValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownComponent.prototype, "isSearchable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownComponent.prototype, "isClearable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownComponent.prototype, "isMultiSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownComponent.prototype, "isAddTag", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownComponent.prototype, "style", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownComponent.prototype, "theme", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownComponent.prototype, "isDebugMode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownComponent.prototype, "selectedItemChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], DropdownComponent.prototype, "clickedOutside", null);
DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dropdown',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dropdown/dropdown.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dropdown.component.scss */ "./src/app/shared/components/dropdown/dropdown.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DropdownComponent);



/***/ }),

/***/ "./src/app/shared/components/dropdown/dropdown.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown.module.ts ***!
  \***************************************************************/
/*! exports provided: DropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownModule", function() { return DropdownModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_services_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-services.module */ "./src/app/shared/shared-services.module.ts");
/* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown.component */ "./src/app/shared/components/dropdown/dropdown.component.ts");
/* harmony import */ var _directives_dropdownfilter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/dropdownfilter.pipe */ "./src/app/shared/directives/dropdownfilter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let DropdownModule = class DropdownModule {
};
DropdownModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"], _directives_dropdownfilter_pipe__WEBPACK_IMPORTED_MODULE_5__["TextFilterPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _shared_services_module__WEBPACK_IMPORTED_MODULE_3__["SharedServicesModule"],
        ],
        exports: [_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"], _directives_dropdownfilter_pipe__WEBPACK_IMPORTED_MODULE_5__["TextFilterPipe"]]
    })
], DropdownModule);



/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\n/* ------------  Brand Colors  ---------------- */\n/* -----------  Border Colors  ---------------- */\n/* -----------  Button Colors  ---------------- */\n/* -----------  Font Colors  ------------------- */\n/* -----------  Input Group Colors  ------------ */\n/* -----------  Page Layout Colors  ------------ */\n/* -----------  Table Colors  ------------------ */\n/* -----------  Font Settings  ------------------- */\n/* -----------  Button Settings  ----------------- */\n/* -----------  PC Settings  ----------------- */\nh1, h2, h3, h4, h5, h6, header, section, p, a, b, title, textarea, input {\n  margin: 0;\n  padding: 0;\n  font-family: \"Nunito Sans\", \"sans-serif\";\n}\ndiv:focus, header:focus, button:focus {\n  outline: none;\n}\n.pagecontainer {\n  padding: 25px;\n  background: #F2F2F2;\n  min-height: calc(100vh - 70px - 50px);\n}\n.pagecontainer .container {\n  margin-top: 25px;\n  background: white;\n  padding: 25px;\n}\n.pagecontainer .container > header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.pagecontainer .container > header .left, .pagecontainer .container > header .right {\n  display: flex;\n  align-items: center;\n}\n/* Sample Code for Page Container */\n/* ----------------------------------------------------------\n<div class=\"pagecontainer\">\n    <!--App Loader-->\n    <app-loader *ngIf=\"loader_params.isdisplayed\" (close)=\"toggleLoader($event)\"></app-loader>\n\n    <!--App Message-->\n    <app-message *ngIf=\"message_params.isdisplayed\" [is_message_displayed]=\"message_params\"></app-message>\n\n    <!--Sample Page Section 1-->\n    <div class=\"pagesection\">\n        <header>Buttons</header>\n        <div class=\"button-container\">\n            <div class=\"left\">\n                <button (click)=\"toggleModal()\">Show Modal</button>\n                <button (click)=\"toggleLoader()\">Toggle Loader</button>\n            </div>\n            <div class=\"right\">\n                <button (click)=\"toggleMessage()\">Toggle Message</button>\n            </div>\n        </div>\n    </div>\n\n    <!--Sample Page Section 2-->\n    <div class=\"pagesection\">\n\n    </div>\n</div>\n\n ---------------------------------------------------------- */\n.button-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.button-container .left, .button-container .right {\n  display: flex;\n  align-items: center;\n}\n.button-container .left {\n  justify-content: flex-start;\n}\n.button-container .left i, .button-container .left header, .button-container .left button, .button-container .left img {\n  margin-right: 10px;\n}\n.button-container .right {\n  justify-content: flex-end;\n}\n.button-container .right i, .button-container .right header, .button-container .right button, .button-container .right img {\n  margin-left: 10px;\n}\n/* Sample Code for Button Container */\n/* ----------------------------------------------------------\n<div class=\"button-container\">\n    <div class=\"left\">\n        <button (click)=\"toggleModal()\">Show Modal</button>\n        <button (click)=\"toggleLoader()\">Toggle Loader</button>\n    </div>\n    <div class=\"right\">\n        <button (click)=\"toggleMessage()\">Toggle Message</button>\n    </div>\n</div>\n ---------------------------------------------------------- */\n.table {\n  font-size: 13px;\n  color: #212529;\n}\n.table .column {\n  width: 18%;\n  padding: 1%;\n}\n.table .column-s {\n  width: 3%;\n  padding: 1%;\n}\n.table .column-m {\n  width: 8%;\n  padding: 1%;\n}\n.table .column-l {\n  width: 13%;\n  padding: 1%;\n}\n.table .column-xl {\n  width: 18%;\n  padding: 1%;\n}\n.table .row {\n  display: flex;\n  align-items: center;\n  min-height: 30px;\n}\n.table .table-header {\n  background: #f2f2f2;\n  font-weight: 700;\n}\n.table .table-data {\n  max-height: 360px;\n  overflow-y: auto;\n}\n.table .table-data .row {\n  border-bottom: 1px solid #d0dee6;\n}\n/* Sample Code for Table */\n/* ----------------------------------------------------------\n<div class=\"table\">\n    <div class=\"row table-header\">\n        <div class=\"column\">\n            #\n        </div>\n        <div class=\"column\">\n            Name\n        </div>\n    </div>\n    <div class=\"table-data\">\n        <div class=\"row\" *ngFor=\"let i of [1,2,3];let index = index\">\n            <div class=\"column\">\n                {{index + 1}}\n            </div>\n            <div class=\"column\">\n                {{'Name' + index}}\n            </div>\n        </div>\n    </div>\n</div>\n ---------------------------------------------------------- */\n/* Buttons */\nbutton {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 34px;\n  padding: 8px 15px;\n  font-family: \"Nunito Sans\", \"sans-serif\";\n  font-size: 14px;\n  text-decoration: none;\n  font-weight: 400;\n  color: #FFF;\n  border: 1px solid #ff9e00;\n  border-radius: 3px;\n  transition: 0.3s;\n  background-color: #ff9e00;\n  background-image: #ff9e00;\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#498493, endColorstr=#48778A);\n  cursor: pointer;\n}\nbutton i {\n  margin: 0 5px;\n}\nbutton span {\n  margin: 0 5px;\n}\nbutton:hover {\n  transition: 0.5s;\n}\nbutton:focus {\n  outline: none;\n}\nbutton.outline {\n  background: white;\n  color: #ff9e00;\n  border: 1px solid #ff9e00;\n}\nbutton.nooutline {\n  background: white;\n  color: #000;\n  border: none;\n}\nbutton.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n/* Scroll Bars */\n/* width */\n::-webkit-scrollbar {\n  width: 6px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 4px;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\ninput {\n  padding: 3px 7px;\n  border: 1px solid #000;\n}\ninput:focus {\n  outline: none;\n}\n/* Inputs */\n.ig {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.ig .ig-item {\n  min-height: 36px;\n  padding: 5px 0;\n  cursor: text;\n  margin-bottom: 15px;\n}\n.ig .ig-item .ig-item-header {\n  font-weight: 700;\n  font-size: 13px;\n  margin-bottom: 5px;\n  color: #53565A;\n}\n.ig .ig-item .ig-input {\n  border-left: 4px solid white;\n}\n.ig .ig-item .ig-input > header {\n  font-size: 14px;\n  font-weight: 400;\n  color: #53565A;\n  margin-left: -4px;\n  min-height: 38px;\n}\n.ig .ig-item .ig-input > i {\n  border-top: 1px solid #CFDDE6;\n  border-bottom: 1px solid #CFDDE6;\n  height: 37px;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 5px;\n}\n.ig .ig-item .ig-input input {\n  border: 1px solid #CFDDE6;\n  outline: none;\n  font-size: 14px;\n  padding: 9px 15px;\n  width: calc(100% - 32px);\n  margin-left: -4px;\n}\n.ig .ig-item .ig-input input::-webkit-input-placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input input::-moz-placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input input::-ms-input-placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input input::placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input textarea {\n  font-size: 14px;\n  width: calc(100% - 22px);\n  height: 100px;\n  border: 1px solid #CFDDE6;\n  padding: 10px;\n  margin-left: -4px;\n}\n.ig .ig-item .ig-input .dropdown, .ig .ig-item .ig-input .default, .ig .ig-item .ig-input .material {\n  border: 1px solid #CFDDE6;\n  margin-left: -4px;\n}\n.ig .ig-item .ig-input .dropdown .dropdown-button, .ig .ig-item .ig-input .default .dropdown-button, .ig .ig-item .ig-input .material .dropdown-button {\n  border: none;\n}\n.ig .ig-item .ig-input-required {\n  border-left: 4px solid #ED8B00;\n}\n.ig .ig-item .ig-input-required input, .ig .ig-item .ig-input-required textarea {\n  border-left: 1px solid transparent;\n  margin-left: 0;\n}\n.ig .ig-item .ig-input-required .ng-select.custom .ng-select-container {\n  border-left: 1px solid transparent;\n}\n.ig .ig-item .ig-input-large {\n  height: 122px;\n}\n.ig-2 .ig-item {\n  width: calc(50% - 15px);\n  margin-right: 15px;\n}\n.ig-3 .ig-item {\n  width: calc(33% - 15px);\n  margin-right: 15px;\n}\n/* Global */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  font-family: \"Nunito Sans\", \"sans-serif\";\n}\n.app-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 65px;\n  border-top: 4px solid maroon;\n  border-bottom: 1px solid #CCC;\n  padding: 0 25px;\n}\n.app-header .app-header-left {\n  display: flex;\n  align-items: center;\n}\n.app-header .app-header-left .brand-logo {\n  height: 30px;\n}\n.app-header .app-header-left .brand-logo img {\n  height: 100%;\n}\n.app-header .app-header-right {\n  display: flex;\n  align-items: center;\n}\n.app-header .app-header-separator {\n  margin: 0 15px;\n  width: 1px;\n  background: #e6e6e6;\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxhYzE0MzExXFxQcm9qZWN0c1xcT3BlbiBTb3VyY2VcXEFuZ3VsYXJTdGFydGVyL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc2hlZXRzXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xcdGhlbWUuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xcZm9udHMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xccGFnZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xcdGFibGUuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xcYnV0dG9ucy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxhYzE0MzExXFxQcm9qZWN0c1xcT3BlbiBTb3VyY2VcXEFuZ3VsYXJTdGFydGVyL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc2hlZXRzXFxzY3JvbGwuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xcaW5wdXQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBLGlEQUFBO0FBS0EsaURBQUE7QUFJQSxpREFBQTtBQU9BLGtEQUFBO0FBUUEsa0RBQUE7QUFVQSxrREFBQTtBQUlBLGtEQUFBO0FDdENBLG9EQUFBO0FBS0Esb0RBQUE7QUFJQSxnREFBQTtBQ1RBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQ1lKO0FDWkE7RUFDSSxhQUFBO0FEZUo7QUNYQTtFQUNJLGFBQUE7RUFDQSxtQkp5QnVCO0VJeEJ2QixxQ0FBQTtBRGNKO0FDWkk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUhOZ0I7QUVvQnhCO0FDWlE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFyQlk7QURtQ3hCO0FDWlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QURjaEI7QUNQQSxtQ0FBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZEQUFBO0FBK0JBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFwRW9CO0FENEV4QjtBQ0xJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FET1I7QUNKSTtFQUNJLDJCQUFBO0FETVI7QUNKUTtFQUNJLGtCQUFBO0FETVo7QUNGSTtFQUNJLHlCQUFBO0FESVI7QUNGUTtFQUNJLGlCQUFBO0FESVo7QUNFQSxxQ0FBQTtBQUNBOzs7Ozs7Ozs7OzZEQUFBO0FDL0ZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUYyR0o7QUV6R0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBRjJHUjtBRXhHSTtFQUNJLFNBQUE7RUFDQSxXQUFBO0FGMEdSO0FFdkdJO0VBQ0ksU0FBQTtFQUNBLFdBQUE7QUZ5R1I7QUV0R0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBRndHUjtBRXJHSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FGdUdSO0FFcEdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUZzR1I7QUVuR0k7RUFDSSxtQkxHVTtFS0ZWLGdCQUFBO0FGcUdSO0FFbEdJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBRm9HUjtBRWxHUTtFQUNJLGdDQUFBO0FGb0daO0FFOUZBLDBCQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFBQTtBQ3BEQSxZQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCTENhO0VLQWIsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLHlCTlBXO0VNUVgseUJOTlc7RU1PWCw4R0FBQTtFQUNBLGVBQUE7QUh5S0o7QUd2S0k7RUFDSSxhQUFBO0FIeUtSO0FHdEtJO0VBQ0ksYUFBQTtBSHdLUjtBR3BLQTtFQUNJLGdCQUFBO0FIdUtKO0FHcEtBO0VBQ0ksYUFBQTtBSHVLSjtBR25LQTtFQUNJLGlCQUFBO0VBQ0EsY05oQ1c7RU1pQ1gseUJBQUE7QUhzS0o7QUduS0E7RUFDSSxpQkFBQTtFQUNBLFdObkN3QjtFTW9DeEIsWUFBQTtBSHNLSjtBR25LQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBSHNLSjtBSTVOQSxnQkFBQTtBQUNBLFVBQUE7QUFDQTtFQUNJLFVBQUE7QUorTko7QUk1TkEsVUFBQTtBQUNBO0VBQ0ksbUJBQUE7QUorTko7QUk1TkEsV0FBQTtBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBSitOSjtBSTVOQSxvQkFBQTtBQUNBO0VBQ0ksZ0JBQUE7QUorTko7QUtqUEE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FMb1BKO0FLalBBO0VBQ0ksYUFBQTtBTG9QSjtBS2hQQSxXQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FMbVBKO0FLaFBJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FMa1BSO0FLaFBRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjUkZTO0FHb1ByQjtBSy9PUTtFQUNJLDRCQUFBO0FMaVBaO0FLL09ZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY1JYSztFUVlMLGlCQUFBO0VBQ0EsZ0JBQUE7QUxpUGhCO0FLOU9ZO0VBQ0ksNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FMZ1BoQjtBSzdPWTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUwrT2hCO0FLNU9ZO0VBQ0ksY1JuQ1k7RVFvQ1osZUFBQTtBTDhPaEI7QUtoUFk7RUFDSSxjUm5DWTtFUW9DWixlQUFBO0FMOE9oQjtBS2hQWTtFQUNJLGNSbkNZO0VRb0NaLGVBQUE7QUw4T2hCO0FLaFBZO0VBQ0ksY1JuQ1k7RVFvQ1osZUFBQTtBTDhPaEI7QUszT1k7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUw2T2hCO0FLek9ZO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBTDJPaEI7QUt6T2dCO0VBQ0ksWUFBQTtBTDJPcEI7QUt0T1E7RUFDSSw4QkFBQTtBTHdPWjtBS3RPWTtFQUNJLGtDQUFBO0VBQ0EsY0FBQTtBTHdPaEI7QUtwT2dCO0VBQ0ksa0NBQUE7QUxzT3BCO0FLak9RO0VBQ0ksYUFBQTtBTG1PWjtBS3hOSTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7QUwyTlI7QUtyTkk7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0FMd05SO0FKeFVBLFdBQUE7QUFDQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7QUkyVUo7QU1yVkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBUmdCO0VBU2hCLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FOd1ZKO0FNdFZJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FOd1ZSO0FNdFZRO0VBQ0ksWUFBQTtBTndWWjtBTXRWWTtFQUNJLFlBQUE7QU53VmhCO0FNalZJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FObVZSO0FNL1VJO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QU5pVlIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AaW1wb3J0IFwiYXBwL3NoYXJlZC9zdHlsZXNoZWV0cy9jb2xvcnMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiYXBwL3NoYXJlZC9zdHlsZXNoZWV0cy90aGVtZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJhcHAvc2hhcmVkL3N0eWxlc2hlZXRzL2ZvbnRzLnNjc3NcIjtcclxuXHJcbkBpbXBvcnQgXCJhcHAvc2hhcmVkL3N0eWxlc2hlZXRzL3BhZ2VzLnNjc3NcIjtcclxuQGltcG9ydCBcImFwcC9zaGFyZWQvc3R5bGVzaGVldHMvdGFibGUuc2Nzc1wiO1xyXG5cclxuQGltcG9ydCBcImFwcC9zaGFyZWQvc3R5bGVzaGVldHMvYnV0dG9ucy5zY3NzXCI7XHJcbkBpbXBvcnQgXCJhcHAvc2hhcmVkL3N0eWxlc2hlZXRzL3Njcm9sbC5zY3NzXCI7XHJcbkBpbXBvcnQgXCJhcHAvc2hhcmVkL3N0eWxlc2hlZXRzL2lucHV0LnNjc3NcIjtcclxuXHJcblxyXG4vKiBHbG9iYWwgKi9cclxuaHRtbCwgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQsICRzZWNvbmRhcnktZm9udDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiLyogLS0tLS0tLS0tLS0tICBCcmFuZCBDb2xvcnMgIC0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJGFjX2NscjogIzAyNzhFQztcclxuJHByX2NscjogIzAyNjdDOTtcclxuJHNjX2NscjogI0VERjNGQztcclxuXHJcbi8qIC0tLS0tLS0tLS0tICBCb3JkZXIgQ29sb3JzICAtLS0tLS0tLS0tLS0tLS0tICovXHJcbiRib3JkZXItY29sb3I6IHJnYigyMDgsIDIyMiwgMjMwKTtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgQnV0dG9uIENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4kYnRuLWJnLWNvbG9yOiAjZmY5ZTAwO1xyXG4kYnRuLWZvbnQtY29sb3I6ICNGRkY7XHJcbiRidG4tYmctaW1hZ2U6ICNmZjllMDA7XHJcbiRidG4tbm8tb3V0bGluZS1mb250LWNvbG9yOiAjMDAwO1xyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tICBGb250IENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4kZm9udF9jbHJfcHJpbWFyeTogcmdiKDk0LCA5MCwgOTUpO1xyXG4kZm9udF9jbHJfc2Vjb25kYXJ5OiByZ2JhKDksIDIwLCAzNywgMC41OSk7XHJcbiRmb250X2Nscl90ZXJ0aWFyeTogcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuJHdhcm5pbmdfZm9udF9jbHI6IHJnYigxODUsIDQzLCA1Mik7XHJcbiR0b29sdGlwZm9udDogcmdiKDE4NSwgNDMsIDUyKTtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgSW5wdXQgR3JvdXAgQ29sb3JzICAtLS0tLS0tLS0tLS0gKi9cclxuJGlucHV0LWJvcmRlcjogIzAwMDtcclxuXHJcbi8vSW5wdXQgR3JvdXAgUGFyYW1zXHJcbiRpZy1pdGVtLWZvbnQtY29sb3I6ICM1MzU2NUE7XHJcbiRpZy1pdGVtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOThBNEFFO1xyXG4kaWctaXRlbS1pbnB1dC1ib3JkZXI6ICNDRkRERTY7XHJcbiRpZy1pbnB1dC1yZXF1aXJlZDogI0VEOEIwMDtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgUGFnZSBMYXlvdXQgQ29sb3JzICAtLS0tLS0tLS0tLS0gKi9cclxuJHBhZ2Vjb250YWluZXItYmFja2dyb3VuZDogI0YyRjJGMjtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgVGFibGUgQ29sb3JzICAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJHRhYmxlLWhlYWRlci1iZzogI2YyZjJmMjtcclxuIiwiLyogLS0tLS0tLS0tLS0gIEZvbnQgU2V0dGluZ3MgIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJHByaW1hcnktZm9udDogJ051bml0byBTYW5zJztcclxuJHNlY29uZGFyeS1mb250OiAnc2Fucy1zZXJpZic7XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0gIEJ1dHRvbiBTZXR0aW5ncyAgLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJGJ0bi1taW4taGVpZ2h0OiAzNHB4O1xyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tICBQQyBTZXR0aW5ncyAgLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJHBhZ2Vjb250YWluZXItcGFkZGluZzogMjVweDtcclxuIiwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgaGVhZGVyLCBzZWN0aW9uLCBwLCBhLCBiLCB0aXRsZSwgdGV4dGFyZWEsIGlucHV0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udCwgJHNlY29uZGFyeS1mb250O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8qIC0tLS0tLS0tLS0tLSAgQnJhbmQgQ29sb3JzICAtLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSAgQm9yZGVyIENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gIEJ1dHRvbiBDb2xvcnMgIC0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tICBGb250IENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gIElucHV0IEdyb3VwIENvbG9ycyAgLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSAgUGFnZSBMYXlvdXQgQ29sb3JzICAtLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tICBUYWJsZSBDb2xvcnMgIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gIEZvbnQgU2V0dGluZ3MgIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tICBCdXR0b24gU2V0dGluZ3MgIC0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSAgUEMgU2V0dGluZ3MgIC0tLS0tLS0tLS0tLS0tLS0tICovXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBoZWFkZXIsIHNlY3Rpb24sIHAsIGEsIGIsIHRpdGxlLCB0ZXh0YXJlYSwgaW5wdXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIFwic2Fucy1zZXJpZlwiO1xufVxuXG5kaXY6Zm9jdXMsIGhlYWRlcjpmb2N1cywgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBhZ2Vjb250YWluZXIge1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCAtIDUwcHgpO1xufVxuLnBhZ2Vjb250YWluZXIgLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyNXB4O1xufVxuLnBhZ2Vjb250YWluZXIgLmNvbnRhaW5lciA+IGhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5wYWdlY29udGFpbmVyIC5jb250YWluZXIgPiBoZWFkZXIgLmxlZnQsIC5wYWdlY29udGFpbmVyIC5jb250YWluZXIgPiBoZWFkZXIgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogU2FtcGxlIENvZGUgZm9yIFBhZ2UgQ29udGFpbmVyICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG48ZGl2IGNsYXNzPVwicGFnZWNvbnRhaW5lclwiPlxuICAgIDwhLS1BcHAgTG9hZGVyLS0+XG4gICAgPGFwcC1sb2FkZXIgKm5nSWY9XCJsb2FkZXJfcGFyYW1zLmlzZGlzcGxheWVkXCIgKGNsb3NlKT1cInRvZ2dsZUxvYWRlcigkZXZlbnQpXCI+PC9hcHAtbG9hZGVyPlxuXG4gICAgPCEtLUFwcCBNZXNzYWdlLS0+XG4gICAgPGFwcC1tZXNzYWdlICpuZ0lmPVwibWVzc2FnZV9wYXJhbXMuaXNkaXNwbGF5ZWRcIiBbaXNfbWVzc2FnZV9kaXNwbGF5ZWRdPVwibWVzc2FnZV9wYXJhbXNcIj48L2FwcC1tZXNzYWdlPlxuXG4gICAgPCEtLVNhbXBsZSBQYWdlIFNlY3Rpb24gMS0tPlxuICAgIDxkaXYgY2xhc3M9XCJwYWdlc2VjdGlvblwiPlxuICAgICAgICA8aGVhZGVyPkJ1dHRvbnM8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTW9kYWwoKVwiPlNob3cgTW9kYWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVMb2FkZXIoKVwiPlRvZ2dsZSBMb2FkZXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTWVzc2FnZSgpXCI+VG9nZ2xlIE1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS1TYW1wbGUgUGFnZSBTZWN0aW9uIDItLT5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZXNlY3Rpb25cIj5cblxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5idXR0b24tY29udGFpbmVyIC5sZWZ0LCAuYnV0dG9uLWNvbnRhaW5lciAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJ1dHRvbi1jb250YWluZXIgLmxlZnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uYnV0dG9uLWNvbnRhaW5lciAubGVmdCBpLCAuYnV0dG9uLWNvbnRhaW5lciAubGVmdCBoZWFkZXIsIC5idXR0b24tY29udGFpbmVyIC5sZWZ0IGJ1dHRvbiwgLmJ1dHRvbi1jb250YWluZXIgLmxlZnQgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmJ1dHRvbi1jb250YWluZXIgLnJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5idXR0b24tY29udGFpbmVyIC5yaWdodCBpLCAuYnV0dG9uLWNvbnRhaW5lciAucmlnaHQgaGVhZGVyLCAuYnV0dG9uLWNvbnRhaW5lciAucmlnaHQgYnV0dG9uLCAuYnV0dG9uLWNvbnRhaW5lciAucmlnaHQgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8qIFNhbXBsZSBDb2RlIGZvciBCdXR0b24gQ29udGFpbmVyICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG48ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1vZGFsKClcIj5TaG93IE1vZGFsPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZUxvYWRlcigpXCI+VG9nZ2xlIExvYWRlcjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVNZXNzYWdlKClcIj5Ub2dnbGUgTWVzc2FnZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnRhYmxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzIxMjUyOTtcbn1cbi50YWJsZSAuY29sdW1uIHtcbiAgd2lkdGg6IDE4JTtcbiAgcGFkZGluZzogMSU7XG59XG4udGFibGUgLmNvbHVtbi1zIHtcbiAgd2lkdGg6IDMlO1xuICBwYWRkaW5nOiAxJTtcbn1cbi50YWJsZSAuY29sdW1uLW0ge1xuICB3aWR0aDogOCU7XG4gIHBhZGRpbmc6IDElO1xufVxuLnRhYmxlIC5jb2x1bW4tbCB7XG4gIHdpZHRoOiAxMyU7XG4gIHBhZGRpbmc6IDElO1xufVxuLnRhYmxlIC5jb2x1bW4teGwge1xuICB3aWR0aDogMTglO1xuICBwYWRkaW5nOiAxJTtcbn1cbi50YWJsZSAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMzBweDtcbn1cbi50YWJsZSAudGFibGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi50YWJsZSAudGFibGUtZGF0YSB7XG4gIG1heC1oZWlnaHQ6IDM2MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnRhYmxlIC50YWJsZS1kYXRhIC5yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QwZGVlNjtcbn1cblxuLyogU2FtcGxlIENvZGUgZm9yIFRhYmxlICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG48ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IHRhYmxlLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAjXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICBOYW1lXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1kYXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdGb3I9XCJsZXQgaSBvZiBbMSwyLDNdO2xldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAge3tpbmRleCArIDF9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAge3snTmFtZScgKyBpbmRleH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBCdXR0b25zICovXG5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMzRweDtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIFwic2Fucy1zZXJpZlwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjllMDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWUwMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogI2ZmOWUwMDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoR3JhZGllbnRUeXBlPTAsIHN0YXJ0Q29sb3JzdHI9IzQ5ODQ5MywgZW5kQ29sb3JzdHI9IzQ4Nzc4QSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbiBpIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbmJ1dHRvbiBzcGFuIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uLm91dGxpbmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICNmZjllMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjllMDA7XG59XG5cbmJ1dHRvbi5ub291dGxpbmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogU2Nyb2xsIEJhcnMgKi9cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBJbnB1dHMgKi9cbi5pZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaWcgLmlnLWl0ZW0ge1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgY3Vyc29yOiB0ZXh0O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmlnIC5pZy1pdGVtIC5pZy1pdGVtLWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzUzNTY1QTtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHdoaXRlO1xufVxuLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCA+IGhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM1MzU2NUE7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBtaW4taGVpZ2h0OiAzOHB4O1xufVxuLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCA+IGkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0NGRERFNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDRkRERTY7XG4gIGhlaWdodDogMzdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0IGlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NGRERFNjtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBtYXJnaW4tbGVmdDogLTRweDtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OEE0QUU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQgdGV4dGFyZWEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NGRERFNjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0IC5kcm9wZG93biwgLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCAuZGVmYXVsdCwgLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCAubWF0ZXJpYWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0ZEREU2O1xuICBtYXJnaW4tbGVmdDogLTRweDtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQgLmRyb3Bkb3duIC5kcm9wZG93bi1idXR0b24sIC5pZyAuaWctaXRlbSAuaWctaW5wdXQgLmRlZmF1bHQgLmRyb3Bkb3duLWJ1dHRvbiwgLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCAubWF0ZXJpYWwgLmRyb3Bkb3duLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQtcmVxdWlyZWQge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNFRDhCMDA7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0LXJlcXVpcmVkIGlucHV0LCAuaWcgLmlnLWl0ZW0gLmlnLWlucHV0LXJlcXVpcmVkIHRleHRhcmVhIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0LXJlcXVpcmVkIC5uZy1zZWxlY3QuY3VzdG9tIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQtbGFyZ2Uge1xuICBoZWlnaHQ6IDEyMnB4O1xufVxuXG4uaWctMiAuaWctaXRlbSB7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDE1cHgpO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pZy0zIC5pZy1pdGVtIHtcbiAgd2lkdGg6IGNhbGMoMzMlIC0gMTVweCk7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLyogR2xvYmFsICovXG5odG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBcInNhbnMtc2VyaWZcIjtcbn1cblxuLmFwcC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNjVweDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIG1hcm9vbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cbi5hcHAtaGVhZGVyIC5hcHAtaGVhZGVyLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFwcC1oZWFkZXIgLmFwcC1oZWFkZXItbGVmdCAuYnJhbmQtbG9nbyB7XG4gIGhlaWdodDogMzBweDtcbn1cbi5hcHAtaGVhZGVyIC5hcHAtaGVhZGVyLWxlZnQgLmJyYW5kLWxvZ28gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmFwcC1oZWFkZXIgLmFwcC1oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFwcC1oZWFkZXIgLmFwcC1oZWFkZXItc2VwYXJhdG9yIHtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIGhlaWdodDogMzVweDtcbn0iLCIkc2VjdGlvbi1ib3R0b20tbWFyZ2luOiAyMHB4O1xyXG5cclxuXHJcbmRpdjpmb2N1cywgaGVhZGVyOmZvY3VzLCBidXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5wYWdlY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcGFnZWNvbnRhaW5lci1iYWNrZ3JvdW5kO1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDcwcHggLSA1MHB4KTtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6ICRwYWdlY29udGFpbmVyLXBhZGRpbmc7XHJcblxyXG4gICAgICAgID4gaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkc2VjdGlvbi1ib3R0b20tbWFyZ2luO1xyXG5cclxuICAgICAgICAgICAgLmxlZnQsIC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIFNhbXBsZSBDb2RlIGZvciBQYWdlIENvbnRhaW5lciAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbjxkaXYgY2xhc3M9XCJwYWdlY29udGFpbmVyXCI+XHJcbiAgICA8IS0tQXBwIExvYWRlci0tPlxyXG4gICAgPGFwcC1sb2FkZXIgKm5nSWY9XCJsb2FkZXJfcGFyYW1zLmlzZGlzcGxheWVkXCIgKGNsb3NlKT1cInRvZ2dsZUxvYWRlcigkZXZlbnQpXCI+PC9hcHAtbG9hZGVyPlxyXG5cclxuICAgIDwhLS1BcHAgTWVzc2FnZS0tPlxyXG4gICAgPGFwcC1tZXNzYWdlICpuZ0lmPVwibWVzc2FnZV9wYXJhbXMuaXNkaXNwbGF5ZWRcIiBbaXNfbWVzc2FnZV9kaXNwbGF5ZWRdPVwibWVzc2FnZV9wYXJhbXNcIj48L2FwcC1tZXNzYWdlPlxyXG5cclxuICAgIDwhLS1TYW1wbGUgUGFnZSBTZWN0aW9uIDEtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWdlc2VjdGlvblwiPlxyXG4gICAgICAgIDxoZWFkZXI+QnV0dG9uczwvaGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVNb2RhbCgpXCI+U2hvdyBNb2RhbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTG9hZGVyKClcIj5Ub2dnbGUgTG9hZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1lc3NhZ2UoKVwiPlRvZ2dsZSBNZXNzYWdlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLVNhbXBsZSBQYWdlIFNlY3Rpb24gMi0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2VzZWN0aW9uXCI+XHJcblxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206ICRzZWN0aW9uLWJvdHRvbS1tYXJnaW47XHJcblxyXG5cclxuICAgIC5sZWZ0LCAucmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubGVmdCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICBpLCBoZWFkZXIsIGJ1dHRvbiwgaW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIGksIGhlYWRlciwgYnV0dG9uLCBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBTYW1wbGUgQ29kZSBmb3IgQnV0dG9uIENvbnRhaW5lciAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbjxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGVmdFwiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1vZGFsKClcIj5TaG93IE1vZGFsPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTG9hZGVyKClcIj5Ub2dnbGUgTG9hZGVyPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1lc3NhZ2UoKVwiPlRvZ2dsZSBNZXNzYWdlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4iLCIudGFibGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcblxyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgd2lkdGg6IDE4JTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLXMge1xyXG4gICAgICAgIHdpZHRoOiAzJTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLW0ge1xyXG4gICAgICAgIHdpZHRoOiA4JTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLWwge1xyXG4gICAgICAgIHdpZHRoOiAxMyU7XHJcbiAgICAgICAgcGFkZGluZzogMSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbi14bCB7XHJcbiAgICAgICAgd2lkdGg6IDE4JTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAucm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGFibGUtaGVhZGVyLWJnO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLWRhdGEge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBTYW1wbGUgQ29kZSBmb3IgVGFibGUgKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG48ZGl2IGNsYXNzPVwidGFibGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3cgdGFibGUtaGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAjXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1kYXRhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0Zvcj1cImxldCBpIG9mIFsxLDIsM107bGV0IGluZGV4ID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAge3tpbmRleCArIDF9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAge3snTmFtZScgKyBpbmRleH19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4iLCIvKiBCdXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogJGJ0bi1taW4taGVpZ2h0O1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udCwgJHNlY29uZGFyeS1mb250O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAkYnRuLWZvbnQtY29sb3I7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJ0bi1iZy1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWJnLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJ0bi1iZy1pbWFnZTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KEdyYWRpZW50VHlwZT0wLCBzdGFydENvbG9yc3RyPSM0OTg0OTMsIGVuZENvbG9yc3RyPSM0ODc3OEEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vLyBPdXRsaW5lZFxyXG5idXR0b24ub3V0bGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAkYnRuLWJnLWNvbG9yO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJ0bi1iZy1jb2xvcjtcclxufVxyXG5cclxuYnV0dG9uLm5vb3V0bGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAkYnRuLW5vLW91dGxpbmUtZm9udC1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4iLCIvKiBTY3JvbGwgQmFycyAqL1xyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxuaW5wdXQge1xyXG4gICAgcGFkZGluZzogM3B4IDdweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRpbnB1dC1ib3JkZXI7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBJbnB1dHMgKi9cclxuLmlnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC8vIEFuIEl0ZW0gb2YgSW5wdXQgR3JvdXAgKGNvbnRhaW5zIHNpbmdsZS9tdWx0aXBsZSB0ZXh0Ym94ZXMpXHJcbiAgICAuaWctaXRlbSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzZweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgICAgLmlnLWl0ZW0taGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkaWctaXRlbS1mb250LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlnLWlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgID4gaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGlnLWl0ZW0tZm9udC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiBpIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkaWctaXRlbS1pbnB1dC1ib3JkZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGlnLWl0ZW0taW5wdXQtYm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRpZy1pdGVtLWlucHV0LWJvcmRlcjtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRpZy1pdGVtLXBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkaWctaXRlbS1pbnB1dC1ib3JkZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAuZHJvcGRvd24sIC5kZWZhdWx0LCAubWF0ZXJpYWwge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGlnLWl0ZW0taW5wdXQtYm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWctaW5wdXQtcmVxdWlyZWQge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICRpZy1pbnB1dC1yZXF1aXJlZDtcclxuXHJcbiAgICAgICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uZy1zZWxlY3QuY3VzdG9tIHtcclxuICAgICAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWctaW5wdXQtbGFyZ2Uge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMnB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4uaWctMiB7XHJcbiAgICAuaWctaXRlbSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTVweCk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmlnLTMge1xyXG4gICAgLmlnLWl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDMzJSAtIDE1cHgpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlc1wiO1xyXG5cclxuLy9WYXJpYWJsZXNcclxuJGhlYWRlci1taW4taGVpZ2h0OiA2NXB4O1xyXG4kaGVhZGVyLXRvcGJvcmRlci1oZWlnaHQ6IDRweDtcclxuXHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogJGhlYWRlci1taW4taGVpZ2h0O1xyXG4gICAgYm9yZGVyLXRvcDogJGhlYWRlci10b3Bib3JkZXItaGVpZ2h0IHNvbGlkIG1hcm9vbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG5cclxuICAgIC5hcHAtaGVhZGVyLWxlZnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmJyYW5kLWxvZ28ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1oZWFkZXItcmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1oZWFkZXItc2VwYXJhdG9yIHtcclxuICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_globalstate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/globalstate.service */ "./src/app/shared/services/globalstate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(globalstate, router) {
        this.globalstate = globalstate;
        this.router = router;
        this.user = { name: 'John' };
        _services_globalstate_service__WEBPACK_IMPORTED_MODULE_2__["GlobalStateVariables"]._globalState.subscribe((val) => {
            // Do Something Here
            if (val['user']) {
                this.user = val['user'];
            }
        });
    }
    ngOnInit() {
    }
    logout() {
        this.globalstate.clearGlobalState();
        this.router.navigateByUrl('');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_globalstate_service__WEBPACK_IMPORTED_MODULE_2__["GlobalStateVariables"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_globalstate_service__WEBPACK_IMPORTED_MODULE_2__["GlobalStateVariables"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/components/header/header.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/header/header.module.ts ***!
  \***********************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _shared_services_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-services.module */ "./src/app/shared/shared-services.module.ts");





let HeaderModule = class HeaderModule {
};
HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_services_module__WEBPACK_IMPORTED_MODULE_4__["SharedServicesModule"]
        ],
        exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
    })
], HeaderModule);



/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Modal */\n.loader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n}\n.loader img {\n  width: 33%;\n  max-width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxsb2FkZXJcXGxvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1vZGFsICovXHJcbi5sb2FkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvKiBNb2RhbCAqL1xuLmxvYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5sb2FkZXIgaW1nIHtcbiAgd2lkdGg6IDMzJTtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
    constructor() {
        this.styles = {
            height: '200px',
            position: 'relative'
        };
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoaderComponent.prototype, "styles", void 0);
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.scss */ "./src/app/shared/components/loader/loader.component.scss")).default]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/shared/components/loader/loader.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/loader/loader.module.ts ***!
  \***********************************************************/
/*! exports provided: LoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderModule", function() { return LoaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.component */ "./src/app/shared/components/loader/loader.component.ts");




let LoaderModule = class LoaderModule {
};
LoaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]]
    })
], LoaderModule);



/***/ }),

/***/ "./src/app/shared/components/message/message.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/message/message.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\n/* ------------  Brand Colors  ---------------- */\n/* -----------  Border Colors  ---------------- */\n/* -----------  Button Colors  ---------------- */\n/* -----------  Font Colors  ------------------- */\n/* -----------  Input Group Colors  ------------ */\n/* -----------  Page Layout Colors  ------------ */\n/* -----------  Table Colors  ------------------ */\n/* -----------  Font Settings  ------------------- */\n/* -----------  Button Settings  ----------------- */\n/* -----------  PC Settings  ----------------- */\nh1, h2, h3, h4, h5, h6, header, section, p, a, b, title, textarea, input {\n  margin: 0;\n  padding: 0;\n  font-family: \"Nunito Sans\", \"sans-serif\";\n}\ndiv:focus, header:focus, button:focus {\n  outline: none;\n}\n.pagecontainer {\n  padding: 25px;\n  background: #F2F2F2;\n  min-height: calc(100vh - 70px - 50px);\n}\n.pagecontainer .container {\n  margin-top: 25px;\n  background: white;\n  padding: 25px;\n}\n.pagecontainer .container > header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.pagecontainer .container > header .left, .pagecontainer .container > header .right {\n  display: flex;\n  align-items: center;\n}\n/* Sample Code for Page Container */\n/* ----------------------------------------------------------\n<div class=\"pagecontainer\">\n    <!--App Loader-->\n    <app-loader *ngIf=\"loader_params.isdisplayed\" (close)=\"toggleLoader($event)\"></app-loader>\n\n    <!--App Message-->\n    <app-message *ngIf=\"message_params.isdisplayed\" [is_message_displayed]=\"message_params\"></app-message>\n\n    <!--Sample Page Section 1-->\n    <div class=\"pagesection\">\n        <header>Buttons</header>\n        <div class=\"button-container\">\n            <div class=\"left\">\n                <button (click)=\"toggleModal()\">Show Modal</button>\n                <button (click)=\"toggleLoader()\">Toggle Loader</button>\n            </div>\n            <div class=\"right\">\n                <button (click)=\"toggleMessage()\">Toggle Message</button>\n            </div>\n        </div>\n    </div>\n\n    <!--Sample Page Section 2-->\n    <div class=\"pagesection\">\n\n    </div>\n</div>\n\n ---------------------------------------------------------- */\n.button-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.button-container .left, .button-container .right {\n  display: flex;\n  align-items: center;\n}\n.button-container .left {\n  justify-content: flex-start;\n}\n.button-container .left i, .button-container .left header, .button-container .left button, .button-container .left img {\n  margin-right: 10px;\n}\n.button-container .right {\n  justify-content: flex-end;\n}\n.button-container .right i, .button-container .right header, .button-container .right button, .button-container .right img {\n  margin-left: 10px;\n}\n/* Sample Code for Button Container */\n/* ----------------------------------------------------------\n<div class=\"button-container\">\n    <div class=\"left\">\n        <button (click)=\"toggleModal()\">Show Modal</button>\n        <button (click)=\"toggleLoader()\">Toggle Loader</button>\n    </div>\n    <div class=\"right\">\n        <button (click)=\"toggleMessage()\">Toggle Message</button>\n    </div>\n</div>\n ---------------------------------------------------------- */\n.table {\n  font-size: 13px;\n  color: #212529;\n}\n.table .column {\n  width: 18%;\n  padding: 1%;\n}\n.table .column-s {\n  width: 3%;\n  padding: 1%;\n}\n.table .column-m {\n  width: 8%;\n  padding: 1%;\n}\n.table .column-l {\n  width: 13%;\n  padding: 1%;\n}\n.table .column-xl {\n  width: 18%;\n  padding: 1%;\n}\n.table .row {\n  display: flex;\n  align-items: center;\n  min-height: 30px;\n}\n.table .table-header {\n  background: #f2f2f2;\n  font-weight: 700;\n}\n.table .table-data {\n  max-height: 360px;\n  overflow-y: auto;\n}\n.table .table-data .row {\n  border-bottom: 1px solid #d0dee6;\n}\n/* Sample Code for Table */\n/* ----------------------------------------------------------\n<div class=\"table\">\n    <div class=\"row table-header\">\n        <div class=\"column\">\n            #\n        </div>\n        <div class=\"column\">\n            Name\n        </div>\n    </div>\n    <div class=\"table-data\">\n        <div class=\"row\" *ngFor=\"let i of [1,2,3];let index = index\">\n            <div class=\"column\">\n                {{index + 1}}\n            </div>\n            <div class=\"column\">\n                {{'Name' + index}}\n            </div>\n        </div>\n    </div>\n</div>\n ---------------------------------------------------------- */\n/* Buttons */\nbutton {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 34px;\n  padding: 8px 15px;\n  font-family: \"Nunito Sans\", \"sans-serif\";\n  font-size: 14px;\n  text-decoration: none;\n  font-weight: 400;\n  color: #FFF;\n  border: 1px solid #ff9e00;\n  border-radius: 3px;\n  transition: 0.3s;\n  background-color: #ff9e00;\n  background-image: #ff9e00;\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#498493, endColorstr=#48778A);\n  cursor: pointer;\n}\nbutton i {\n  margin: 0 5px;\n}\nbutton span {\n  margin: 0 5px;\n}\nbutton:hover {\n  transition: 0.5s;\n}\nbutton:focus {\n  outline: none;\n}\nbutton.outline {\n  background: white;\n  color: #ff9e00;\n  border: 1px solid #ff9e00;\n}\nbutton.nooutline {\n  background: white;\n  color: #000;\n  border: none;\n}\nbutton.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n/* Scroll Bars */\n/* width */\n::-webkit-scrollbar {\n  width: 6px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 4px;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\ninput {\n  padding: 3px 7px;\n  border: 1px solid #000;\n}\ninput:focus {\n  outline: none;\n}\n/* Inputs */\n.ig {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.ig .ig-item {\n  min-height: 36px;\n  padding: 5px 0;\n  cursor: text;\n  margin-bottom: 15px;\n}\n.ig .ig-item .ig-item-header {\n  font-weight: 700;\n  font-size: 13px;\n  margin-bottom: 5px;\n  color: #53565A;\n}\n.ig .ig-item .ig-input {\n  border-left: 4px solid white;\n}\n.ig .ig-item .ig-input > header {\n  font-size: 14px;\n  font-weight: 400;\n  color: #53565A;\n  margin-left: -4px;\n  min-height: 38px;\n}\n.ig .ig-item .ig-input > i {\n  border-top: 1px solid #CFDDE6;\n  border-bottom: 1px solid #CFDDE6;\n  height: 37px;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 5px;\n}\n.ig .ig-item .ig-input input {\n  border: 1px solid #CFDDE6;\n  outline: none;\n  font-size: 14px;\n  padding: 9px 15px;\n  width: calc(100% - 32px);\n  margin-left: -4px;\n}\n.ig .ig-item .ig-input input::-webkit-input-placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input input::-moz-placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input input::-ms-input-placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input input::placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input textarea {\n  font-size: 14px;\n  width: calc(100% - 22px);\n  height: 100px;\n  border: 1px solid #CFDDE6;\n  padding: 10px;\n  margin-left: -4px;\n}\n.ig .ig-item .ig-input .dropdown, .ig .ig-item .ig-input .default, .ig .ig-item .ig-input .material {\n  border: 1px solid #CFDDE6;\n  margin-left: -4px;\n}\n.ig .ig-item .ig-input .dropdown .dropdown-button, .ig .ig-item .ig-input .default .dropdown-button, .ig .ig-item .ig-input .material .dropdown-button {\n  border: none;\n}\n.ig .ig-item .ig-input-required {\n  border-left: 4px solid #ED8B00;\n}\n.ig .ig-item .ig-input-required input, .ig .ig-item .ig-input-required textarea {\n  border-left: 1px solid transparent;\n  margin-left: 0;\n}\n.ig .ig-item .ig-input-required .ng-select.custom .ng-select-container {\n  border-left: 1px solid transparent;\n}\n.ig .ig-item .ig-input-large {\n  height: 122px;\n}\n.ig-2 .ig-item {\n  width: calc(50% - 15px);\n  margin-right: 15px;\n}\n.ig-3 .ig-item {\n  width: calc(33% - 15px);\n  margin-right: 15px;\n}\n/* Global */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  font-family: \"Nunito Sans\", \"sans-serif\";\n}\np {\n  width: 100%;\n  background: #ff9e00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVzc2FnZS9DOlxcVXNlcnNcXGFjMTQzMTFcXFByb2plY3RzXFxPcGVuIFNvdXJjZVxcQW5ndWxhclN0YXJ0ZXIvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVzc2FnZS9DOlxcVXNlcnNcXGFjMTQzMTFcXFByb2plY3RzXFxPcGVuIFNvdXJjZVxcQW5ndWxhclN0YXJ0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzaGVldHNcXGNvbG9ycy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZXNzYWdlL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xcdGhlbWUuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVzc2FnZS9DOlxcVXNlcnNcXGFjMTQzMTFcXFByb2plY3RzXFxPcGVuIFNvdXJjZVxcQW5ndWxhclN0YXJ0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzaGVldHNcXGZvbnRzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVzc2FnZS9DOlxcVXNlcnNcXGFjMTQzMTFcXFByb2plY3RzXFxPcGVuIFNvdXJjZVxcQW5ndWxhclN0YXJ0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzaGVldHNcXHBhZ2VzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lc3NhZ2UvQzpcXFVzZXJzXFxhYzE0MzExXFxQcm9qZWN0c1xcT3BlbiBTb3VyY2VcXEFuZ3VsYXJTdGFydGVyL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc2hlZXRzXFx0YWJsZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZXNzYWdlL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xcYnV0dG9ucy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZXNzYWdlL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xcc2Nyb2xsLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lc3NhZ2UvQzpcXFVzZXJzXFxhYzE0MzExXFxQcm9qZWN0c1xcT3BlbiBTb3VyY2VcXEFuZ3VsYXJTdGFydGVyL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc2hlZXRzXFxpbnB1dC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZXNzYWdlL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxtZXNzYWdlXFxtZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQUEsaURBQUE7QUFLQSxpREFBQTtBQUlBLGlEQUFBO0FBT0Esa0RBQUE7QUFRQSxrREFBQTtBQVVBLGtEQUFBO0FBSUEsa0RBQUE7QUN0Q0Esb0RBQUE7QUFLQSxvREFBQTtBQUlBLGdEQUFBO0FDVEE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0FDWUo7QUNaQTtFQUNJLGFBQUE7QURlSjtBQ1hBO0VBQ0ksYUFBQTtFQUNBLG1CSnlCdUI7RUl4QnZCLHFDQUFBO0FEY0o7QUNaSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhSE5nQjtBRW9CeEI7QUNaUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQXJCWTtBRG1DeEI7QUNaWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBRGNoQjtBQ1BBLG1DQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBQUE7QUErQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQXBFb0I7QUQ0RXhCO0FDTEk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QURPUjtBQ0pJO0VBQ0ksMkJBQUE7QURNUjtBQ0pRO0VBQ0ksa0JBQUE7QURNWjtBQ0ZJO0VBQ0kseUJBQUE7QURJUjtBQ0ZRO0VBQ0ksaUJBQUE7QURJWjtBQ0VBLHFDQUFBO0FBQ0E7Ozs7Ozs7Ozs7NkRBQUE7QUMvRkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBRjJHSjtBRXpHSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FGMkdSO0FFeEdJO0VBQ0ksU0FBQTtFQUNBLFdBQUE7QUYwR1I7QUV2R0k7RUFDSSxTQUFBO0VBQ0EsV0FBQTtBRnlHUjtBRXRHSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FGd0dSO0FFckdJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUZ1R1I7QUVwR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRnNHUjtBRW5HSTtFQUNJLG1CTEdVO0VLRlYsZ0JBQUE7QUZxR1I7QUVsR0k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FGb0dSO0FFbEdRO0VBQ0ksZ0NBQUE7QUZvR1o7QUU5RkEsMEJBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZEQUFBO0FDcERBLFlBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JMQ2E7RUtBYixpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EseUJOUFc7RU1RWCx5Qk5OVztFTU9YLDhHQUFBO0VBQ0EsZUFBQTtBSHlLSjtBR3ZLSTtFQUNJLGFBQUE7QUh5S1I7QUd0S0k7RUFDSSxhQUFBO0FId0tSO0FHcEtBO0VBQ0ksZ0JBQUE7QUh1S0o7QUdwS0E7RUFDSSxhQUFBO0FIdUtKO0FHbktBO0VBQ0ksaUJBQUE7RUFDQSxjTmhDVztFTWlDWCx5QkFBQTtBSHNLSjtBR25LQTtFQUNJLGlCQUFBO0VBQ0EsV05uQ3dCO0VNb0N4QixZQUFBO0FIc0tKO0FHbktBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FIc0tKO0FJNU5BLGdCQUFBO0FBQ0EsVUFBQTtBQUNBO0VBQ0ksVUFBQTtBSitOSjtBSTVOQSxVQUFBO0FBQ0E7RUFDSSxtQkFBQTtBSitOSjtBSTVOQSxXQUFBO0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FKK05KO0FJNU5BLG9CQUFBO0FBQ0E7RUFDSSxnQkFBQTtBSitOSjtBS2pQQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUxvUEo7QUtqUEE7RUFDSSxhQUFBO0FMb1BKO0FLaFBBLFdBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUxtUEo7QUtoUEk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUxrUFI7QUtoUFE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNSRlM7QUdvUHJCO0FLL09RO0VBQ0ksNEJBQUE7QUxpUFo7QUsvT1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjUlhLO0VRWUwsaUJBQUE7RUFDQSxnQkFBQTtBTGlQaEI7QUs5T1k7RUFDSSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUxnUGhCO0FLN09ZO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBTCtPaEI7QUs1T1k7RUFDSSxjUm5DWTtFUW9DWixlQUFBO0FMOE9oQjtBS2hQWTtFQUNJLGNSbkNZO0VRb0NaLGVBQUE7QUw4T2hCO0FLaFBZO0VBQ0ksY1JuQ1k7RVFvQ1osZUFBQTtBTDhPaEI7QUtoUFk7RUFDSSxjUm5DWTtFUW9DWixlQUFBO0FMOE9oQjtBSzNPWTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBTDZPaEI7QUt6T1k7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FMMk9oQjtBS3pPZ0I7RUFDSSxZQUFBO0FMMk9wQjtBS3RPUTtFQUNJLDhCQUFBO0FMd09aO0FLdE9ZO0VBQ0ksa0NBQUE7RUFDQSxjQUFBO0FMd09oQjtBS3BPZ0I7RUFDSSxrQ0FBQTtBTHNPcEI7QUtqT1E7RUFDSSxhQUFBO0FMbU9aO0FLeE5JO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtBTDJOUjtBS3JOSTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7QUx3TlI7QUp4VUEsV0FBQTtBQUNBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBSTJVSjtBTTFWQTtFQUNJLFdBQUE7RUFDQSxtQlRNVztBR3VWZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuQGltcG9ydCBcImFwcC9zaGFyZWQvc3R5bGVzaGVldHMvY29sb3JzLnNjc3NcIjtcclxuQGltcG9ydCBcImFwcC9zaGFyZWQvc3R5bGVzaGVldHMvdGhlbWUuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiYXBwL3NoYXJlZC9zdHlsZXNoZWV0cy9mb250cy5zY3NzXCI7XHJcblxyXG5AaW1wb3J0IFwiYXBwL3NoYXJlZC9zdHlsZXNoZWV0cy9wYWdlcy5zY3NzXCI7XHJcbkBpbXBvcnQgXCJhcHAvc2hhcmVkL3N0eWxlc2hlZXRzL3RhYmxlLnNjc3NcIjtcclxuXHJcbkBpbXBvcnQgXCJhcHAvc2hhcmVkL3N0eWxlc2hlZXRzL2J1dHRvbnMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiYXBwL3NoYXJlZC9zdHlsZXNoZWV0cy9zY3JvbGwuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiYXBwL3NoYXJlZC9zdHlsZXNoZWV0cy9pbnB1dC5zY3NzXCI7XHJcblxyXG5cclxuLyogR2xvYmFsICovXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250LCAkc2Vjb25kYXJ5LWZvbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIi8qIC0tLS0tLS0tLS0tLSAgQnJhbmQgQ29sb3JzICAtLS0tLS0tLS0tLS0tLS0tICovXHJcbiRhY19jbHI6ICMwMjc4RUM7XHJcbiRwcl9jbHI6ICMwMjY3Qzk7XHJcbiRzY19jbHI6ICNFREYzRkM7XHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgQm9yZGVyIENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4kYm9yZGVyLWNvbG9yOiByZ2IoMjA4LCAyMjIsIDIzMCk7XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0gIEJ1dHRvbiBDb2xvcnMgIC0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJGJ0bi1iZy1jb2xvcjogI2ZmOWUwMDtcclxuJGJ0bi1mb250LWNvbG9yOiAjRkZGO1xyXG4kYnRuLWJnLWltYWdlOiAjZmY5ZTAwO1xyXG4kYnRuLW5vLW91dGxpbmUtZm9udC1jb2xvcjogIzAwMDtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgRm9udCBDb2xvcnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJGZvbnRfY2xyX3ByaW1hcnk6IHJnYig5NCwgOTAsIDk1KTtcclxuJGZvbnRfY2xyX3NlY29uZGFyeTogcmdiYSg5LCAyMCwgMzcsIDAuNTkpO1xyXG4kZm9udF9jbHJfdGVydGlhcnk6IHJnYmEoMCwgMCwgMCwgMC4xMyk7XHJcbiR3YXJuaW5nX2ZvbnRfY2xyOiByZ2IoMTg1LCA0MywgNTIpO1xyXG4kdG9vbHRpcGZvbnQ6IHJnYigxODUsIDQzLCA1Mik7XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0gIElucHV0IEdyb3VwIENvbG9ycyAgLS0tLS0tLS0tLS0tICovXHJcbiRpbnB1dC1ib3JkZXI6ICMwMDA7XHJcblxyXG4vL0lucHV0IEdyb3VwIFBhcmFtc1xyXG4kaWctaXRlbS1mb250LWNvbG9yOiAjNTM1NjVBO1xyXG4kaWctaXRlbS1wbGFjZWhvbGRlci1jb2xvcjogIzk4QTRBRTtcclxuJGlnLWl0ZW0taW5wdXQtYm9yZGVyOiAjQ0ZEREU2O1xyXG4kaWctaW5wdXQtcmVxdWlyZWQ6ICNFRDhCMDA7XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0gIFBhZ2UgTGF5b3V0IENvbG9ycyAgLS0tLS0tLS0tLS0tICovXHJcbiRwYWdlY29udGFpbmVyLWJhY2tncm91bmQ6ICNGMkYyRjI7XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0gIFRhYmxlIENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiR0YWJsZS1oZWFkZXItYmc6ICNmMmYyZjI7XHJcbiIsIi8qIC0tLS0tLS0tLS0tICBGb250IFNldHRpbmdzICAtLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiRwcmltYXJ5LWZvbnQ6ICdOdW5pdG8gU2Fucyc7XHJcbiRzZWNvbmRhcnktZm9udDogJ3NhbnMtc2VyaWYnO1xyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tICBCdXR0b24gU2V0dGluZ3MgIC0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiRidG4tbWluLWhlaWdodDogMzRweDtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgUEMgU2V0dGluZ3MgIC0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiRwYWdlY29udGFpbmVyLXBhZGRpbmc6IDI1cHg7XHJcbiIsImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGhlYWRlciwgc2VjdGlvbiwgcCwgYSwgYiwgdGl0bGUsIHRleHRhcmVhLCBpbnB1dCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQsICRzZWNvbmRhcnktZm9udDtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKiAtLS0tLS0tLS0tLS0gIEJyYW5kIENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gIEJvcmRlciBDb2xvcnMgIC0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tICBCdXR0b24gQ29sb3JzICAtLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSAgRm9udCBDb2xvcnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tICBJbnB1dCBHcm91cCBDb2xvcnMgIC0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gIFBhZ2UgTGF5b3V0IENvbG9ycyAgLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSAgVGFibGUgQ29sb3JzICAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tICBGb250IFNldHRpbmdzICAtLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSAgQnV0dG9uIFNldHRpbmdzICAtLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gIFBDIFNldHRpbmdzICAtLS0tLS0tLS0tLS0tLS0tLSAqL1xuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgaGVhZGVyLCBzZWN0aW9uLCBwLCBhLCBiLCB0aXRsZSwgdGV4dGFyZWEsIGlucHV0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBcInNhbnMtc2VyaWZcIjtcbn1cblxuZGl2OmZvY3VzLCBoZWFkZXI6Zm9jdXMsIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wYWdlY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDcwcHggLSA1MHB4KTtcbn1cbi5wYWdlY29udGFpbmVyIC5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjVweDtcbn1cbi5wYWdlY29udGFpbmVyIC5jb250YWluZXIgPiBoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucGFnZWNvbnRhaW5lciAuY29udGFpbmVyID4gaGVhZGVyIC5sZWZ0LCAucGFnZWNvbnRhaW5lciAuY29udGFpbmVyID4gaGVhZGVyIC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIFNhbXBsZSBDb2RlIGZvciBQYWdlIENvbnRhaW5lciAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuPGRpdiBjbGFzcz1cInBhZ2Vjb250YWluZXJcIj5cbiAgICA8IS0tQXBwIExvYWRlci0tPlxuICAgIDxhcHAtbG9hZGVyICpuZ0lmPVwibG9hZGVyX3BhcmFtcy5pc2Rpc3BsYXllZFwiIChjbG9zZSk9XCJ0b2dnbGVMb2FkZXIoJGV2ZW50KVwiPjwvYXBwLWxvYWRlcj5cblxuICAgIDwhLS1BcHAgTWVzc2FnZS0tPlxuICAgIDxhcHAtbWVzc2FnZSAqbmdJZj1cIm1lc3NhZ2VfcGFyYW1zLmlzZGlzcGxheWVkXCIgW2lzX21lc3NhZ2VfZGlzcGxheWVkXT1cIm1lc3NhZ2VfcGFyYW1zXCI+PC9hcHAtbWVzc2FnZT5cblxuICAgIDwhLS1TYW1wbGUgUGFnZSBTZWN0aW9uIDEtLT5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZXNlY3Rpb25cIj5cbiAgICAgICAgPGhlYWRlcj5CdXR0b25zPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1vZGFsKClcIj5TaG93IE1vZGFsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTG9hZGVyKClcIj5Ub2dnbGUgTG9hZGVyPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1lc3NhZ2UoKVwiPlRvZ2dsZSBNZXNzYWdlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tU2FtcGxlIFBhZ2UgU2VjdGlvbiAyLS0+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2VzZWN0aW9uXCI+XG5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uYnV0dG9uLWNvbnRhaW5lciAubGVmdCwgLmJ1dHRvbi1jb250YWluZXIgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5idXR0b24tY29udGFpbmVyIC5sZWZ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmJ1dHRvbi1jb250YWluZXIgLmxlZnQgaSwgLmJ1dHRvbi1jb250YWluZXIgLmxlZnQgaGVhZGVyLCAuYnV0dG9uLWNvbnRhaW5lciAubGVmdCBidXR0b24sIC5idXR0b24tY29udGFpbmVyIC5sZWZ0IGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5idXR0b24tY29udGFpbmVyIC5yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uYnV0dG9uLWNvbnRhaW5lciAucmlnaHQgaSwgLmJ1dHRvbi1jb250YWluZXIgLnJpZ2h0IGhlYWRlciwgLmJ1dHRvbi1jb250YWluZXIgLnJpZ2h0IGJ1dHRvbiwgLmJ1dHRvbi1jb250YWluZXIgLnJpZ2h0IGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4vKiBTYW1wbGUgQ29kZSBmb3IgQnV0dG9uIENvbnRhaW5lciAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibGVmdFwiPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVNb2RhbCgpXCI+U2hvdyBNb2RhbDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVMb2FkZXIoKVwiPlRvZ2dsZSBMb2FkZXI8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTWVzc2FnZSgpXCI+VG9nZ2xlIE1lc3NhZ2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi50YWJsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG4udGFibGUgLmNvbHVtbiB7XG4gIHdpZHRoOiAxOCU7XG4gIHBhZGRpbmc6IDElO1xufVxuLnRhYmxlIC5jb2x1bW4tcyB7XG4gIHdpZHRoOiAzJTtcbiAgcGFkZGluZzogMSU7XG59XG4udGFibGUgLmNvbHVtbi1tIHtcbiAgd2lkdGg6IDglO1xuICBwYWRkaW5nOiAxJTtcbn1cbi50YWJsZSAuY29sdW1uLWwge1xuICB3aWR0aDogMTMlO1xuICBwYWRkaW5nOiAxJTtcbn1cbi50YWJsZSAuY29sdW1uLXhsIHtcbiAgd2lkdGg6IDE4JTtcbiAgcGFkZGluZzogMSU7XG59XG4udGFibGUgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG59XG4udGFibGUgLnRhYmxlLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4udGFibGUgLnRhYmxlLWRhdGEge1xuICBtYXgtaGVpZ2h0OiAzNjBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi50YWJsZSAudGFibGUtZGF0YSAucm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGRlZTY7XG59XG5cbi8qIFNhbXBsZSBDb2RlIGZvciBUYWJsZSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuPGRpdiBjbGFzcz1cInRhYmxlXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyB0YWJsZS1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgI1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgTmFtZVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGFibGUtZGF0YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgKm5nRm9yPVwibGV0IGkgb2YgWzEsMiwzXTtsZXQgaW5kZXggPSBpbmRleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIHt7aW5kZXggKyAxfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIHt7J05hbWUnICsgaW5kZXh9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogQnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDM0cHg7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBcInNhbnMtc2VyaWZcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY5ZTAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjllMDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICNmZjllMDA7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KEdyYWRpZW50VHlwZT0wLCBzdGFydENvbG9yc3RyPSM0OTg0OTMsIGVuZENvbG9yc3RyPSM0ODc3OEEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b24gaSB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5idXR0b24gc3BhbiB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbi5vdXRsaW5lIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjZmY5ZTAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY5ZTAwO1xufVxuXG5idXR0b24ubm9vdXRsaW5lIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmJ1dHRvbi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIFNjcm9sbCBCYXJzICovXG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG5pbnB1dCB7XG4gIHBhZGRpbmc6IDNweCA3cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogSW5wdXRzICovXG4uaWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmlnIC5pZy1pdGVtIHtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGN1cnNvcjogdGV4dDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5pZyAuaWctaXRlbSAuaWctaXRlbS1oZWFkZXIge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICM1MzU2NUE7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0IHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB3aGl0ZTtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQgPiBoZWFkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNTM1NjVBO1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgbWluLWhlaWdodDogMzhweDtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQgPiBpIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDRkRERTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0ZEREU2O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCBpbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDRkRERTY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOXB4IDE1cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOThBNEFFO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0IHRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjJweCk7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDRkRERTY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xufVxuLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCAuZHJvcGRvd24sIC5pZyAuaWctaXRlbSAuaWctaW5wdXQgLmRlZmF1bHQsIC5pZyAuaWctaXRlbSAuaWctaW5wdXQgLm1hdGVyaWFsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NGRERFNjtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0IC5kcm9wZG93biAuZHJvcGRvd24tYnV0dG9uLCAuaWcgLmlnLWl0ZW0gLmlnLWlucHV0IC5kZWZhdWx0IC5kcm9wZG93bi1idXR0b24sIC5pZyAuaWctaXRlbSAuaWctaW5wdXQgLm1hdGVyaWFsIC5kcm9wZG93bi1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0LXJlcXVpcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjRUQ4QjAwO1xufVxuLmlnIC5pZy1pdGVtIC5pZy1pbnB1dC1yZXF1aXJlZCBpbnB1dCwgLmlnIC5pZy1pdGVtIC5pZy1pbnB1dC1yZXF1aXJlZCB0ZXh0YXJlYSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmlnIC5pZy1pdGVtIC5pZy1pbnB1dC1yZXF1aXJlZCAubmctc2VsZWN0LmN1c3RvbSAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0LWxhcmdlIHtcbiAgaGVpZ2h0OiAxMjJweDtcbn1cblxuLmlnLTIgLmlnLWl0ZW0ge1xuICB3aWR0aDogY2FsYyg1MCUgLSAxNXB4KTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uaWctMyAuaWctaXRlbSB7XG4gIHdpZHRoOiBjYWxjKDMzJSAtIDE1cHgpO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi8qIEdsb2JhbCAqL1xuaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgXCJzYW5zLXNlcmlmXCI7XG59XG5cbnAge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmOWUwMDtcbn0iLCIkc2VjdGlvbi1ib3R0b20tbWFyZ2luOiAyMHB4O1xyXG5cclxuXHJcbmRpdjpmb2N1cywgaGVhZGVyOmZvY3VzLCBidXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5wYWdlY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcGFnZWNvbnRhaW5lci1iYWNrZ3JvdW5kO1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDcwcHggLSA1MHB4KTtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6ICRwYWdlY29udGFpbmVyLXBhZGRpbmc7XHJcblxyXG4gICAgICAgID4gaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkc2VjdGlvbi1ib3R0b20tbWFyZ2luO1xyXG5cclxuICAgICAgICAgICAgLmxlZnQsIC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIFNhbXBsZSBDb2RlIGZvciBQYWdlIENvbnRhaW5lciAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbjxkaXYgY2xhc3M9XCJwYWdlY29udGFpbmVyXCI+XHJcbiAgICA8IS0tQXBwIExvYWRlci0tPlxyXG4gICAgPGFwcC1sb2FkZXIgKm5nSWY9XCJsb2FkZXJfcGFyYW1zLmlzZGlzcGxheWVkXCIgKGNsb3NlKT1cInRvZ2dsZUxvYWRlcigkZXZlbnQpXCI+PC9hcHAtbG9hZGVyPlxyXG5cclxuICAgIDwhLS1BcHAgTWVzc2FnZS0tPlxyXG4gICAgPGFwcC1tZXNzYWdlICpuZ0lmPVwibWVzc2FnZV9wYXJhbXMuaXNkaXNwbGF5ZWRcIiBbaXNfbWVzc2FnZV9kaXNwbGF5ZWRdPVwibWVzc2FnZV9wYXJhbXNcIj48L2FwcC1tZXNzYWdlPlxyXG5cclxuICAgIDwhLS1TYW1wbGUgUGFnZSBTZWN0aW9uIDEtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWdlc2VjdGlvblwiPlxyXG4gICAgICAgIDxoZWFkZXI+QnV0dG9uczwvaGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVNb2RhbCgpXCI+U2hvdyBNb2RhbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTG9hZGVyKClcIj5Ub2dnbGUgTG9hZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1lc3NhZ2UoKVwiPlRvZ2dsZSBNZXNzYWdlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLVNhbXBsZSBQYWdlIFNlY3Rpb24gMi0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2VzZWN0aW9uXCI+XHJcblxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206ICRzZWN0aW9uLWJvdHRvbS1tYXJnaW47XHJcblxyXG5cclxuICAgIC5sZWZ0LCAucmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubGVmdCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICBpLCBoZWFkZXIsIGJ1dHRvbiwgaW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIGksIGhlYWRlciwgYnV0dG9uLCBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBTYW1wbGUgQ29kZSBmb3IgQnV0dG9uIENvbnRhaW5lciAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbjxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGVmdFwiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1vZGFsKClcIj5TaG93IE1vZGFsPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTG9hZGVyKClcIj5Ub2dnbGUgTG9hZGVyPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1lc3NhZ2UoKVwiPlRvZ2dsZSBNZXNzYWdlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4iLCIudGFibGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcblxyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgd2lkdGg6IDE4JTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLXMge1xyXG4gICAgICAgIHdpZHRoOiAzJTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLW0ge1xyXG4gICAgICAgIHdpZHRoOiA4JTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLWwge1xyXG4gICAgICAgIHdpZHRoOiAxMyU7XHJcbiAgICAgICAgcGFkZGluZzogMSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbi14bCB7XHJcbiAgICAgICAgd2lkdGg6IDE4JTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAucm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGFibGUtaGVhZGVyLWJnO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLWRhdGEge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBTYW1wbGUgQ29kZSBmb3IgVGFibGUgKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG48ZGl2IGNsYXNzPVwidGFibGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3cgdGFibGUtaGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAjXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1kYXRhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0Zvcj1cImxldCBpIG9mIFsxLDIsM107bGV0IGluZGV4ID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAge3tpbmRleCArIDF9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAge3snTmFtZScgKyBpbmRleH19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4iLCIvKiBCdXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogJGJ0bi1taW4taGVpZ2h0O1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udCwgJHNlY29uZGFyeS1mb250O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAkYnRuLWZvbnQtY29sb3I7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJ0bi1iZy1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWJnLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJ0bi1iZy1pbWFnZTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KEdyYWRpZW50VHlwZT0wLCBzdGFydENvbG9yc3RyPSM0OTg0OTMsIGVuZENvbG9yc3RyPSM0ODc3OEEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vLyBPdXRsaW5lZFxyXG5idXR0b24ub3V0bGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAkYnRuLWJnLWNvbG9yO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJ0bi1iZy1jb2xvcjtcclxufVxyXG5cclxuYnV0dG9uLm5vb3V0bGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAkYnRuLW5vLW91dGxpbmUtZm9udC1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4iLCIvKiBTY3JvbGwgQmFycyAqL1xyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxuaW5wdXQge1xyXG4gICAgcGFkZGluZzogM3B4IDdweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRpbnB1dC1ib3JkZXI7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBJbnB1dHMgKi9cclxuLmlnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC8vIEFuIEl0ZW0gb2YgSW5wdXQgR3JvdXAgKGNvbnRhaW5zIHNpbmdsZS9tdWx0aXBsZSB0ZXh0Ym94ZXMpXHJcbiAgICAuaWctaXRlbSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzZweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgICAgLmlnLWl0ZW0taGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkaWctaXRlbS1mb250LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlnLWlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgID4gaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGlnLWl0ZW0tZm9udC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiBpIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkaWctaXRlbS1pbnB1dC1ib3JkZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGlnLWl0ZW0taW5wdXQtYm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRpZy1pdGVtLWlucHV0LWJvcmRlcjtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRpZy1pdGVtLXBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkaWctaXRlbS1pbnB1dC1ib3JkZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAuZHJvcGRvd24sIC5kZWZhdWx0LCAubWF0ZXJpYWwge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGlnLWl0ZW0taW5wdXQtYm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWctaW5wdXQtcmVxdWlyZWQge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICRpZy1pbnB1dC1yZXF1aXJlZDtcclxuXHJcbiAgICAgICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uZy1zZWxlY3QuY3VzdG9tIHtcclxuICAgICAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWctaW5wdXQtbGFyZ2Uge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMnB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4uaWctMiB7XHJcbiAgICAuaWctaXRlbSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTVweCk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmlnLTMge1xyXG4gICAgLmlnLWl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDMzJSAtIDE1cHgpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlc1wiO1xyXG5cclxucCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICRidG4tYmctY29sb3I7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/shared/components/message/message.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/message/message.component.ts ***!
  \****************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageComponent = class MessageComponent {
    constructor() {
        this.is_message_displayed = {
            type: 'message',
            message: '',
            isdisplayed: false
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MessageComponent.prototype, "is_message_displayed", void 0);
MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/message/message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.component.scss */ "./src/app/shared/components/message/message.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MessageComponent);



/***/ }),

/***/ "./src/app/shared/components/message/message.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/message/message.module.ts ***!
  \*************************************************************/
/*! exports provided: MessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.component */ "./src/app/shared/components/message/message.component.ts");




let MessageModule = class MessageModule {
};
MessageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"]]
    })
], MessageModule);



/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Modal */\n.modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 1;\n}\n.modal .modal-body {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  width: 500px;\n  height: 200px;\n  background: white;\n  border-radius: 10px;\n  position: relative;\n}\n.modal .modal-body .modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.modal .modal-body .modal-header i, .modal .modal-body .modal-header img.close-icon {\n  cursor: pointer;\n}\n.modal .modal-body .modal-content {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n}\n.modal .modal-body .modal-footer {\n  display: flex;\n  position: absolute;\n  bottom: 20px;\n}\n.modal .modal-body .modal-footer button {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvQzpcXFVzZXJzXFxhYzE0MzExXFxQcm9qZWN0c1xcT3BlbiBTb3VyY2VcXEFuZ3VsYXJTdGFydGVyL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXG1vZGFsXFxtb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7QUNDSjtBREVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURHUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNEWjtBREdZO0VBQ0ksZUFBQTtBQ0RoQjtBREtRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNIWjtBRE1RO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0paO0FETVk7RUFDSSxrQkFBQTtBQ0poQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTW9kYWwgKi9cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG5cclxuICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblxyXG4gICAgICAgIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICAgICAgICBpLCBpbWcuY2xvc2UtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tb2RhbC1mb290ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiLyogTW9kYWwgKi9cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIHotaW5kZXg6IDE7XG59XG4ubW9kYWwgLm1vZGFsLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubW9kYWwgLm1vZGFsLWJvZHkgLm1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tb2RhbCAubW9kYWwtYm9keSAubW9kYWwtaGVhZGVyIGksIC5tb2RhbCAubW9kYWwtYm9keSAubW9kYWwtaGVhZGVyIGltZy5jbG9zZS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1vZGFsIC5tb2RhbC1ib2R5IC5tb2RhbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tb2RhbCAubW9kYWwtYm9keSAubW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG59XG4ubW9kYWwgLm1vZGFsLWJvZHkgLm1vZGFsLWZvb3RlciBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalComponent = class ModalComponent {
    constructor() {
        this.is_modal_displayed = {
            type: 'confirmation',
            headertext: 'Modal Header',
            content: 'Modal Body',
            affirmtext: 'Proceed',
            canceltext: 'Cancel',
        };
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    closeModal() {
        this.close.emit(false);
    }
    affirm() {
        this.close.emit(true);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalComponent.prototype, "is_modal_displayed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalComponent.prototype, "close", void 0);
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.scss */ "./src/app/shared/components/modal/modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ModalComponent);



/***/ }),

/***/ "./src/app/shared/components/modal/modal.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/modal/modal.module.ts ***!
  \*********************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.component */ "./src/app/shared/components/modal/modal.component.ts");




let ModalModule = class ModalModule {
};
ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]]
    })
], ModalModule);



/***/ }),

/***/ "./src/app/shared/directives/contenteditable.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/contenteditable.directive.ts ***!
  \****************************************************************/
/*! exports provided: ContenteditableModelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenteditableModelDirective", function() { return ContenteditableModelDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ContenteditableModelDirective = class ContenteditableModelDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.appContentEditableModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onBlur() {
        const value = this.elRef.nativeElement.innerText;
        this.lastViewModel = value;
        this.appContentEditableModelChange.emit(value);
    }
    onKeyUp() {
        const value = this.elRef.nativeElement.innerText;
        this.lastViewModel = value;
        this.appContentEditableModelChange.emit(value);
    }
    ngOnChanges() {
        this.lastViewModel = this.appContentEditableModel;
        this.refreshView();
    }
    refreshView() {
        this.elRef.nativeElement.innerText = this.appContentEditableModel;
    }
};
ContenteditableModelDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ContenteditableModelDirective.prototype, "appContentEditableModel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ContenteditableModelDirective.prototype, "appContentEditableModelChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ContenteditableModelDirective.prototype, "onBlur", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup.enter', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ContenteditableModelDirective.prototype, "onKeyUp", null);
ContenteditableModelDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appContentEditableModel]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ContenteditableModelDirective);



/***/ }),

/***/ "./src/app/shared/directives/dropdownfilter.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/dropdownfilter.pipe.ts ***!
  \**********************************************************/
/*! exports provided: TextFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFilterPipe", function() { return TextFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TextFilterPipe = class TextFilterPipe {
    transform(items, filter) {
        const label = filter[1];
        const filterto = filter[0];
        if (!items || !filterto) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        if (label !== undefined) {
            return items.filter(item => item[label].toString().toLowerCase().indexOf(filterto.toString().toLowerCase()) !== -1);
        }
        else {
            return items.filter(item => item.toString().toLowerCase().indexOf(filterto.toString().toLowerCase()) !== -1);
        }
    }
};
TextFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'textFilter',
        pure: false
    })
], TextFilterPipe);



/***/ }),

/***/ "./src/app/shared/models/interfaces/component.interface.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/models/interfaces/component.interface.ts ***!
  \*****************************************************************/
/*! exports provided: ComponentInterfaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentInterfaceService", function() { return ComponentInterfaceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ComponentInterfaceService = class ComponentInterfaceService {
    constructor() {
        // UI Variables
        this.page_params = {
            user: {},
            isinitialised: false
        };
        this.loader_params = {
            isdisplayed: false
        };
        this.modal_params = {
            context: '',
            type: '',
            headertext: '',
            content: '',
            affirmtext: 'Yes',
            canceltext: '',
            isdisplayed: false
        };
        this.message_params = {
            type: 'message',
            message: '',
            isdisplayed: false
        };
    }
    loadMetaData() {
    }
    loadData() {
    }
    transformData() {
    }
    toggleModal(event) {
    }
    toggleLoader(event) {
    }
    toggleMessage(event) {
    }
};
ComponentInterfaceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ComponentInterfaceService);



/***/ }),

/***/ "./src/app/shared/services/utils.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/utils.service.ts ***!
  \**************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




/*
*  This is the file which contains exposable global common functions
*  ready to be used inside the project.
*/
let UtilsService = class UtilsService {
    constructor(http) {
        this.http = http;
    }
    // Internal HTTP Functions --------------------------------------------------------------------- //
    getRequest(url) {
        return this.http.get(url);
    }
    postRequest(url, params) {
        return this.http.post(url, params);
    }
    parseEnv(urlkey, method = 'GET', payload = {}) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverurl === 'assets/json') {
            method = 'GET';
        }
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverurl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apilist[urlkey];
        if (method === 'GET') {
            return this.getRequest(url);
        }
        else {
            return this.postRequest(url, payload);
        }
    }
};
UtilsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], UtilsService);



/***/ }),

/***/ "./src/app/shared/shared-services.module.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/shared-services.module.ts ***!
  \**************************************************/
/*! exports provided: SharedServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedServicesModule", function() { return SharedServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _directives_contenteditable_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/contenteditable.directive */ "./src/app/shared/directives/contenteditable.directive.ts");
/* harmony import */ var _services_globalstate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/globalstate.service */ "./src/app/shared/services/globalstate.service.ts");
/* harmony import */ var _models_interfaces_component_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/interfaces/component.interface */ "./src/app/shared/models/interfaces/component.interface.ts");








let SharedServicesModule = class SharedServicesModule {
};
SharedServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _directives_contenteditable_directive__WEBPACK_IMPORTED_MODULE_5__["ContenteditableModelDirective"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        exports: [
            _directives_contenteditable_directive__WEBPACK_IMPORTED_MODULE_5__["ContenteditableModelDirective"],
        ],
        providers: [_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"], _services_globalstate_service__WEBPACK_IMPORTED_MODULE_6__["GlobalStateVariables"], _models_interfaces_component_interface__WEBPACK_IMPORTED_MODULE_7__["ComponentInterfaceService"]]
    })
], SharedServicesModule);



/***/ })

}]);
//# sourceMappingURL=samplemodule-samplemodule-module-es2015.js.map