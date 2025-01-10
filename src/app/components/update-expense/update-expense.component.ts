import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExpenseService} from "../../services/expense/expense.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.scss']
})
export class UpdateExpenseComponent {

  expenseForm!: FormGroup;
  listOfCategory: any[] =[
    "Education",
    "Groceries",
    "Health",
    "Subscription",
    "Takeaways",
    "Clothing",
    "Travelling",
    "Other"];

  expenses:any;

  constructor(private fb: FormBuilder, private expenseService: ExpenseService,
              private message: NzMessageService,
              private router: Router) {
  }

  ngOnInit() {

    this.expenseForm = this.fb.group({
      title: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      description: [null, Validators.required],
    })
  }

  submitForm(){

  }

}
