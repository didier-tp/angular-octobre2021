import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { XyComponent } from './basic/xy/xy.component';
import { ZzComponent } from './basic/zz/zz.component';
import { LoginComponent } from './login/login.component';
import { RegletteComponent } from './reglette/reglette.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsUtilModule } from 'src/bs-util/bs-util.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginV2Component } from './login-v2/login-v2.component';
import { MyHighlightDirective } from './common/directive/my-highlight.directive';
import { SeuilComponent } from './basic/seuil/seuil.component';
import { ListProdComponent } from './basic/list-prod/list-prod.component';
import { HttpClientModule } from '@angular/common/http';
import { ConversionComponent } from './conversion/conversion.component';
import { MyAuthInterceptor } from './common/interceptor/my-auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminDeviseComponent } from './admin-devise/admin-devise.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    CalculatriceComponent,
    TvaComponent,
    XyComponent,
    ZzComponent,
    LoginComponent,
    RegletteComponent,
    WelcomeComponent,
    LoginV2Component,
    MyHighlightDirective,
    SeuilComponent,
    ListProdComponent,
    ConversionComponent,
    AdminDeviseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsUtilModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyAuthInterceptor,
      multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
