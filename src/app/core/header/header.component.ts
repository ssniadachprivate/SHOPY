import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MenuModel} from "@shared/models/menu.model";
import {ROUTE_NAMES} from "@app/app-routing.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @ViewChild('headerList', {static: false}) headerList: ElementRef;

  public menuList: MenuModel[] = ROUTE_NAMES;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  /**
   * Toggle menu in mobile view
   */
  toggleMenu() {
    if (this.headerList.nativeElement.classList.contains('show')) {
      this.renderer.removeClass(this.headerList.nativeElement, 'show');
    } else {
      this.renderer.addClass(this.headerList.nativeElement, 'show');
    }
  }

}
