import { Component, OnInit } from '@angular/core';
import { HotelService} from 'src/app/shared/Hotels/hotels.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
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
