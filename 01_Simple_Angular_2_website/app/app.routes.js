"use strict";
var home_component_1 = require('./componetnts/pages/home.component');
var about_component_1 = require('./componetnts/pages/about.component');
var routes = [
    {
        path: '', componet: home_component_1.HomeComponent
    },
    {
        path: 'about', component: about_component_1.AboutComponent
    }
];
exports.appRouterProviders = [
    privideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map