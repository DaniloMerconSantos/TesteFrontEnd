import * as jQuery from "jquery";
import * as angular from "angular";

import AppConfig from "./app.config";

const myAppModule =  angular.module('myApp',[]);

myAppModule.config('AppConfig', AppConfig);
