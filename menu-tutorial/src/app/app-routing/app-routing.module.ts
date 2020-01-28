import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent} from "../user/user-list/user-list.component"
import { VendorListComponent } from '../vendor/vendor-list/vendor-list.component';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { UserDetailComponent } from '../user/user-detail/user-detail.component';

const routes: Routes = [
  {path: "",redirectTo:"/user/list",pathMatch: "full"},
  {path: "users/list",component: UserListComponent},
  {path: "users/detail/:id",component: UserDetailComponent},
  {path: "vendors/list",component: VendorListComponent},
  {path: "products/list",component: ProductListComponent},
  {path: "**",component: UserListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
