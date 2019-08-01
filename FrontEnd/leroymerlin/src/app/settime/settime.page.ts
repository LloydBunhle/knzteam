import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-settime',
  templateUrl: './settime.page.html',
  styleUrls: ['./settime.page.scss'],
})
export class SettimePage implements OnInit {
  
  product : any;
  products: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProducts().subscribe(
      data => this.products = data
    );
    }
}
