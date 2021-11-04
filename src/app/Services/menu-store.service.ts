import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../Models/Menu';
import { MenuPage } from '../Models/MenuPageModel';
import { MenuStore } from '../Models/MenuStore';

@Injectable({
  providedIn: 'root'
})
export class MenuStoreService {

  constructor(private http: HttpClient) { }

  getStoreByMenuID(menuID : any){
    const url = "http://54.255.129.30:8100/api/v1/admin/menus/"+menuID;

    let token = sessionStorage.getItem('token');
    console.log('token au: ', token);

    return this.http.get<Menu>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }

  getMenuStoreByStoreID(storeID:number){
    const url ='http://54.255.129.30:8100/api/v1/admin/menustores?store_id='+storeID;
    let token = sessionStorage.getItem('token');
    return this.http.get<MenuPage>(url, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    });
  }

  getMenuPagingInStore(page : string) : Observable<MenuPage>{
    let token = sessionStorage.getItem('token');
    return this.http.get<MenuPage>(page, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      })
    });
  }

  addMenuInStore(menuStore:{
    "menu_id":number,
    "store_id": number,
    "session_id": number
  }):Observable<MenuStore>{
    console.log('menu store service', menuStore);

    const url ='http://54.255.129.30:8100/api/v1/admin/menustores';
    let token = sessionStorage.getItem('token');

    return this.http.post<MenuStore>(url,menuStore, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }

  deleteMenuInStore(menuStore:{
      "id": number,
      "menu_id": number,
      "menu_name": string,
      "store_id": number,
      "store_name": string,
      "session_id": number,
      "session_name": string,
      "time_from": number,
      "time_to": number,
      "status": boolean
  }):Observable<MenuStore>{
    const url ='http://54.255.129.30:8100/api/v1/admin/menustores';
    let token = sessionStorage.getItem('token');

    return this.http.put<MenuStore>(url,menuStore, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
  }

  getMenuStoreByID(menuStoreID:number):Observable<MenuStore>{
  const url ='http://54.255.129.30:8100/api/v1/admin/menustores/'+menuStoreID;
  let token = sessionStorage.getItem('token');

  return this.http.get<MenuStore>(url, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
  });
}

  updateMenuInStore(menuStore:{
    "id": number,
    "menu_id": number,
    "store_id": number,
    "store_name": string,
    "session_id": number,
    "status": boolean
}):Observable<MenuStore>{
  const url ='http://54.255.129.30:8100/api/v1/admin/menustores';
  let token = sessionStorage.getItem('token');

  return this.http.put<MenuStore>(url,menuStore, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
  });
}
}
