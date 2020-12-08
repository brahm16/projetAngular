import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { baseURL, baseURLAuth } from './shared/baseURL';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { PhoneComponent } from './phone/phone.component';
import { DetailsPhoneComponent } from './details-phone/details-phone.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { UpdatePhoneComponent } from './update-phone/update-phone.component';
import { ModifQuantComponent } from './modif-quant/modif-quant.component';
import { ListPhonesComponent } from './list-phones/list-phones.component';
import { ItemPhoneComponent } from './item-phone/item-phone.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { SerachComponent } from './serach/serach.component';
import { ChartsComponent } from './charts/charts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    PhoneComponent,
    DetailsPhoneComponent,
    AddPhoneComponent,
    UpdatePhoneComponent,
    TestComponent,
    ModifQuantComponent,
    ListPhonesComponent,
    ItemPhoneComponent,
    WeatherWidgetComponent,
    SerachComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [[{provide: 'baseURL', useValue: baseURL},{provide: 'baseURLAuth', useValue: baseURLAuth}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
