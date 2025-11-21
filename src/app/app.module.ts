import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './pages/users/users.component';
import { AboutComponent } from './pages/about/about.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    UserCardComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
