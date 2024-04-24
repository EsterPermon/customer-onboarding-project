import { createFeatureSelector } from '@ngrx/store';
import { User } from './user.model';

export const selectUser = createFeatureSelector<User>('user');
