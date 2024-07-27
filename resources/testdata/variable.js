const LOGIN_USERS = {
	LOCKED: {
	 username: 'locked_out_user',
	 password: 'secret_sauce',
	},
	NO_MATCH: {
	 username: '1@2.com',
	 password: 'f-o-o',
	},
	NO_USER_DETAILS: {
	 username: '',
	 password: '',
	},
	NO_PASSWORD: {
		username: 'standard_user',
		password: '',
	},
	NO_USERNAME: {
		username: '',
		password: 'secret_sauce',
	},
	STANDARD: {
		username: 'standard_user',
		password: 'secret_sauce',
	},
   };
module.exports = { LOGIN_USERS };

