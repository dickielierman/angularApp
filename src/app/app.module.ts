import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MonstersComponent } from './monster/monster.component';
import { MonsterListComponent } from './monster/monster-list/monster-list.component';
import { MonsterDetailComponent } from './monster/monster-detail/monster-detail.component';
import { MonsterItemComponent } from './monster/monster-list/monster-item/monster-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { MonsterStartComponent } from './monster/monster-start/monster-start.component';
import { MonsterEditComponent } from './monster/monster-edit/monster-edit.component';
import { MonsterService } from './monster/monster.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MonstersComponent,
    MonsterListComponent,
    MonsterDetailComponent,
    MonsterItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    MonsterStartComponent,
    MonsterEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, MonsterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
