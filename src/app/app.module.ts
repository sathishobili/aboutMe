import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HeaderComponent,
        HomeComponent,
        AboutComponent,
        ServicesComponent,
        EducationComponent,
        FooterComponent
    ]
})
export class AppModule { }
