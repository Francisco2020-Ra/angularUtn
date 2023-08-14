import { Component, OnInit } from '@angular/core';
import { Tarea } from '../interface/tarea';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  lista:Tarea[] = [];
  tarea: string = '';
  item:number = 0;
  
  ngOnInit(): void {
    
  }

  agregarTarea(){
    
    let descripcion:Tarea = {
      id: this.item,
      descripcion: this.tarea
    }
    this.item++;
    if(descripcion.descripcion.length<=0){
      alert("el campo no puede esta en blanco");
    }else{
      this.lista.push(descripcion);
      this.tarea = '';
    }
    
  }

  eliminarTarea(value: number){
      this.lista = this.lista.filter((elemento) => elemento.id !== value);
  }

}
