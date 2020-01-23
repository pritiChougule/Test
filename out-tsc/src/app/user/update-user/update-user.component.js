import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UpdateUserComponent = class UpdateUserComponent {
    constructor() {
        this.user = { id: "1", firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", password: "johnDoe123" };
    }
    ngOnInit() {
    }
};
UpdateUserComponent = tslib_1.__decorate([
    Component({
        selector: 'app-update-user',
        templateUrl: './update-user.component.html',
        styleUrls: ['./update-user.component.css']
    })
], UpdateUserComponent);
export { UpdateUserComponent };
//# sourceMappingURL=update-user.component.js.map