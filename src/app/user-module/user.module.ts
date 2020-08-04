import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {ExportPipeModule} from '../export-pipe/export-pipe.module';

const routes: Routes = [
  {path: '', component: UsersComponent, resolve: {fetchUsers: UserService}}
];

@NgModule({
  declarations: [UsersComponent, ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ExportPipeModule
  ],
  providers: [UserService],
})
export class UserModule { }
