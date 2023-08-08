import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Data=[
    {language:',csharp',discover:'AndersHejlsberg'},
    {language:'python',discover:'GuidoVanRossum'},
    {language:'c',discover:'DennisRitchie'},
    {language:'java',discover:'JamesGosling'}
  ]

}
