import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  idPhoto = '';
  infoPhoto:any;

  constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router) { }

  goBackToGallery(){
    this.router.navigateByUrl('/about');
  }

  ngOnInit(): void {
    console.log('ID :',this.route.snapshot.params.id);
    this.idPhoto = this.route.snapshot.params.id;
    this.http.get("https://picsum.photos/id/"+this.idPhoto+"/info").subscribe(
      (data) =>{
        this.infoPhoto = data;
        console.log('infoPhoto',this.infoPhoto);
      }
    )

}
}
