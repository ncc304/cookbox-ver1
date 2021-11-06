import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Menu } from 'src/app/Models/Menu';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-create-menu-left-page',
  templateUrl: './create-menu-left-page.component.html',
  styleUrls: [
    '../common_asset_page/css/material-dashboard-rtl.css',
    '../common_asset_page/css/material-dashboard.css',
    './create-menu-left-page.component.css',
  ],
})
export class CreateMenuLeftPageComponent implements OnInit {
  constructor(private router: Router, private menuService : MenuService, private modalService: NgbModal) {}

  ngOnInit(): void {

  }

  public menus: {"name":string} = {name: ""};
  createMenu(){
    if(this.menus.name == ''){
      this.modalService.open('Vui lòng nhập tên thực đơn');
    }else{
      this.menuService.createMenu(this.menus).subscribe(res =>{
        this.modalService.open('Thêm mới thực đơn '+this.menus.name+' thành công');
        this.goMenuPage();
      })
    }
  }
  goHomePage() {
    this.router.navigate(['home']);
  }
  goProducpage() {
    this.router.navigate(['product-page']);
  }
  goEmployeePage() {
    this.router.navigate(['employee-page']);
  }
  goUserPage() {
    this.router.navigate(['user-page']);
  }
  goMaterialPage() {
    this.router.navigate(['material-page']);
  }
  goHistoryMaterialPage() {
    this.router.navigate(['history-material-page']);
  }
  goOrderPage() {
    this.router.navigate(['order-left-page']);
  }
  goMenuPage() {
    this.router.navigate(['menu-left-page']);
  }


}
