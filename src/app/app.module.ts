import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent, ViewComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(ViewComponent, { injector });
    customElements.define('dhpc-cms-content', el);
  }

  ngDoBootstrap() {}
 
}
