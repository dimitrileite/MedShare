export interface UserForm {
  _id?: string;
  firstname: string;
  lastname: string;
  birthdate: Date;
  phone: string;
  email: string;
  password: string;
  gender: string;
  keystore: string;
}

export interface UserFormState {
  userForm: UserForm;
}
