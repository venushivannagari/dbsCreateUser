import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../models/user.model';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  @Input() modalHeader: string;
  @Input() userData: User;
  @Input() isCreate: boolean;

  constructor(public activeModal: NgbActiveModal, private userService: UsersService) {
  }

  ngOnInit(): void {
    console.log(this.userData);
  }

  closeModal(): void {
    this.activeModal.close();
  }

  sendDataToDB(user, state): void {
    const userData: User = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website
    };
    if (state) {
      this.userService.createUser(userData).subscribe(res => {
        this.closeModal();
      });
    } else {
      userData.id = user.id;
      this.userService.updateUser(userData).subscribe(res => {
        this.closeModal();
      });
    }

  }

}
