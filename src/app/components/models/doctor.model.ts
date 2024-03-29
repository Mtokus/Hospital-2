import { BranchModel } from "./branch.model";
import { HospitalModel } from "./hospital.model";

export class DoctorModel {
  _id: String = '';
  doctorName: String = '';
  branchName:BranchModel[]=[];
  hospitalName: HospitalModel[]=[]
  email: String = '';
  phoneNumber: string = '';
  description: String = '';
  date: Date;
  avatar: File;
}
