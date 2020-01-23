import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RegisterComponent = class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
    }
    onRegister(form) {
        if (form.invalid) {
            return;
        }
        if (this.authService.createUser(form.value.fname, form.value.lname, form.value.email, form.value.password) == false)
            form.resetForm();
        else
            return;
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map