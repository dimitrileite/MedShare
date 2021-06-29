import { Form } from './provider-form.model';
import { providerFormReducer, initialState } from './provider-form.reducer';
import { actionFormReset, actionFormUpdate } from './provider-form.actions';

describe('FormReducer', () => {
  const providerForm: Form = {
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
    const state = providerFormReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should update the providerForm', () => {
    const action = actionFormUpdate({
      providerForm: { ...form, username: 'updated' }
    });
    const state = providerFormReducer(initialState, action);
    expect(state.form.username).toBe('updated');
  });

  it('should reset the providerForm', () => {
    const action = actionFormReset();
    const state = providerFormReducer(undefined, action);
    expect(state).toEqual(initialState);
  });
});
