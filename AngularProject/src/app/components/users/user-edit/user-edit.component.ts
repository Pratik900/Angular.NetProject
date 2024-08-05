import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/user.module';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  addClientDetails: Users = {
    Id: '',
    FName: '',
    LName: '',
    Contact: 0,
    Working: ''
  };
  
  constructor(private route: ActivatedRoute, private clientsServices: ClientsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const Id = params.get('Id');
        // const Id = "1b85bf80-88c4-4768-aec8-442f5e01fa2e"; // For testing

        if (Id) {
          this.clientsServices.getClient(Id)
            .subscribe({
              next: (response) => {
                this.addClientDetails = response;
                console.log(response);
              }
            });
        }
      }
    });
  }

}
