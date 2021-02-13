import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-your-finance',
  templateUrl: './your-finance.page.html',
  styleUrls: ['./your-finance.page.scss'],
})
export class YourFinancePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
