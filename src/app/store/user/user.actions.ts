import { createAction } from '@ngrx/store';
import { User } from './user.model';

export const addUser = createAction('[Add User]', (user: User) => ({ user }));
