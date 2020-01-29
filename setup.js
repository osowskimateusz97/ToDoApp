const fs = require('fs');

let dataJSON = fs.readFileSync('./storageData.json', 'utf8');
let tasks = JSON.parse(dataJSON);

const setup = (type, title) => {
	switch (type) {
		case 1:
			tasks = tasks.map((task, index) => ({ id: index + 1, task: task.title }));
			const id = tasks.length + 1;
			tasks.push({ id, title });
			dataJSON = JSON.stringify(tasks);
			fs.writeFileSync('./storageData.json', dataJSON, 'utf8');
			console.log(`Added ${title}`.green);
			break;
		case 2:
			console.log('Deleted');
			break;
		case 3:
			console.log('Show tasks');
	}
};

module.exports = setup;
