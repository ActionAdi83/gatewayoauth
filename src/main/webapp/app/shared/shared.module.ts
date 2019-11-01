import { NgModule } from '@angular/core';
import { GatewayoauthSharedLibsModule } from './shared-libs.module';
import { JhiAlertComponent } from './alert/alert.component';
import { JhiAlertErrorComponent } from './alert/alert-error.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [GatewayoauthSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent, HasAnyAuthorityDirective],
  exports: [GatewayoauthSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent, HasAnyAuthorityDirective]
})
export class GatewayoauthSharedModule {}
