import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { MiTablaComponent } from './mi-tabla/mi-tabla.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		MiTablaComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgxDatatableModule,
		FormsModule
	],
	providers: [ AppService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
