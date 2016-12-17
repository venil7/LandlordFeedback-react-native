import { LOGIN, LOGOUT, ERROR } from '../actions/user'

type UserStateType = {
  user: {

  }
};

const initState: UserStateType = {
  user: null,
  error: null
};

export default (state: UserStateType = initState, action: BaseAction): UserStateType => {

  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.user,
        error: null
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
        error: null
      };
    }
    case ERROR: {
      return {
        ...state,
        user: null,
        error: action.error
      };
    }
    default:
      return state;
  }
};