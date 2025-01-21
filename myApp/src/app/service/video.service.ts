import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoModel } from '../model/Video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  apiUrl : string = "https://projectapi.gerasim.in/api/OnlineLearning/";

  constructor(private http : HttpClient) { 

  }

  getvideos(){
    return this.http.get(this.apiUrl + "GetAllVideos");
  }

  saveVideo(obj : VideoModel){
    return this.http.post(this.apiUrl + "AddNewVideo", obj);
  }

  updateVideo(obj : VideoModel){
    return this.http.put(this.apiUrl + "UpdateVideo", obj);
  }

  deleteVideo(id : number){
    return this.http.delete(this.apiUrl + "DeleteVideo?videoId=" +id);
  }
}
