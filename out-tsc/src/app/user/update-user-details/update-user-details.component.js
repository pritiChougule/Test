import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UpdateUserDetailsComponent = class UpdateUserDetailsComponent {
    constructor(flashMessage, authService) {
        this.flashMessage = flashMessage;
        this.authService = authService;
    }
    ngOnInit() {
    }
    onChangeDetails(form) {
        if (form.invalid) {
            return;
        }
        // 1st parameter is a flash message text
        // 2nd parameter is optional. You can pass object with options.
        var status = this.authService.changeDetails(form.value.fname, form.value.lname);
        this.flashMessage.show(status, { cssClass: 'alert', timeout: 2000 });
        form.resetForm();
    }
};
UpdateUserDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-update-user-details',
        templateUrl: './update-user-details.component.html',
        styleUrls: ['./update-user-details.component.css']
    })
], UpdateUserDetailsComponent);
export { UpdateUserDetailsComponent };
//# sourceMappingURL=update-user-details.component.js.map