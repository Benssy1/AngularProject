import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  title = "my first component"
  constructor() { }
  condition=false

  ngOnInit(): void {
  }
  color: string
  colors: string[] = ["red", "blue", "green", "yellow"]
  names: string[] = ["sharon", "reena", "anju", "najma"]
  check() {
    console.log(this.color)
  }
}
