import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Blog} from '../blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blog!:Blog;
  private baseUri : string = "http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }
  createBlog(blog:Blog){
    return this.http.post(this.baseUri+'/api/create',blog,{headers:this.headers});
  }
  readBlogs(){
    return this.http.get(this.baseUri+'/api/read',{headers:this.headers});
  } 
  updateBlog(blog:Blog){
    return this.http.put(this.baseUri+'/api/update',blog,{headers:this.headers});
  }
  deleteBlog(id:string){
    return this.http.delete(this.baseUri+'/api/delete/'+id,{headers:this.headers});

  } 
  setter(blog:Blog){
    this.blog = blog;
  }
  getter(){
    return this.blog;
  }
}
