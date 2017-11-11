import { Component, OnInit } from '@angular/core';
import { Question } from '../home/home.question';
import { SharedService } from "../shared.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private lastScroll = 0;
  private isScrollingDown = false;
  private hideNavbar = false;
  private bgNavbar = false;
  private homeControler = false;

  appName = "Testownik";

  constructor(private router: Router) {
    console.log("MyComp.constructor");
    router.events.subscribe((val) => {
      this.navStyle(val["url"]);
    });
  }

  navStyle(url) {
    if (url == '/home' || url =='/')
      this.homeControler = true;
    else
      this.homeControler = false;
  }

  ngOnInit() {
    
  }

  shoulHideNavbar() {
    if (this.lastScroll > 40 && this.isScrollingDown)
      this.hideNavbar = true;
    else
      this.hideNavbar = false;
  }

  onScroll($event) {
    var scroll = window.scrollY;
    this.isScrollingDown = scroll > this.lastScroll ? true : false;
    this.lastScroll = scroll;
    this.shoulHideNavbar();

    scroll > 80 ? this.bgNavbar = true : this.bgNavbar = false;
  }

}
