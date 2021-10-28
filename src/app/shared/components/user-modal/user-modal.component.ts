import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../models/user.model';
import {UsersService} from '../../services/users.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  @Input() modalHeader: string;
  @Input() userData: User;
  @Input() isCreate: boolean;
  userForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private userService: UsersService) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      website: new FormControl(''),
      id: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.userForm.setValue({
      name: this.userData.name,
      email: this.userData.email,
      phone: this.userData.phone,
      website: this.userData.website,
      id: this.userData.id
    });
  }

  closeModal(): void {
    this.activeModal.close();
  }

  sendDataToDB(state): void {
    const userData: User = this.userForm.value;
    if (state) {
      this.userService.createUser(userData).subscribe(() => {
        this.closeModal();
      });
    } else {
      this.userService.updateUser(userData).subscribe(() => {
        this.closeModal();
      });
    }

  }

}
