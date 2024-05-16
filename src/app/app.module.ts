// App.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { GithubService } from './github.service'; // Import GithubService

@NgModule({
  declarations: [AppComponent, SearchBarComponent, RepositoriesComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [GithubService], // Add GithubService to the providers array
  bootstrap: [AppComponent],
})
export class AppModule {}
