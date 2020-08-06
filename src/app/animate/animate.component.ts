import { Component, OnInit } from '@angular/core';
import{trigger,style,animate,transition, state}from '@angular/animations'

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],

  animations:[
    trigger("openClose",
    [state("open",style({
           height:'200px',
           opacity:1,
           backgroundColor:"pink"

    })),
    state("close",style({
      height:'100px',
      opacity:0.5,
      backgroundColor:"green"
    })),
    transition("open=>close",[animate('1s')]),
    transition("close=>open",[animate('0.5s')]),
  ])

  ]
})
export class AnimateComponent implements OnInit {

  isOpen=true
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
  this.isOpen=!this.isOpen
}
}
