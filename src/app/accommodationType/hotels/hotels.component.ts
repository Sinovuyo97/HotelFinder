import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/shared/Hotels/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: any[]=[];
  filterTerm!: string;

  constructor(private hotelsservice: HotelService) { }

  ngOnInit(){
    this.hotelsservice.getStock()
      .then(res => {
        setInterval(() => { this.hotels = res; }, 100);
        console.log("Navbar",res)
      })
  }

}
