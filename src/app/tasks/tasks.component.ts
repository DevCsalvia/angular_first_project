import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './dummy-tasks';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input<string>();
  tasks = signal(DUMMY_TASKS);

  selectedUserTasks = computed(() => {
    return this.tasks().filter((task) => task.userId === this.userId());
  });

  selectedUser = computed(() => {
    return DUMMY_USERS.find((user) => user.id === this.userId());
  });
}
