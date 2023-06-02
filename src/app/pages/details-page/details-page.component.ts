import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "src/app/models/product";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-details-page",
  templateUrl: "./details-page.component.html",
})
export class DetailsComponent implements OnInit {
  product: IProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ProductService: ProductsService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.ProductService.getProductById(params["id"]).subscribe(
          (el) => (this.product = el)
        );
      }
    });
  }
}
