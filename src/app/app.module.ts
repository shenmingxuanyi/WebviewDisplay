import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from "../pages/home/home";
import {DisplayPage} from "../pages/display/display";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        DisplayPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        DisplayPage
    ],
    providers: []
})
export class AppModule {
}
