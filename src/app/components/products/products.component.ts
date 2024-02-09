import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SlicePipe, RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  data: any= [];
  constructor(public api:ApiService){}
  ngOnInit(){
		this.api.getData().subscribe(response =>{
			this.data = response;
		})
	}
}
