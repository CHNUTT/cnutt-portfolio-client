import { AppState } from './../reducers';
import { createSelector, Selector } from 'reselect';

const selectNavigation = (state: AppState) => state.navigation;

export const selectNavigationOpenStatus: Selector<AppState, boolean> =
  createSelector(selectNavigation, (navigation) => navigation.isSideMenuOpen);
