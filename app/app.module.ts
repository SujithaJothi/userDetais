import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { SavedListComponent } from './saved-list/saved-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalFormComponent,
    SavedListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
