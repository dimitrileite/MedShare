import { UserForm } from './user-form.model';
import { actionUserFormUpdate, actionUserFormReset } from './user-form.actions';

describe('User Form Actions', () => {
  it('should create ActionUserFormUpdate action', () => {
    const testUserForm: UserForm = {
      autosave: false,
      username: 'test',
      password: 'test',
      email: 'test@test.test',
      description: 'It is a test.',
      requestGift: true,
      birthday: new Date(),
      rating: 10
    };
    const action = actionUserFormUpdate({
      userForm: testUserForm
    });
    expect(action.type).toEqual(actionUserFormUpdate.type);
    expect(action.form).toEqual(jasmine.objectContaining(testUserForm));
  });

  it('should create ActionUserFormReset action', () => {
    const action = actionUserFormReset();
    expect(action.type).toEqual(actionUserFormReset.type);
  });
});
