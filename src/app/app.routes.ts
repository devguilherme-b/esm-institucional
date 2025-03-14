import { RouterModule, Routes } from '@angular/router';
import { MyHeaderComponent } from './my-header/my-header.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutCompletoComponent } from './about-completo/about-completo.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
    { path: '', component: MyHeaderComponent },
    { path: 'sobre', component: AboutCompletoComponent},
    { path: 'noticias/:id', component: NoticiasComponent }, // Rota para as notícias
    { path: '**', component: NotFoundComponent} // Página de erros, esse código sempre tem que ficar na última linha
];
@NgModule({
    imports: [RouterModule.forRoot(routes,{
        scrollPositionRestoration: 'enabled', // Habilita rolagem automatica
        anchorScrolling: 'enabled' // Habilita âncora na página
    })],
    exports: [RouterModule]
})
export class AppRoutingModule{}