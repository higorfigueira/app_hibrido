import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) { }

    doConfirm() {
      let confirm = this.alerCtrl.create({
        title: 'É muito importate para nós que você seja sincero no questinário',
        buttons: [
        {
            text: 'Sou Um Moleque',
            handler: () => {
            console.log('Disagree clicked');
            }
        },
        {
            text: 'Sou uma Pessoa Séria',
            handler: () => {
            console.log('Agree clicked');
            }
        }
        ]
      });
      confirm.present()
    }

    doAnaliza(){
      
    }
}

