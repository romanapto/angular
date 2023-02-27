import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item-model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  listas: Lista;
  nombreItem:string='';
  //const listas: Lista;
  constructor( private deseosService: DeseosService,
    private route: ActivatedRoute ) {
  
  const listaId = this.route.snapshot.paramMap.get('listaId');
  this.listas = this.deseosService.obtenerLista( listaId || 0 );
  console.log('entra con id '+listaId)
  //this.lista = listass
  //console.log(this.deseosService.obtenerLista( listaId || 0 ));
  console.log(this.listas);  

}

  ngOnInit() {
  }

  agregarItem() {
    if (this.nombreItem.length===0) {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem='';
  }

}
