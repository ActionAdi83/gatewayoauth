import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { GatewayoauthSharedModule } from 'app/shared/shared.module';
import { GatewayoauthCoreModule } from 'app/core/core.module';
import { GatewayoauthAppRoutingModule } from './app-routing.module';
import { GatewayoauthHomeModule } from './home/home.module';
import { GatewayoauthEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    GatewayoauthSharedModule,
    GatewayoauthCoreModule,
    GatewayoauthHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    GatewayoauthEntityModule,
    GatewayoauthAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class GatewayoauthAppModule {}
