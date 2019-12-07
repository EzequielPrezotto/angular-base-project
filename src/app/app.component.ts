import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-angular';
  input1 = '';
  input2 = '';
  resultado = '';

  calc() {
    alert(Number(this.input1) + Number(this.input2));
  }

  find() {
    const teste = 'hoje eu vou para casa para comer algo';
    let palavrasEncontradas = [];
    let quantidade = [];

    let quantidadePalavra = [];

    const palavras = teste.split(' ');

    palavras.forEach(palavra => {
      const index = palavrasEncontradas.findIndex(value => value === palavra);
      if (index > -1) {
        quantidade[index]++;
        quantidadePalavra[index].quantidade++;
      } else {
        palavrasEncontradas.push(palavra);
        quantidade.push(1);
        quantidadePalavra.push({ palavra: palavra, quantidade: 1 });
      }
    });

    let resultado = '';

    palavrasEncontradas.forEach((value, index) => {
      resultado += value + ': ' + quantidade[index] + '\r\n';
    });

    //document.getElementById('resultado').value = resultado;
    this.resultado = JSON.stringify(quantidadePalavra);

  }
}
