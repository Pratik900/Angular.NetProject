import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/user.module';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  addClientRequest: Users = {
    Id: '',
    FName: '',
    LName: '',
    Contact: 0,
    Working: ''
  }
  constructor(private clientservices: ClientsService, private router: Router) { }

  ngOnInit(): void {
  }

  addClient(){
    console.log(this.addClientRequest);
    this.clientservices.addClient(this.addClientRequest)
    .subscribe({
      next: (user) =>{
        console.log(user);
        this.router.navigate([user])
      },
      error:(response)=>{
        console.log(response)
      }
    })
  }

}
