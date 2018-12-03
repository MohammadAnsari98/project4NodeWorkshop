
function addTask(params){
	const fs = require('fs');
	console.log('It worked!!');
fs.appendFileSync('tasks.txt','ID:'+params.id+'\n');
}

module.exports={
	addTask,
}
