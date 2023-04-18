
import { UserService } from '../../shared/user/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  }
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }
  
  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        alert('in');
        localStorage.setItem('token', res.token);
        console.log(res.token);
        this.router.navigateByUrl('/home');
      },
    );
  }
}
