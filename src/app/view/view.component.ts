import { Component, OnInit } from '@angular/core';
import { CmsService } from '../cms.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private cmsService: CmsService) { }

  ngOnInit(): void {
  }

}
