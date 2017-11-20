const initialState = {
  user: {
    name: 'Anonymous Jim',
    anonymous: true,
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
