import { FETCH_LATEST, FETCHED_LATEST, ERROR } from '../actions/properties';

type PropertiesStateType = {
  fetching: boolean,
  latestProperties: object[],
  error: object
};

const initState: PropertiesStateType = {
  fetching: false,
  latestProperties: [],
  error: null
};

export default (state: PropertiesStateType = initState, action: BaseAction): PropertiesStateType => {
  switch (action.type) {
    case FETCH_LATEST: {
      return {
        ...state,
        fetching: true,
        latestProperties: [],
        error: null
      };
    }
    case FETCHED_LATEST: {
      return {
        ...state,
        fetching: false,
        latestProperties: action.latest,
        error: null
      };
    }
    case ERROR: {
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    }
    default:
      return state;
  }
};