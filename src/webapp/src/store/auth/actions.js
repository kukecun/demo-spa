import * as types from '../types';

export default {
	
  userInfo({commit, dispatch}) {

		commit({
			type: types.USERINFO,
			userInfo: new Date().getTime(),
		});
	},
}
