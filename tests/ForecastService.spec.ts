import {} from 'jasmine';
import * as ng from "angular";
import 'angular-mocks';

import { ForecastService } from '../src/services/ForecastService';

describe('ForecastService', () => {

    let service: ForecastService;
	let http: ng.IHttpService;
	let RESPONSE_SUCCESS = {};

    beforeEach(ng.mock.module('ForecastrApp'));

    beforeEach(inject((ForecastService: ForecastService, $http: ng.IHttpService) => {
        service = ForecastService;
        http = $http;
    }));

    it('should exist', () => {
		expect(service).not.toBeNull();
	});
});