import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MenuModel} from "../../shared/models/menu.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('headerList', {static: false}) headerList: ElementRef;

  public menuList: MenuModel[] = [
    {
      name: 'Home',
    },
    {
      name: 'About',
    },
    {
      name: 'Contact',
    }
  ];

  public selectedItem: number = null;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  toggleMenu() {
    if (this.headerList.nativeElement.classList.contains('show')) {
      this.renderer.removeClass(this.headerList.nativeElement, 'show');
    } else {
      this.renderer.addClass(this.headerList.nativeElement, 'show');
    }
  }

  select(index) {
    this.selectedItem = index;
  }

}
