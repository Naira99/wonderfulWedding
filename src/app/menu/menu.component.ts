import { QueryList } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { ElementRef, Component, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {




  ngAfterViewInit() {
    window.addEventListener('scroll', function () {
      let nav = document.querySelector('nav');
      if (window.scrollY >= 657) {
        nav.classList.add('fixed_menu');
      } else {
        nav.classList.remove('fixed_menu');
      }
    }, false);
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        })




  }
  ngOnInit(): void {

  }

}




