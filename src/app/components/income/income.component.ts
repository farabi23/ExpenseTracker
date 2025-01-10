import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent {

  incomeForm!: FormGroup;
  listOfCategory: any[] =[
    "Salary",
    "Bitcoin",
    "Free money",
    "Freelance",
    "Investment",
    "Stocks",
    "Bank transfer",
    "Other"
  ];

  constructor(private fb: FormBuilder,
              private message: NzMessageService,
              private router: Router) {
  }

  ngOnInit(){
    this.incomeForm = this.fb.group({
      title: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      category: [null, Validators.required],
      description: [null, Validators.required]

    })
  }

}
