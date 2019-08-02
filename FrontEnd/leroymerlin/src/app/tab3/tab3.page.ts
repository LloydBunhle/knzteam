import { Component } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  product : any;
  products: Object;

  profileName;
  profileAddress;
  profileId;
  profileBank;
  profileLname: any;
  profileurl:any
  constructor(private data: DataService) { 

    data.getProducts().subscribe(user => {
      console.log(user); this.product=user 
       this.profileName=user['FName'];
       this.profileLname=user["LName"];
       this.profileAddress=user["Address"];
       this.profileId=user["ID"];
       this.profileBank=user["Bank"];
       this.profileurl =user["Url"];
       
    });
    // console.log(this.product);
  }

}
