
function addStudent(params){
	const fs = require('fs');
	console.log('It worked!!');
fs.appendFileSync('student.txt','ID:'+params.id+'\n');
}

module.exports={
	addStudent,
}
