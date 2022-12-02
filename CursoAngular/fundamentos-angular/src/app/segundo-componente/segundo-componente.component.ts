import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent  {
  nome = "Natália";
  dataNascimento = "1993-08-31";
  urlImagem = "/assets/img/fotoperfil1.jpg";

  mostrarDataNascimento(){
    alert(`A data de nascimento da Natália é: ${this.dataNascimento}`)
  }

}
