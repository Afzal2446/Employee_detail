import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'Team List', icon: 'person', class: '' },
  { path: '/table-list', title: 'Task Detail', icon: 'content_paste', class: '' },
  { path: '/typography', title: 'Environment', icon: 'library_books', class: '' },
  // { path: '/listEnvironment', title: 'Configuration', icon: 'bubble_chart', class: '' }
  // { path: '/user-profile/employee-data', title: 'EmployeeSignup', icon: 'bubble_chart', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.warn(this.menuItems);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
