import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../models/user.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Users[]> {
   return this.http.get<Users[]>(this.baseApiUrl + '/api/clients');
  }

  addClient(addClientRequest: Users): Observable<Users> {
    addClientRequest.Id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Users>(this.baseApiUrl + '/api/clients',
      addClientRequest);
  }

  getClient(Id:string): Observable<Users>{
    return this.http.get<Users>(this.baseApiUrl + '/api/clients/' + Id);
  }
}
