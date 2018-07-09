import * as types from '../types';

export default {
  login({commit, dispatch}) {
		commit({
			type: types.LOGIN,
			token: new Date().getTime(),
		});
	}
}
