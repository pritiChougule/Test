import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UpdatePasswordComponent = class UpdatePasswordComponent {
    constructor(flashMessage, authService) {
        this.flashMessage = flashMessage;
        this.authService = authService;
    }
    ngOnInit() {
    }
    onChangePass(form) {
        if (form.invalid) {
            return;
        }
        // 1st parameter is a flash message text
        // 2nd parameter is optional. You can pass object with options.
        var status = this.authService.changePassword(form.value.OldPassword, form.value.newPassword);
        this.flashMessage.show(status, { cssClass: 'alert', timeout: 2000 });
        form.resetForm();
    }
};
UpdatePasswordComponent = tslib_1.__decorate([
    Component({
        selector: 'app-update-password',
        templateUrl: './update-password.component.html',
        styleUrls: ['./update-password.component.css']
    })
], UpdatePasswordComponent);
export { UpdatePasswordComponent };
//# sourceMappingURL=update-password.component.js.map