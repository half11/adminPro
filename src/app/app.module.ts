import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//routes
import { AppRoutingModule } from './app-routing.module';

//Modules
import { PagesModule } from './pages/pages.module';
//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
