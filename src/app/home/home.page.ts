import { BudgetEntry } from '../entity/budget-entry';
import { BudgetService } from '../services/budget.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public budgetList: Array<BudgetEntry> = [];

  constructor(private budgetService: BudgetService) {}

  ionDidEnter() {
    this.budgetList = this.budgetService.getBudgetList();
  }

}
