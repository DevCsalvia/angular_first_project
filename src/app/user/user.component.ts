import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userId = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => 'users/' + this.avatar());
  onSelectUser = output<string>();
}
