import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    onLogin(form) {
        if (form.invalid) {
            return;
        }
        if (this.authService.login(form.value.email, form.value.password) == false)
            alert("Username or Password is Incorrect Please Try Again!");
        else
            this.router.navigate(['/store']);
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map