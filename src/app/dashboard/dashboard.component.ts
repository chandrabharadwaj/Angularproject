import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent implements OnInit
{


constructor(private userService:UserService){}
user:any[]=[];
ngOnInit(){
   this.userService.getuser().subscribe((data)=>{
    this.user=data;
  });
}
}

