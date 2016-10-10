import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';

import {BarcodeScanner} from 'ionic-native';
import {DisplayPage} from "../display/display";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {


    url: string = "http://";

    type: string = "0";

    constructor(public navCtrl: NavController) {
        if (window.localStorage) {
            if (window.localStorage.getItem("URL")) {
                this.url = window.localStorage.getItem("URL");
            }
        }
    }

    hrefToUrl() {
        if (window.localStorage) {
            window.localStorage.setItem("URL", this.url);
        }
        this.navCtrl.push(DisplayPage, {url: this.url});
    }

    qrScanner() {
        BarcodeScanner.scan()
            .then((barcodeData) => {
                this.url = barcodeData.text;
                this.hrefToUrl();
            });
    }


}
