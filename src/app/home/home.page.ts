import { BudgetEntry } from '../entity/budget-entry';
import { BudgetService } from '../services/budget.service';
import { Component } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public budgetList: Array<BudgetEntry> = [];

  constructor(private budgetService: BudgetService, 
              private events: Events) {
              
    events.subscribe("ev.add", (data)=> {
      console.log("added");
    });             
  }

  ionViewDidEnter() {
    this.budgetService.getBudgetList().then(
      (data)=> {
        this.budgetList = data;
      }
    );
  }

}
