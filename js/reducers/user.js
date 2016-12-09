type UserStateType = {

};

const initState: UserStateType = {

};

export default (state: UserStateType = initState, action: BaseAction): UserStateType => {
  switch (action.type) {
    default:
      return state;
  }
};