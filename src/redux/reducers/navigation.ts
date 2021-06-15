import { navigationActionTypes } from '../types';

const INIT_STATE = {
  isSideMenuOpen: false,
  currentPage: 0,
};

const NavigationReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case navigationActionTypes.TOGGLE_NAVIGATION_BAR:
      return {
        ...state,
        isSideMenuOpen: !state.isSideMenuOpen,
      };
    case navigationActionTypes.CHANGE_ACTIVE_PAGE:
      return {
        ...state,
        isSideMenuOpen: false,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default NavigationReducer;
