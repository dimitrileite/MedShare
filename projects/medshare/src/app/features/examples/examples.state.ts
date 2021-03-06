import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.module';

import { todosReducer } from './todos/todos.reducer';
import { TodosState } from './todos/todos.model';

import { stockMarketReducer } from './stock-market/stock-market.reducer';
import { StockMarketState } from './stock-market/stock-market.model';

import { bookReducer } from './crud/books.reducer';

import { formReducer } from './form/form.reducer';
import { FormState } from './form/form.model';

import { providerFormReducer } from './provider-form/provider-form.reducer';
import { ProviderFormState } from './provider-form/provider-form.model';

import { userFormReducer } from './user-form/user-form.reducer';
import { UserFormState } from './user-form/user-form.model';

import { BookState } from './crud/books.model';

export const FEATURE_NAME = 'examples';

export const selectExamples =
  createFeatureSelector<State, ExamplesState>(FEATURE_NAME);

export const reducers: ActionReducerMap<ExamplesState> = {
  books: bookReducer,
  form: formReducer,
  providerForm: providerFormReducer,
  userForm: userFormReducer,
  stocks: stockMarketReducer,
  todos: todosReducer
};

export interface ExamplesState {
  books: BookState;
  form: FormState;
  providerForm: ProviderFormState;
  userForm: UserFormState;
  stocks: StockMarketState;
  todos: TodosState;
}

export interface State extends AppState {
  examples: ExamplesState;
}
