package com.ExpenseTracker.ExpenseTracker.dto;

import com.ExpenseTracker.ExpenseTracker.entity.Expense;
import com.ExpenseTracker.ExpenseTracker.entity.Income;
import lombok.Data;

import java.util.List;

@Data
public class GraphDTO {

    private List<Expense> expenseList;

    private List<Income> incomeList;
}
