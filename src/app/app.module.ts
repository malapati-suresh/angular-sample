import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { appService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { ShareModule } from './share/share.module';



const router : Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  // {path:'', redirectTo:'angular-material', pathMatch:'full'},
  {path:'angular-material', component:AngularMaterialComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AngularMaterialComponent
  ],
  imports: [
    BrowserModule,ShareModule,
    AppRoutingModule,RouterModule.forRoot(router),ReactiveFormsModule,FormsModule,HttpClientModule,BrowserAnimationsModule
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
