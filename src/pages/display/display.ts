import {Component, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

/*
 Generated class for the Display page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-display',
    templateUrl: 'display.html'
})
export class DisplayPage {

    url: SafeResourceUrl;

    constructor(public navCtrl: NavController, public navParams: NavParams, public elementRef: ElementRef, public domSanitizer: DomSanitizer) {
        this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.navParams.get("url"));
    }

    refresh() {
        this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.navParams.get("url"));
    }

    ionViewDidLoad() {
        console.log('Hello Display Page');
    }

}
