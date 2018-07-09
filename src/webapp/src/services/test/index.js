import api from '../nodeServer';

export default {
	test(data){
		return api.post('/api/test', data);
	}
}
