import { Component, OnInit } from '@angular/core';
import { TserviceService } from '../tservice.service';

@Component({
  selector: 'app-bach-creation-form',
  templateUrl: './bach-creation-form.component.html',
  styleUrls: ['./bach-creation-form.component.css']
})
export class BachCreationFormComponent implements OnInit {
  

  constructor(private service:TserviceService) { }
  batchdetails(batchdeatils) {
    console.log(batchdeatils);
    this.service.batchdeatils(batchdeatils.value).subscribe(res => {
       console.log('book added successfully');
       alert('Batch Added Successfully...!')
     
       //this.msg='Book Added Successfully';
       batchdeatils.reset();
    }, err => {
       console.log('Batch not added');
    });
 }
  ngOnInit() {
  }

}
