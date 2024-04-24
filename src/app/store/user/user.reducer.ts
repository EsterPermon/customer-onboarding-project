import { createReducer, on } from '@ngrx/store';
import { addUser } from './user.actions';
import { User } from './user.model';

const getUserInitialState = () => {
  const initialStateFromLocalStorage = localStorage.getItem('userInfo');
  const emptyUserState = {
    gender: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    monthOfBirth: '',
    yearOfBirth: '',
    nationality: '',
  };

  return initialStateFromLocalStorage
    ? JSON.parse(initialStateFromLocalStorage)
    : emptyUserState;
};

export const initialState: User = getUserInitialState();

export const userReducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => ({
    ...state,
    ...user,
  }))
);
