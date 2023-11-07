import { HospitalModel } from "./hospital.model";

export class DoctorModel {
  _id: String = '';
  name: String = '';
  branch: String = '';
  hospitalName: HospitalModel[]=[]
  email: String = '';
  phoneNumber: string = '';
  description: String = '';
  date: Date;
  avatar: File;
}
