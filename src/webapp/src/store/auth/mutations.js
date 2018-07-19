import * as types from '../types';

export default {
  [types.USERINFO](state, payload) {
    state.userInfo = payload.userInfo;
  },
};
