import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttackRollComponent } from './attack-roll/attack-roll.component';
import { DiceRollDisplayComponent } from './dice-roll-display/dice-roll-display.component';
import { AttackRollListComponent } from './attack-roll-list/attack-roll-list.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AttackRollComponent,
    DiceRollDisplayComponent,
    AttackRollListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
