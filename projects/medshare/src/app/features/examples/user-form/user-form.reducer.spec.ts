import { Form } from './user-form.model';
import { userFormReducer, initialState } from './user-form.reducer';
import { actionFormReset, actionFormUpdate } from './user-form.actions';

describe('FormReducer', () => {
  const userForm: Form = {
    autosave: false,
    username: 'test',
    password: 'test',
    email: 'test@test.test',
    description: 'It is a test.',
    requestGift: true,
    birthday: new Date(),
    rating: 10
  };

  it('should return the default state', () => {
    const action = {} as any;
    const state = userFormReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should update the userForm', () => {
    const action = actionFormUpdate({
      userForm: { ...form, username: 'updated' }
    });
    const state = userFormReducer(initialState, action);
    expect(state.form.username).toBe('updated');
  });

  it('should reset the userForm', () => {
    const action = actionFormReset();
    const state = userFormReducer(undefined, action);
    expect(state).toEqual(initialState);
  });
});
