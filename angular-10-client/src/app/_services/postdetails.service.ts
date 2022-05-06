import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostDetails } from '../model/post-details.model';
const PUBLIC_API = 'http://localhost:8080/api/public/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PostdetailsService {
  postdetails:PostDetails[];
  constructor(private http: HttpClient) { }
  getPostDetail() {
    return this.http.get<PostDetails[]>(PUBLIC_API + 'postDetail/all');
  }
}
