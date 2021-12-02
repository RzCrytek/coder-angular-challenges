import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-challenge-three',
  templateUrl: './challenge-three.component.html',
  styleUrls: ['./challenge-three.component.scss'],
})
export class ChallengeThreeComponent implements OnInit {
  user!: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor() {}

  createUserForm() {
    this.user = new FormGroup({
      name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailPattern),
      ]),
      address: new FormControl(),
    });
  }

  save() {
    const values = this.user.value;
    alert('Formulario válido: ' + JSON.stringify(values, null, 2));
  }

  ngOnInit(): void {
    this.createUserForm();
  }
}
