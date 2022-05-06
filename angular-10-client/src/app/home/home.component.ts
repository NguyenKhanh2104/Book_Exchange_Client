import { Component, OnInit } from '@angular/core';
import { PostDetails } from '../model/post-details.model';
import { PostdetailsService } from '../_services/postdetails.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: string;
  listPost :PostDetails[]=[];
  bookName :any;
  constructor(private postDetailService:PostdetailsService,private userService: UserService) { }

  ngOnInit(): void {
    
    this.postDetailService.getPostDetail().subscribe
    (data=>{
      this.listPost=data;
    })
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

  }
  public searchPost(){
   if (this.bookName== ""){
     this.ngOnInit();
   }else{
     this.listPost = this.listPost.filter(res=>{
       return res.bookName.toLocaleLowerCase().match(this.bookName.toLocaleLowerCase());
     })
   }
  }
}
