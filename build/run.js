const childProcess = require('child_process');
const path = require('path');
const os = require('os');

function joinPath(name) {
	return path.join(__dirname, '../' + name);
}
const filePath = {
	vue2: joinPath('vue2'),
	vue3: joinPath('vue3'),
	react17: joinPath('react17'),
	// 'react15': joinPath('react15'),
	service: joinPath('service'),
};

function runChild() {
	let portShell = ''
	if (os.type() === 'Windows_NT') {
		// windows
		portShell = `set`
	} else if (os.type() === 'Darwin') {
		//mac
		portShell = ``
	} else if (os.type() === 'Linux') {
		//Linux
	} else{
		//不支持提示
	}
	Object.values(filePath).forEach((item, index) => {
		// childProcess.spawn(`cd ${item} && ${portShell} PORT=${8080 + index}&& npm run start`, {
		// 	stdio: 'inherit',
		// 	shell: true
		// });
		childProcess.spawn(`cd ${item} && npm run start`, {
			stdio: 'inherit',
			shell: true
		});
	});
}
runChild();
