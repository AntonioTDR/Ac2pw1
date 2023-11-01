import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-de-tarefass.component.html',
  styleUrls: ['./lista-de-tarefass.component.css'],
})
export class ListaTarefasComponent implements OnInit {
  nome: string = '';
  email: string = '';
  senha: string = '';

  tarefas = [
    {id: 1, descricao: "Trocou de roupa", concluido: true},
    {id: 2, descricao: "Escovou os dentes", concluido: true},
    {id: 3, descricao: "Tomou cafe", concluido: true},
    {id: 4, descricao: "Jogou fut", concluido: false},
    {id: 5, descricao: "zagueirou", concluido: true},
  ]

  toggleConcluido(tarefas: any) {
    tarefas.concluido = !tarefas.concluido;
  }


  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: any) {
    if (form.valid) {
      alert('formulário OK');
    } else {
      alert('Formulário Inválido');
    }
  }
}