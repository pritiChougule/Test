import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CartComponent = class CartComponent {
    constructor() {
        this.booksInCart = [{
                id: "book1",
                title: "Origin",
                author: "Dann Brown",
                price: 180,
                genre: "historical fiction",
                publication: "Doubleday",
                Language: "English",
                Description: "Origin is a 2017 mystery thriller novel by American author Dan Brown and the fifth installment in his Robert Langdon series, following Inferno. The book was released on October 3, 2017 by Doubleday. The book is predominantly set in Spain and features minor sections in Dubai and Budapest.",
                imagePath: "/assets/images/book1.jpg",
                bookPath: "assets/pdf/book1",
                booktrailer: "https://www.youtube.com/watch?v=XPoVknW-sig",
                ISBN: "9781524779122"
            }];
        this.datasource = this.booksInCart;
    }
    ngOnInit() {
    }
};
CartComponent = tslib_1.__decorate([
    Component({
        selector: 'app-cart',
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.css']
    })
], CartComponent);
export { CartComponent };
//# sourceMappingURL=cart.component.js.map