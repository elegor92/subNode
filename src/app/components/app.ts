import {Component, Injectable} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NavbarComponent} from './nav';
import {ShowComponent} from './show';
import {HomeComponent} from './home';
import {TranslateService} from 'ng2-translate';
import {ParamsComponent} from "./params";

@Injectable()
@Component({
    selector: 'subNode',
    bindings: [TranslateService],
    template: `
        <navbar></navbar>
        <!--<a [router-link]="['./Dashboard']">Dashboard</a>-->
        <!--<a [router-link]="['./Characters']">Characters</a>-->
        <div id="mainView" class="container">
            <router-outlet></router-outlet>
        </div>

        <params></params>
    `,
    directives: [ROUTER_DIRECTIVES, NavbarComponent, ParamsComponent]
})
@RouteConfig([
    {path: '/', as: 'Home', component: HomeComponent},
    {path: '/show/:id', as: 'Show', component: ShowComponent}
])
export class AppComponent {
    constructor(translate: TranslateService) {
        var userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
        translate.setDefault('en');
        translate.use(userLang);
    }
}
