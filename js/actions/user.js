export const LOGIN = 'USER/LOGIN';
export const LOGOUT = 'USER/LOGOUT';
export const ERROR = 'USER/ERROR';


export const login = (user) => {
  return { type: LOGIN, user };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const error = (error) => {
  return { type: ERROR, error };
};