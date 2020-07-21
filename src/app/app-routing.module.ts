import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpComponent } from "./emp/emp.component";
import { EditComponent } from "./pages/employees/edit/edit.component";
import { ViewComponent } from "./view/view.component";



const routes: Routes = [
  {
    path:"",component:EmpComponent
  },
  {
    path:"blog/add/:id",
    component:EditComponent
  },
  {
    path:"blog/edit/:id",
    component:EditComponent

  },
  {
    path:"blog/view/:id",
    component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
