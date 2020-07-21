import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish-story',
  templateUrl: './publish-story.component.html',
  styleUrls: ['./publish-story.component.css']
})
export class PublishStoryComponent implements OnInit {
  slides = [{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}];

  constructor() { }

  ngOnInit() {
    
  }

}
