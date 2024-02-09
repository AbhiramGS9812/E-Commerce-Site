import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TrendingComponent } from './components/trending/trending.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"footer", component:FooterComponent},
    {path:"products", component:ProductsComponent},
    {path:"products/:id", component:ProductPageComponent},
    {path:"contactus", component:ContactusComponent},
    {path:"**", component:NotFoundComponent},



];
