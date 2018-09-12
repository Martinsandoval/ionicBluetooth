import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';



@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private bluetoothSerial: BluetoothSerial) {
  }

  onPress(direction){
    console.log("Sending direction... " + direction);
   	this.bluetoothSerial.write(direction);
   }

   onTouchEnd(){
   	this.bluetoothSerial.write('e');
   }


}
