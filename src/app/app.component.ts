import {Component, OnInit} from '@angular/core';
import {UsersService} from './shared/services/users.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from './shared/models/user.model';
import {UserModalComponent} from './shared/components/user-modal/user-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: {};

  constructor(private usersService: UsersService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  open(): void {
    const activeModal = this.modalService.open(UserModalComponent);
    activeModal.componentInstance.userData = {};
    activeModal.componentInstance.modalHeader = 'Create User';
    activeModal.componentInstance.isCreate = true;
  }
}
