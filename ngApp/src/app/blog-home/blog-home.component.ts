import { Component, OnInit } from '@angular/core';
import {BlogService} from '../shared/blog.service';
import {Blog} from '../blog';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {Router} from '@angular/router';
@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  public blogs!:Blog[];
  constructor(private _blogService:BlogService, private router :Router) { }

  ngOnInit(){
    this.readBlogs();
  }
  readBlogs(){
    this._blogService.readBlogs().subscribe(
      
      data  => {console.log(data);
        this.blogs = (<any>data).msg;;
      },
      
      err => {console.log(err);}
    )
    }
    newBlog(event:any){
      event.preventDefault();
      this._blogService.setter(new Blog());
      this.router.navigate(['/blog-post']);
    }
    doUpdate(blog:any){
      this._blogService.setter(blog);
      this.router.navigate(['/blog-post'])
    }
    doDelete(blog:any){
      this._blogService.deleteBlog(blog._id).subscribe(
        data => {
          this.blogs.splice(this.blogs.indexOf(blog),1);
        }
      );


    }
  }