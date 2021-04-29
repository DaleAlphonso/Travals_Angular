import { Component, OnInit } from '@angular/core';
import {BlogService} from '../shared/blog.service';
import {Blog} from '../blog';
import {Router} from '@angular/router';
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  public blog!:Blog;
  constructor(private _blogService:BlogService,private router:Router) { }

  ngOnInit(): void {
    this.blog= this._blogService.getter();
  }
  blogupdate(){
    if(this.blog._id == undefined){
    this._blogService.createBlog(this.blog).subscribe(
      
      data  => {console.log(data);
        this.router.navigate(['/blog-home']);
      },
      
      err => {console.log(err);}
    )
    }
    else{
      this._blogService.updateBlog(this.blog).subscribe(
      
        data  => {console.log(data);
          this.router.navigate(['/blog-home']);
        },
        
        err => {console.log(err);}
      )
    }

  }

}
