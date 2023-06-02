import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { IProduct } from "../models/product";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>("https://fakestoreapi.com/products", {
        params: new HttpParams({
          fromObject: { limit: 20 },
        }),
      })
      .pipe(catchError(this.errorHandler.bind(this)));
  }
  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`https://fakestoreapi.com/products/${id}`);
  }
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
