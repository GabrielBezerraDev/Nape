import { Component, OnInit, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public height: number = 100;
  public totalHeight = {
    "height":`${this.height}%`
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.addHeight();
  }

  ngOnInit() {
  }

  public addHeight():void{
    let scrollPage: HTMLDivElement = this.elementRef.nativeElement.querySelector(".scrollPage");
    if(scrollPage.childElementCount > 2){
      for(let i: number = 0; i < scrollPage.childElementCount-2; i++){
        console.log(i);
        this.totalHeight.height = `${this.height = this.height + 105}%`;
      }
    }
  }

}
