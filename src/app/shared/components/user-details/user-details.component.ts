import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../models/user.model';
import {UsersService} from '../../services/users.service';
import {UserModalComponent} from '../user-modal/user-modal.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() userInfo: User;
  modalHeader: string;

  constructor(private modalService: NgbModal, private userService: UsersService) {
  }

  ngOnInit(): void {
  }

  open(user: User): void {
    const activeModal = this.modalService.open(UserModalComponent);
    activeModal.componentInstance.userData = user;
    activeModal.componentInstance.modalHeader = 'Update User';
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe();
  }

}
