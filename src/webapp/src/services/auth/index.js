import api from '../axios';

export default {
	test(data){
		return api.post('h5/askForInviteCode.htm', data);
	}
}
