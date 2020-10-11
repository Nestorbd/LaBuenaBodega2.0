import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Wine } from '../models/wine';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8080/api/vinos';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  currentWineId: number;

  constructor(private http: HttpClient) { }

  setCurrentWineId(id: number){
    this.currentWineId = id;
  }
  getCurrentWineId(){
    return this.currentWineId;
  }
  getWineId(id: number): Observable<Wine>{
    return this.http.get<Wine>(apiUrl+"/"+id);
  }

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(apiUrl);
  };

  deleteWine(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/" + id);
  }

  addWine(wine: Wine): Observable<any>{
    let bodyencoded = new URLSearchParams();
    bodyencoded.append("name", wine.name);
    bodyencoded.append("type", wine.type);
    bodyencoded.append("description", wine.description);
    bodyencoded.append("price", wine.price.toString());
    bodyencoded.append("quantity", wine.quantity.toString());
    let body = bodyencoded.toString();

    return this.http.post(apiUrl, body, httpOptions);

  }

   updateWine(wine: Wine): Observable<any>{
    let bodyencoded = new URLSearchParams();
    bodyencoded.append("name", wine.name);
    bodyencoded.append("type", wine.type);
    bodyencoded.append("description", wine.description);
    bodyencoded.append("price", wine.price.toString());
    bodyencoded.append("quantity", wine.quantity.toString());
    let body = bodyencoded.toString();

    return this.http.put(apiUrl + "/" + wine.id, body, httpOptions);
  }

}
