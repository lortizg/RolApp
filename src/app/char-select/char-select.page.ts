import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-char-select',
  templateUrl: './char-select.page.html',
  styleUrls: ['./char-select.page.scss'],
})
export class CharSelectPage implements OnInit {

  private personajes=[];
  file="../../assets/data/charas.txt"

  constructor(private http:HttpClient) {
    this.leerArchivo();
  }

  ngOnInit() {
  }


  cargarPersonajes(data){
    this.personajes = data.split('\n');
    this.personajes.pop();
  }

  leerArchivo(){
    this.http.get(this.file,{responseType: 'text'}).subscribe(data => {
      this.cargarPersonajes(data);
    })

  }

}
