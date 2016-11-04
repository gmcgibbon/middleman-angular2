import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppService }    from './service';
import { AppComponent }  from './components/app';

@NgModule({
  imports:      [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }
