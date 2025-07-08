import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addTodo } from '../../signals/todos.signal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pingo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pingo-form.html',
  styleUrls: ['./pingo-form.css']
})
export class PingoForm {
  newTitle = '';
  newDescription = '';

  submitForm() {
    const title = this.newTitle.trim();
    const description = this.newDescription.trim();

    if (!title || !description) {
      Swal.fire({
        icon: 'warning',
        title: 'حقول فارغة',
        text: 'يرجى إدخال عنوان ووصف المهمة',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    addTodo(this.newTitle.trim(), this.newDescription.trim());
    console.log("Title: " + this.newTitle + " - Description: " + this.newDescription)

    this.newTitle = '';
    this.newDescription = '';
  }
}
