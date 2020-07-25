import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-publish-story',
  templateUrl: './publish-story.component.html',
  styleUrls: ['./publish-story.component.css'],
})
export class PublishStoryComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  appSelect = new FormControl();
  appList: string[] = ['App1', 'App2'];
}
