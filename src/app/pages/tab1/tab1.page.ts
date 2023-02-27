import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(public deseesServices: DeseosService,
              private router: Router,
              private alertCtrl: AlertController) {
    
  }

  async agregarLista  (){

    //this.router.navigateByUrl('/tabs/tab1/agregar');
      const alert = await this.alertCtrl.create({
        header: 'Nueva Lista',
        //subHeader: 'Important message',
        //message: 'This is an alert!',
        inputs: [{
          name: 'Titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }],
        buttons: [
          {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
            console.log('cancelar');
          }
        },
        {
          text:'Crear',
          handler: (data)=>{
            console.log(data);
            if ( data.Titulo.length===0 ){
              return;
            }

            //crear la lista
            const listaId = this.deseesServices.crearLista(data.Titulo);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          }    
        }
      ],
      });
  
      alert.present();

  }
  
}
