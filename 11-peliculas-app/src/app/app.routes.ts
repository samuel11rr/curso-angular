import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { BusquedaComponent } from "./components/busqueda/busqueda.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";

const app_routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'busqueda/:texto', component: BusquedaComponent},
  {path: 'pelicula/:id/:pag', component: PeliculaComponent},
  {path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
