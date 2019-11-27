import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IbanComponent } from './iban/iban.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { DndModule } from 'ng2-dnd';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IbanComponent,
    ToDoListComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    DndModule.forRoot(),
    HttpModule,
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
