const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('0WNTCRplRs', uuidlib.v4());
	}

module.exports = generateId
