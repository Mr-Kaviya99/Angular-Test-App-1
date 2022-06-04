import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildrenComponent } from './components/children/children.component';
import {FormsModule} from "@angular/forms";
import { MyFileUploaderComponent } from './components/my-file-uploader/my-file-uploader.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ParentComponent,
        ChildrenComponent,
        MyFileUploaderComponent
    ],
    exports: [
        MyFileUploaderComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FormsModule
    ]
})
export class DashboardModule { }
