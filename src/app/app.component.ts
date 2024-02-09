import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { response } from 'express';
import { SlicePipe } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, SlicePipe, NavbarComponent, FooterComponent,CarouselComponent,HomeComponent ],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'ECOMMERCE';
	data: any= [];

	constructor(public api:ApiService){}
	ngOnInit(){
		this.api.getData().subscribe(response =>{
			this.data = response;
		})
	}
}
