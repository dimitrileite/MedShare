import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { NotificationService } from '../../../../core/core.module';
import { SharedModule } from '../../../../shared/shared.module';

import { UserFormComponent } from './user-form.component';
import { selectUserFormState } from '../user-form.selectors';
import { UserForm } from '../user-form.model';

import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatButtonHarness } from '@angular/material/button/testing';

describe('UserFormComponent', () => {
  let store: MockStore;
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let dispatchSpy: jasmine.Spy;
  let loader: HarnessLoader;

  const getInput = (fieldName: string) =>
    loader.getHarness(
      MatInputHarness.with({ selector: `[formControlName="${fieldName}"]` })
    );

  const getSaveButton = () =>
    loader.getHarness(
      MatButtonHarness.with({ text: 'mds.examples.form.save' })
    );

  const getResetButton = async () =>
    loader.getHarness(
      MatButtonHarness.with({ text: 'mds.examples.form.reset' })
    );

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [UserFormComponent],
      providers: [provideMockStore(), NotificationService]
    });

    store = TestBed.inject(MockStore);
    store.overrideSelector(selectUserFormState, {
      userForm: {} as UserForm
    });
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);

    dispatchSpy = spyOn(store, 'dispatch');
  });

  it('should save userForm', async () => {
    const usernameInput = await getInput('username');
    const saveButton = await getSaveButton();

    await usernameInput.setValue('tomastrajan');
    await saveButton.click();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy.calls.mostRecent().args[0].type).toBe(
      '[UserForm] Update'
    );
    expect(dispatchSpy.calls.mostRecent().args[0].form).toEqual({
      autosave: false,
      username: 'tomastrajan',
      password: '',
      email: '',
      description: '',
      requestGift: '',
      birthday: '',
      rating: 0
    });
  });

  it('should reset userForm', async () => {
    const usernameInput = await getInput('username');
    const resetButton = await getResetButton();

    await usernameInput.setValue('tomastrajan');
    await resetButton.click();
    const usernameValue = await usernameInput.getValue();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy.calls.mostRecent().args[0].type).toBe(
      '[UserForm] Reset'
    );
    expect(usernameValue).toBe('');
  });
});
