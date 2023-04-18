import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/shared/Hotels/hotels.service';

@Component({
  selector: 'app-guest-house',
  templateUrl: './guest-house.component.html',
  styleUrls: ['./guest-house.component.css']
})
export class GuestHouseComponent implements OnInit {
  hotels: any[]=[];

  constructor(private hotelsservice: HotelService) { }

  ngOnInit(): void {
    this.hotelsservice.getStock()
      .then(res => {
        setInterval(() => { this.hotels = res; }, 100);
        console.log("Navbar",this.hotels)
      })
  }

}
