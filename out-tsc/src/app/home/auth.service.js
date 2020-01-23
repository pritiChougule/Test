import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isLoggedIn = false;
        this.isAuthenticated = false;
    }
    login(email, password) {
        //dummy data before integration with backend
        const authData = { email: email, password: password };
        if (email == "johndoe@gmail.com" && password == "johnDoe1234") {
            this.isLoggedIn = true;
            return true;
        }
        else
            return false;
    }
    createUser(fname, lname, email, password) {
        if (email == "johndoe@gmail.com") {
            alert(email + " is already a Tale Member! Please Login");
            return false;
        }
        else
            alert("User created:" + fname + "  " + lname + "  " + email + "  " + password);
        return true;
    }
    changePassword(oldPassword, newPassword) {
        if (oldPassword == newPassword)
            return "Old Password and New Password Should not be same!!!";
        if (oldPassword == "johnDoe1234")
            return "Password Changed Successfully!";
        else
            return "Old Password does not match!!";
    }
    changeDetails(fname, lname) {
        return "Details Changed Successfully!!";
    }
    logout() {
        this.isLoggedIn = false;
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map