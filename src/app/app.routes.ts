import { Routes } from '@angular/router';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyContactsComponent } from './my-contacts/my-contacts.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
export const routes: Routes = [
    { path: '', component: MyHeaderComponent },
    { path: 'blog', component: MyBlogComponent},
    { path: 'contacts', component: MyContactsComponent},
    { path: 'noticias/:id', component: NoticiasComponent }, // Rota para as notícias
    { path: '**', component: NotFoundComponent} // Página de erros
];