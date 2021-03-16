import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();
  order: string = 'name';
  reverse: boolean = false;
  userList$: any;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

  onDelete(user: User): void {
    if (confirm("Are you sure you want to delete the bill?")) {
      this.userService.remove(user).subscribe(
        () => {
          this.userService.getAll();
        }
        );
      }
  }

  setOrder(value: string): void
  {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }



}
