export interface ProviderForm {
  autosave: boolean;
  username: string;
  password: string;
  email: string;
  description: string;
  requestGift: boolean;
  birthday: Date;
  rating: number;
}

export interface ProviderFormState {
  providerForm: ProviderForm;
}
