import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'https://jsonplaceholder.typicode.com/users';


  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  updateUser(updatedUser: User): Observable<any> {
    return this.http.put(`${this.url}/${updatedUser.id}`, updatedUser);
  }

  createUser(createdUser: User): Observable<any> {
    return this.http.post(`${this.url}`, createdUser);
  }
}
