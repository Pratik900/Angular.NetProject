import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user.module';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // user: Users[] = [
  //   {
  //     Id:1,
  //     FName : "Suraj",
  //     LName : "Patil",
  //     Contact : 8595458545,
  //     Working : "Yes"

  //   },
  //   {
  //     Id:2,
  //     FName : "Amit",
  //     LName : "Bibave",
  //     Contact : 8595528547,
  //     Working : "No"
  //   },
  //   {
  //     Id:3,
  //     FName : "Lokesh",
  //     LName : "Jhadav",
  //     Contact : 8595489652,
  //     Working : "Yes"
  //   }
  // ];

  user: Users[] = [];
  constructor(private clientsServices: ClientsService) { }

  ngOnInit(): void {
    this.clientsServices.getAllClients()
    .subscribe({
      next: (user) =>{
        console.log(user);
        this.user = user
      },
      error:(response)=>{
        console.log(response)
      }
    })
  }

}
