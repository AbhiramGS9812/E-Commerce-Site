import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { SlicePipe } from '@angular/common';
import { ApiService } from '../../api.service';
import { TrendingComponent } from '../../components/trending/trending.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [SlicePipe, NavbarComponent, FooterComponent, CarouselComponent, TrendingComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {
	data: any= [];

	constructor(public api:ApiService){}
	ngOnInit(){
		this.api.getData().subscribe(response =>{
			this.data = response;
		})
	}
}
