import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit{

  ngOnInit() {
    $.getScript("assets/js/slideshow_home.js");
  }
  ngAfterViewInit(): void {
    
  }
}
