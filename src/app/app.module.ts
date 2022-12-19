import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { ModifyDialogComponent } from './pages/modify-dialog/modify-dialog.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, MainViewComponent, ModifyDialogComponent ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    DragDropModule, 
    FormsModule, 
    MatButtonModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule, 
    BrowserAnimationsModule,
    MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModifyDialogComponent]
})
export class AppModule {}
