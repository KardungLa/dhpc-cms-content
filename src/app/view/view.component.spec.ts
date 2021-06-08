import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CmsService } from '../cms.service';

import { ViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
  let injector: TestBed;
  let service: CmsService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComponent ],
      imports: [HttpClientTestingModule],
      providers: [CmsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    injector = getTestBed();
    service = injector.get(CmsService);
    httpMock = injector.get(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* @todo it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
