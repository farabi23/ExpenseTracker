import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";
import {IncomeService} from "../../services/income/income.service";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent {

  incomes :any;
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
              private router: Router,
              private incomeService: IncomeService) {
  }

  ngOnInit(){
    this.getAllIncomes();
    this.incomeForm = this.fb.group({
      title: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      category: [null, Validators.required],
      description: [null, Validators.required]

    })
  }

  submitForm(){
    this.incomeService.postIncome(this.incomeForm.value).subscribe(res=> {
      this.message.success("Income posted successfully!", {nzDuration: 5000});
      this.getAllIncomes();

    }, error => {
      this.message.error("Error while posting income", {nzDuration: 5000});
    })
  }

  getAllIncomes(){
    this.incomeService.getAllIncomes().subscribe(res=>{
      this.incomes = res;

    }, error => {
      this.message.error("Error while getting incomes", {nzDuration: 5000});
    })
  }

  deleteIncome(id:number){
    this.incomeService.deleteIncome(id).subscribe(res=>{
      this.message.success("Income successfully deleted", {nzDuration: 5000});
      this.getAllIncomes();
      }, error=>{
      this.message.error("Error while deleting income", {nzDuration: 5000});
      }
    )
  }

  updateIncome(id:number){
    this.router.navigate([`/income/${id}/edit`]);

  }

}
