import { navigationActionTypes } from '../types';

const INIT_STATE = {
  isSideMenuOpen: false,
};

const NavigationReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case navigationActionTypes.TOGGLE_NAVIGATION_BAR:
      return {
        ...state,
        isSideMenuOpen: !state.isSideMenuOpen,
      };
    default:
      return state;
  }
};

export default NavigationReducer;
