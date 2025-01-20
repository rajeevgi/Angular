import { Routes } from '@angular/router';
import { AlertComponent } from './reusableComponent/alert/alert.component';
import { LifecycleEventComponent } from './Components lifecycle hooks/lifecycle-event/lifecycle-event.component';
import { TemplateExampleComponent } from './templates/template-example/template-example.component';
import { NgContainerExampleComponent } from './templates/ng-container-example/ng-container-example.component';
import { ChildComponent } from './child/child.component';
import { ViewChildComponent } from './ViewChildExample/view-child/view-child.component';
import { ParentChildComponent } from './ViewChildExample/parent-child/parent-child.component';
import { LoginComponent } from './login/login/login.component';
import { LayoutComponent } from './login/layout/layout.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [

    // Default Route
    {
        path: '',
        redirectTo: 'app-login',
        pathMatch: 'full'
    },

    // Login Page
    {
        path: 'app-login',
        component: LoginComponent
    },
    
    // After Login it will route to Layout Component
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'app-alert',
                component: AlertComponent,
                canActivate : [authGuard]
            },

            {
                path: 'app-child',
                component: ChildComponent,
                canActivate : [authGuard]
            },

            {
                path: 'app-lifecycle-event',
                component: LifecycleEventComponent,
                canActivate : [authGuard]
            },

            {
                path: 'app-template-example',
                component: TemplateExampleComponent,
                canActivate : [authGuard]
            },

            {
                path: 'app-ng-container-example',
                component: NgContainerExampleComponent,
                canActivate : [authGuard]
            },

            {
                path: 'app-view-child',
                component: ViewChildComponent,
                canActivate : [authGuard]
            },

            {
                path: 'app-parent-child',
                component: ParentChildComponent,
                canActivate : [authGuard]
            }
        ]

    },

];
