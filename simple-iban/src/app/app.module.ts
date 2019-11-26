import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IbanComponent } from './iban/iban.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IbanComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      { path: '', component: IbanComponent },
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
