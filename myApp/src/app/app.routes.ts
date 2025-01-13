import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { GetAPIComponent } from './get-api/get-api.component';
import { VideosComponent } from './videos/videos.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';

export const routes: Routes = [
    {
        path : "user-page",
        component : UserComponent
    },

    {
        path : "admin",
        component : AdminComponent
    },

    {
        path : 'control-Flow',
        component : ControlFlowComponent
    },

    {
        path : 'Api',
        component : GetAPIComponent
    },

    {
        path : 'video',
        component : VideosComponent
    },

    {
        path : 'pipe',
        component : PipeComponent
    },

    {
        path : 'template-form',
        component : TemplateComponent
    },

    {
        path : 'reactive-form',
        component : ReactiveComponent
    }
];
