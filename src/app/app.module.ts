import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenu, MatMenuModule, MatMenuItem, MatIconModule, MatButtonModule, MatCard, MatCardModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { PListComponent } from './p-list/p-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { Product } from './entities/product';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FiltersComponent } from './filters/filters.component';


@NgModule({
  declarations: [
    AppComponent,
    PListComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ProductPageComponent,
    ProductCardComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule, 
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
