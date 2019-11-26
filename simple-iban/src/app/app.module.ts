import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IbanComponent } from './iban/iban.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    IbanComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      { path: '', component: IbanComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
