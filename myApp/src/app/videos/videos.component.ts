import { Component, inject, OnInit } from '@angular/core';
import { VideoService } from '../service/video.service';
import { VideoModel } from '../model/Video';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-videos',
  imports: [FormsModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {
  
  videoList : VideoModel [] = [];
  videoObj : VideoModel = new VideoModel();
  
  // Dependency Injections using Inject keyword
  videoServ = inject(VideoService);
  
  ngOnInit(): void {
    this.getVideos();
  }
  
  getVideos(){
    this.videoServ.getvideos().subscribe((result : any) => {
      this.videoList = result.data;
    })
  }

  onSaveVideo(){
    this.videoServ.saveVideo(this.videoObj).subscribe((result : any) =>{
      if(result.result){
        alert("Video Saved Successfully....");
        this.getVideos();
      }else{
        alert(result.message);
      }
    })
  }

  onEdit(data : VideoModel){
    this.videoObj = data;
  }

  onUpdateVideo(){
    this.videoServ.updateVideo(this.videoObj).subscribe((result : any) =>{
      if(result.result){
        alert("Video Updated Successfully....");
        this.getVideos();
      }else{
        alert(result.message);
      }
    }) 
  }

  deleteVideo(id : number){
    const isDelete = confirm("Are you sure want to delete?");
    if(isDelete){
      this.videoServ.deleteVideo(id).subscribe((result : any) =>{
        if(result.result){
          alert("Video Deleted Successfully....");
          this.getVideos();
        }else{
          alert(result.message);
        }
      }) 
    }
  }
}
