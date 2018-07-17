import api from '../webServer';

export default {
	menu(data){
		return api.post('/menu', data);
	}
}
