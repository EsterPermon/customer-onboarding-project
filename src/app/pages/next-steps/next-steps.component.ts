import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../store/user/user.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { addUser } from '../../store/user/user.actions';
import { selectUser } from '../../store/user/user.selectors';

@Component({
  selector: 'app-next-steps',
  templateUrl: './next-steps.component.html',
  styleUrl: './next-steps.component.scss',
})
export class NextStepsComponent implements OnInit {
  userInfoForm!: FormGroup;
  user$: Observable<User>;
  isFormInvalid: boolean;
  currentYear = new Date().getFullYear();

  constructor(private store: Store<AppState>) {
    this.user$ = this.store.select(selectUser);
    this.isFormInvalid = false;
  }

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      this.isFormInvalid = false;

      this.userInfoForm = new FormGroup({
        gender: new FormControl(user.gender, Validators.required),
        firstName: new FormControl(user.firstName, Validators.required),
        lastName: new FormControl(user.lastName, Validators.required),
        dayOfBirth: new FormControl(user.dayOfBirth, Validators.required),
        monthOfBirth: new FormControl(user.monthOfBirth, Validators.required),
        yearOfBirth: new FormControl(user.yearOfBirth, Validators.required),
        nationality: new FormControl(user.nationality, Validators.required),
      });
    });
  }

  onSubmit() {
    if (this.userInfoForm.valid) {
      const userInfo = this.userInfoForm.value;
      this.store.dispatch(addUser(userInfo));
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    } else {
      this.isFormInvalid = true;
    }
  }
}
