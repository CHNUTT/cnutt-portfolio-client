import { navigationActionTypes } from '../types';

export const toggleNavbar = () => ({
  type: navigationActionTypes.TOGGLE_NAVIGATION_BAR,
});

export const changeActivePage = (index: number) => ({
  type: navigationActionTypes.CHANGE_ACTIVE_PAGE,
  payload: index,
});
