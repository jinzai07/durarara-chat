import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  private pw: FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.pw = this.fb.group({
      password: [null, [Validators.required, Validators.minLength(5)]]
    });
  }

  private onAuthenticate(): void {
    if(this.pw.value.password === 'baccano') {
      this.router.navigate(['/chat']);
    } else {
      alert('Invalid password!');
    }
    this.pw.reset();
  }
}
