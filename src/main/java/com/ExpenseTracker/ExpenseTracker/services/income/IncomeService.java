package com.ExpenseTracker.ExpenseTracker.services.income;

import com.ExpenseTracker.ExpenseTracker.dto.IncomeDTO;
import com.ExpenseTracker.ExpenseTracker.entity.Income;

import java.util.List;

public interface IncomeService {

    Income postIncome(IncomeDTO incomeDTO);
    List<IncomeDTO> getAllIncomes();

    Income updateIncome(Long id, IncomeDTO incomeDTO);

    IncomeDTO getIncomeById(Long id);

    void deleteIncome (Long id);
}
