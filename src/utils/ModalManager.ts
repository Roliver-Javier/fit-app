import { ModalController } from 'ionic-angular';


export class ModalManager{
    modal : any;
    
  	constructor(public modalCtrl: ModalController){
  	}	
  	
    public create = function(modalClass){
        console.log('hola');
        this.modal = this.modalCtrl.create(modalClass);
        this.modal.present();
    }

    public show = function(){
        this.modal.present();
    }

    public hide = function(){
        this.modal.dismiss();
    }

    

}