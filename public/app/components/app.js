System.register(['angular2/angular2', 'angular2/router', './nav', './show', './home', 'ng2-translate/ng2-translate', "./params"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, router_1, nav_1, show_1, home_1, ng2_translate_1, params_1;
    var AppComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (nav_1_1) {
                nav_1 = nav_1_1;
            },
            function (show_1_1) {
                show_1 = show_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (params_1_1) {
                params_1 = params_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(translate) {
                    var userLang = navigator.language.split('-')[0]; // use navigator lang if available
                    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
                    translate.setDefault('en');
                    translate.use(userLang);
                    console.log(1, translate);
                }
                AppComponent = __decorate([
                    angular2_1.Injectable(),
                    angular2_1.Component({
                        selector: 'subNode',
                        template: "\n        <navbar></navbar>\n        <!--<a [router-link]=\"['./Dashboard']\">Dashboard</a>-->\n        <!--<a [router-link]=\"['./Characters']\">Characters</a>-->\n        <div id=\"mainView\" class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n\n        <params></params>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, nav_1.NavbarComponent, params_1.ParamsComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/', as: 'Home', component: home_1.HomeComponent },
                        { path: '/show/:id', as: 'Show', component: show_1.ShowComponent }
                    ]), 
                    __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
