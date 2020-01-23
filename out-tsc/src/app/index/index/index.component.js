import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginComponent } from 'src/app/home/login/login.component';
import { RegisterComponent } from 'src/app/home/register/register.component';
const routes = [
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
];
let IndexComponent = class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
};
IndexComponent = tslib_1.__decorate([
    Component({
        selector: 'app-index',
        templateUrl: './index.component.html',
        styleUrls: ['./index.component.css']
    })
], IndexComponent);
export { IndexComponent };
//# sourceMappingURL=index.component.js.map