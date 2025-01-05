package com.ExpenseTracker.ExpenseTracker.services;

import com.ExpenseTracker.ExpenseTracker.dto.ExpenseDTO;
import com.ExpenseTracker.ExpenseTracker.entity.Expense;
import com.ExpenseTracker.ExpenseTracker.repository.ExpenseRepository;
import org.springframework.stereotype.Service;


public interface ExpenseService {

    Expense postExpense(ExpenseDTO expenseDTO);

}
