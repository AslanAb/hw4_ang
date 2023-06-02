import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { DetailsComponent } from "./pages/details-page/details-page.component";
const routes: Routes = [
  { path: "", component: ProductPageComponent },
  { path: ":id", component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
