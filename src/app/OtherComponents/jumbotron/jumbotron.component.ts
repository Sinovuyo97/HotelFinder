import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/shared/Hotels/hotels.service';
import { UserService } from 'src/app/shared/user/user.service';
import { animate, state, style, transition, trigger } from "@angular/animations";
@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('closed', style({
        height: '100%',
        opacity: 1,
        backgroundColor: '#717774'
      })),
      state('open', style({
        height: '80rem',
        opacity: 0.8,
        backgroundColor: '#717772'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class JumbotronComponent implements OnInit {
  userDetails: any;
  returnedStock: any[] = [];
  isOpen = true;
  filterTerm!: string;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor(private router: Router, private hotelservice: HotelService, private userservice: UserService, ) { }

  ngOnInit() {

    this.toggle();
    this.hotelservice.getHotels().subscribe((hotels: any) => {

      setInterval(() => { this.returnedStock = hotels.data.result }, 10000);
      console.log("Jumbotron ", hotels.data.result)

    });
    this.userservice.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  // addtoCart(product: any) {
  //   this.cartservice.addtoCartCartService(product);
  // }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}

// `https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?order_by=popularity&adults_number=2&units=metric&room_number=1&checkout_date=2022-10-01&filter_by_currency=AED&locale=en-gb&checkin_date=2022-09-30&latitude=${latitude}&longitude=${longitude}&children_number=2&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true`