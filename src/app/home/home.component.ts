import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService} from '../shared/Hotels/hotels.service';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails: any;
  returnedStock: any;
  allHotels: any[] = [];
  searchTerm = '';
  constructor(private router: Router, private service: HotelService, private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
    );
    this.service.getStock().then(
      res => {
        this.returnedStock = res.result;
        this.allHotels = this.returnedStock;

      },
      err => {
        console.log(err);
      },
    );
    console.log(this.userDetails)
  }
 

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
