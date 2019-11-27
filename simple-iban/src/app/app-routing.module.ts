import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IbanComponent } from './iban/iban.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'iban',
                component: IbanComponent,
            },
            {
                path: 'todolist',
                component: ToDoListComponent
            }
        ]
    },

    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
