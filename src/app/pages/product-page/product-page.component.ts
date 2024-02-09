import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  data: any = []
  rating: number = 0
  stars: any = []
  
  constructor(private routeId: ActivatedRoute, private api: ApiService) { }
  ngOnInit() {
    this.api.getData().subscribe((res: any) => {
      let id = this.routeId.snapshot.paramMap.get('id')
      let response = res;
      let product = response.filter((e: any) => e.id == id)
      this.data = product[0]
      this.rating = this.data.rating.rate;
      console.log(this.rating)
    })
  }


}
