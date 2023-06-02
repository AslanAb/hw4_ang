import { Component, OnInit } from "@angular/core";
import { IProduct } from "../../models/product";
import { ProductsService } from "../../services/products.service";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
})
export class ProductPageComponent implements OnInit {
  title = "Online Shop";
  products$: Observable<IProduct[]>;
  loading = false;
  constructor(private ProductsService: ProductsService) {}
  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.ProductsService.getAll().pipe(
      tap(() => (this.loading = false))
    );
    console.log("====================================");
    console.log(this.products$);
    console.log("====================================");
  }
}
