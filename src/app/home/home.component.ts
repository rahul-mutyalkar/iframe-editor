import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import {DomSanitizationService} from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
websiteURL=null;
validateURL=null;
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }
  setURL()
  {
    // console.log('websiteURL : ',this.websiteURL);
    this.validateURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.websiteURL);
    // return this.domSanitizer.bypassSecurityTrustUrl(this.websiteURL);
    //  const url=this.sanitizer.bypassSecurityTrustResourceUrl(this.websiteURL);
    // console.log('websiteURL url : ',url);
    // return url;
  }

}
