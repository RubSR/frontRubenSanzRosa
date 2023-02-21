import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeComponent} from "./pages/home/home.component";
import {HeaderComponent} from "./layouts/header/header.component";
import {CharCardComponent} from "./components/char-card/char-card.component";
import {ImageDialogComponent} from "./dialogs/image-dialog/image-dialog.component";
import {RemoveDialogComponent} from "./dialogs/remove-dialog/remove-dialog.component";
import {UpdateCreateDialogComponent} from "./dialogs/update-create-dialog/update-create-dialog.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CharCardComponent,
    ImageDialogComponent,
    RemoveDialogComponent,
    UpdateCreateDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
