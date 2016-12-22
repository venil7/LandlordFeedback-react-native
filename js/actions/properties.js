import db from '../firebase';

export const FETCH_LATEST = 'PROPERTIES/FETCH_LATEST';
export const FETCHED_LATEST = 'PROPERTIES/FETCHED_LATEST';
export const ERROR = 'PROPERTIES/ERROR';

export const fetchedLatest = (latest) => {
  return { type: FETCHED_LATEST, latest };
};

export const fetchLatest = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_LATEST });
  const result = await db.ref('/properties').once('value');
  const properties = result.val();
  dispatch(fetchedLatest(properties));
};

export const error = (error) => {
  return { type: ERROR, error };
};