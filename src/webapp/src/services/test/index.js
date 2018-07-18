import api from '../nodeServer';

export default {
	menu(data){
		return api.post('/api/menu', data);
	}
}
