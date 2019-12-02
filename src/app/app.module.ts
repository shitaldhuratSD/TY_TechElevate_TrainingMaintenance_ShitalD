import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }  from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BachCreationFormComponent } from './bach-creation-form/bach-creation-form.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BachCreationFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
       { path: 'bach', component: BachCreationFormComponent},
      // { path: 'card', component: CarDetailsComponent},
      // { path: 'login', component: LoginComponent},
      // { path: 'logind', component: LoginDetailsComponent},

    ])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
