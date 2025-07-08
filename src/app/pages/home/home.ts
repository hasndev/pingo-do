import { Component, effect } from '@angular/core';
import { PingoForm } from "../../components/pingo-form/pingo-form";
import { PingoDos } from "../../components/pingo-dos/pingo-dos";
import { todos } from '../../signals/todos.signal';

@Component({
  selector: 'app-home',
  imports: [PingoForm, PingoDos],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor() {
    effect(() => {
      localStorage.setItem('pingodos', JSON.stringify(todos()));
    });
  }
}
