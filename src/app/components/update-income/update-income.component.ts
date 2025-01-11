import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExpenseService} from "../../services/expense/expense.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {ActivatedRoute, Router} from "@angular/router";
import {IncomeService} from "../../services/income/income.service";

@Component({
  selector: 'app-update-income',
  templateUrl: './update-income.component.html',
  styleUrls: ['./update-income.component.scss']
})
export class UpdateIncomeComponent {

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

  incomes:any;
  id:number = this.activatedRoute.snapshot.params['id'];

  constructor(private fb: FormBuilder, private incomeService: IncomeService,
              private message: NzMessageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(){
    this.incomeForm= this.fb.group({
      title: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      description: [null, Validators.required],
      category: [null, Validators.required]
    });
    this.getIncomeById();

  }
  getIncomeById(){
    this.incomeService.getIncomeById(this.id).subscribe(res=> {
      this.incomeForm.patchValue(res);
    }, error => {
      this.message.error("Something went wrong", {nzDuration: 5000});
    })
  }

  submitForm(){
    this.incomeService.updateIncome(this.id, this.incomeForm.value).subscribe(res=> {
      this.message.success("Income updated successfully!", {nzDuration: 5000});
      this.router.navigateByUrl("/income");
    }, error =>{
      this.message.error("Error while updating income", {nzDuration: 5000});
    })

  }


}
