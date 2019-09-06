import { Component, OnInit } from '@angular/core';

import { BudgetEntry } from 'src/app/entity/budget-entry';
import { BudgetService } from '../../services/budget.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.page.html',
  styleUrls: ['./budget-form.page.scss'],
})
export class BudgetFormPage implements OnInit {

  public budget: BudgetEntry;

  constructor(private navCtrl: NavController,
              private budgetService: BudgetService) { }

  ngOnInit() {
    this.budget = new BudgetEntry((new Date()).getTime());
  }

  goBack() {
    this.navCtrl.back();
  }

  validateForm() {

    this.budgetService.addEntry(this.budget);

    this.navCtrl.back();
  }

}
