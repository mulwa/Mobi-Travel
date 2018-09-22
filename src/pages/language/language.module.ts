import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LanguagePage } from './language';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LanguagePage,
  ],
  imports: [
    IonicPageModule.forChild(LanguagePage),
    TranslateModule, ComponentsModule
  ],
})
export class LanguagePageModule { }
