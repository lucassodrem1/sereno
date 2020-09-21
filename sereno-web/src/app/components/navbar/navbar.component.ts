import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      $(document).scroll(function () {
        let nav = $(".fixed-top");

        if($(this).scrollTop() > nav.height()) {
          nav.fadeOut();
        } else {
          nav.fadeIn();
        }
      });
    });
  }

}
