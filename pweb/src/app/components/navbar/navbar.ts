import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  isScrolled = false;

  navLinks = [
    { label: 'Home',         path: '/',            exact: true  },
    { label: 'Experience',   path: '/experience',  exact: false },
    { label: 'Architecture', path: '/architecture', exact: false },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 24;
  }
}
