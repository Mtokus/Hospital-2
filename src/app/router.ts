import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'login',
    loadComponent: () =>
      import('./components/auth/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {path: 'register',
    loadComponent: () =>
      import('./components/auth/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  {path: '',
    loadComponent: () =>
      import('./components/layouts/layouts.component').then(
        (c) => c.LayoutsComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
    ],
  },
  { path: 'admin',
  loadComponent: () =>
    import('./components/users/admin/admin.component').then(
      (c) => c.AdminComponent),
      children:[
        {
          path:"doctor-list",
          loadComponent:()=>import("./components/users/admin/components/doctor-list/doctor-list.component").then((c)=>c.DoctorListComponent)
        },{
          path:"add-doctor",
          loadComponent:()=>import("./components/users/admin/components/doctor-list/add-doctor/add-doctor.component").then((c)=>c.AddDoctorComponent)
        },
        {
          path:"hospital-list",
          loadComponent:()=>import("./components/users/admin/components/hospital-list/hospital-list.component").then((c)=>c.HospitalListComponent)
        },
        
       
      ]
  },
  { path: 'doctors',
  loadComponent: () =>
    import('./components/users/doctors/doctors.component').then(
      (c) => c.DoctorsComponent
    )

  },
  { path: 'patiens',
  loadComponent: () =>
  import('./components/users/patients/patients.component').then(
    (c) => c.PatientsComponent)
  }
];
