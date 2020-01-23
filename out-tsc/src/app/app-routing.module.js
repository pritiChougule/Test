import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index/index.component';
import { StoreComponent } from './store/store.component';
import { LibraryComponent } from './library/library.component';
import { CartComponent } from './cart/cart.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UpdatePasswordComponent } from './user/update-password/update-password.component';
import { UpdateUserDetailsComponent } from './user/update-user-details/update-user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './home/auth.guard';
const routes = [
    { path: "", component: IndexComponent },
    { path: "store", component: StoreComponent },
    { path: "library", component: LibraryComponent, canActivate: [AuthGuard] },
    { path: "cart", component: CartComponent },
    { path: "updateUser", component: UpdateUserComponent, canActivate: [AuthGuard] },
    { path: "updateUserDetails", component: UpdateUserDetailsComponent, canActivate: [AuthGuard] },
    { path: "updatePassword", component: UpdatePasswordComponent, canActivate: [AuthGuard] },
    { path: '**', component: PageNotFoundComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map