const fs = require('fs');

let dataJSON = fs.readFileSync('./storageData.json', 'utf8');
let tasks = JSON.parse(dataJSON);

const setup = (type, title) => {
	switch (type) {
		case 1:
			tasks = tasks.map((task, index) => ({ id: index + 1, title: task.title }));
			const id = tasks.length + 1;
			tasks.push({ id, title });
			dataJSON = JSON.stringify(tasks);
			fs.writeFileSync('./storageData.json', dataJSON);
			console.log(`Added ${title}`.green);
			break;
		case 2:
			const findIndex = tasks.findIndex((task) => task.title === title);
			if (findIndex === -1) {
				console.log('Nie mamy w bazie takiego zadania.'.red);
			}
			tasks.splice(findIndex, 1);
			tasks = tasks.map((task, index) => ({ id: index + 1, title: task.title }));
			dataJSON = JSON.stringify(tasks);
			fs.writeFileSync('./storageData.json', dataJSON);
			break;
		case 3:
			tasks.forEach((task) => console.log(task.title.yellow));
	}
};

module.exports = setup;
console.log(module);
