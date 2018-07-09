import * as types from '../types';

export default {
  [types.LOGIN](state, payload) {
    state.authenticated = payload.token;
  },
};
