import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../Models/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuDetailService {

  constructor(private http: HttpClient) { }

  getDishByMenuID(menuID : any):Observable<Menu>{
    const url = "http://54.255.129.30:8100/api/v1/admin/menus/"+menuID;
    let token = sessionStorage.getItem('token');
    return this.http.get<Menu>(url, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    })
  }

  getDishByDishID(dishID : any){
    const url = "http://54.255.129.30:8100/api/v1/admin/dishes/"+dishID;
    let token = sessionStorage.getItem('token');
    return this.http.get<Menu>(url, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    })
  }

  // thêm món ăn vào MenuDetail
  AddDishInMenuDetail(menu : {
    "id": number,
    "name": string,
    "status": boolean,
    "menu_details":[
      {
        // "id": number,
        "dish_id": number,
        "dish_name": string,
        "price": number,
        "status": boolean
      }
    ]
  }):Observable<any>{
    // console.log('big data', menu);

    const url = "http://54.255.129.30:8100/api/v1/admin/menus";
    let token = sessionStorage.getItem('token');
    return this.http.put(url,menu,{
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    })
  }

}