import { Routes } from '@angular/router';
import { AlertComponent } from './reusableComponent/alert/alert.component';
import { LifecycleEventComponent } from './Components lifecycle hooks/lifecycle-event/lifecycle-event.component';
import { TemplateExampleComponent } from './templates/template-example/template-example.component';
import { NgContainerExampleComponent } from './templates/ng-container-example/ng-container-example.component';
import { ChildComponent } from './child/child.component';

export const routes: Routes = [
    {
        path : 'app-alert',
        component : AlertComponent
    },

    {
        path : 'app-child',
        component : ChildComponent
    },

    {
        path : 'app-lifecycle-event',
        component : LifecycleEventComponent
    },

    {
        path : 'app-template-example',
        component : TemplateExampleComponent
    },

    {
        path : 'app-ng-container-example',
        component : NgContainerExampleComponent
    }
];
