import { Renderer2 } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { CmsService } from '../cms.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  content = "";

  constructor(private elem: ElementRef, private renderer: Renderer2, private cmsService: CmsService) { }

  ngOnInit(): void {
    let id = this.elem.nativeElement.getAttribute('data-id');
    this.cmsService.getPage(id).subscribe((content) => {
      this.content = content;
    })
  }

}
