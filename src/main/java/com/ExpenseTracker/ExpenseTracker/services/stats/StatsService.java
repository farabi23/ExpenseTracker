package com.ExpenseTracker.ExpenseTracker.services.stats;

import com.ExpenseTracker.ExpenseTracker.dto.GraphDTO;
import com.ExpenseTracker.ExpenseTracker.dto.StatsDTO;

public interface StatsService {
    GraphDTO getChartData();

    StatsDTO getStats();
}
