import { PUSH, POP } from '../actions/routing'
import { NavigationExperimental } from 'react-native';

const { StateUtils: NavigationStateUtils } = NavigationExperimental;


type UserStateType = {
  index: number,
  routes: object[]
};

const initState: RoutingStateType = {
  index: 0,
  routes: [{key: 'home'}]
};

export default (state: RoutingStateType = initState, action: BaseAction): UserStateType => {

  switch (action.type) {
    case PUSH: {
      const nextState = NavigationStateUtils.push(state, action.route);
      return nextState;
    }
    case POP: {
      const nextState = NavigationStateUtils.pop(state);
      return nextState;
    }
    default:
      return state;
  }
};