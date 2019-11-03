import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getSupplierList(): Observable<any> {
    return this.http.get('../../assets/SupplierContactList.json');
  }

  public getSupplierName(): Observable<any> {
    return this.http.get('../../assets/SupplierNameList.json');
  }
}
