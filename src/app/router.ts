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
  { path: 'patients',
  loadComponent: () =>
  import('./components/users/patients/patients.component').then(
    (c) => c.PatientsComponent),
    children:[
      {
        path:"app-patient-home",
        loadComponent:()=>import("./components/users/patients/patient-home/patient-home.component").then((c)=>c.PatientHomeComponent)
      },
      {
        path:"get-appointment",
        loadComponent:()=>import("./components/users/patients/get-appointment/get-appointment.component").then((c)=>c.GetAppointmentComponent)
      },
      {
        path:"app-create-appointment",
        loadComponent:()=>import("./components/users/patients/create-appointment/create-appointment.component").then((c)=>c.CreateAppointmentComponent)
      },
      {
        path:"app-result-analysis",
        loadComponent:()=>import("./components/users/patients/result-analysis/result-analysis.component").then((c)=>c.ResultAnalysisComponent)
      },
      {
        path:"app-patient-information",
        loadComponent:()=>import("./components/users/patients/patient-information/patient-information.component").then((c)=>c.PatientInformationComponent)
      },
      
      
    
    ]
  }
];
