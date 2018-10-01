import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export class FeatureRoutingModule {}

import { AppComponent } from "./app.component";
import { UploaderComponent } from "./components/uploader/uploader.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./auth.guard";
import { ImagesComponent } from "./components/images/images.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "upload", component: UploaderComponent, canActivate: [AuthGuard] },
  { path: "images", component: ImagesComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ImagesComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
