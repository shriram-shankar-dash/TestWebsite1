
import { Component ,ViewChild , ViewContainerRef  } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
// import { ViewChild, ViewContainerRef } from "@angular/core";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @ViewChild('container', {read:ViewContainerRef})
  container!: ViewContainerRef;
opened:boolean=true
fun(){
    this.container.clear()
    this.container.createComponent(DashboardComponent)
}
}
