
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HotelService } from '../shared/Hotels/hotels.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public totalItem: number = 0;
  public hotels: any[] = [];


  AccomodationType: string = '';

  constructor(private hotelsservice: HotelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.hotelsservice.getStock()
      .then(res => {
        this.hotels = res.result.accommodation_type_name;
        console.log("Navbar", this.hotels)
      })
  }



}
