import { ProviderForm } from './provider-form.model';
import {
  actionProviderFormUpdate,
  actionProviderFormReset
} from './provider-form.actions';

describe('Provider Form Actions', () => {
  it('should create ActionProviderFormUpdate action', () => {
    const testProviderForm: ProviderForm = {
      autosave: false,
      username: 'test',
      password: 'test',
      email: 'test@test.test',
      description: 'It is a test.',
      requestGift: true,
      birthday: new Date(),
      rating: 10
    };
    const action = actionProviderFormUpdate({
      providerForm: testProviderForm
    });
    expect(action.type).toEqual(actionProviderFormUpdate.type);
    expect(action.form).toEqual(jasmine.objectContaining(testProviderForm));
  });

  it('should create ActionProviderFormReset action', () => {
    const action = actionProviderFormReset();
    expect(action.type).toEqual(actionProviderFormReset.type);
  });
});
