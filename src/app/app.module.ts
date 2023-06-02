import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { ProductComponent } from "./component/product/product.component";
import { HttpClientModule } from "@angular/common/http";
import { GlobalErrorComponent } from "./component/global-error/global-error.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { NavigationComponent } from "./pages/navigation-page/navigation-page.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    ProductPageComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
