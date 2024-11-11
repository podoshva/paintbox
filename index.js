const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

if (ctx) {
	let isDrawing = false;
	canvas.width = 200;
	canvas.height = 200;
	canvas.addEventListener('mousedown', e => {
		// console.log('mousedown');
		isDrawing = true;
		const rect = canvas.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		// console.log('x: ' + x + ' y: ' + y);
		ctx.fillRect(x, y, 5, 5);
	});
	canvas.addEventListener('touchstart', e => {
		isDrawing = true;
		const rect = canvas.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		console.log('x: ' + x + ' y: ' + y);
		ctx.fillRect(x, y, 5, 5);
	});
	canvas.addEventListener('mouseup', () => {
		isDrawing = false;
	});
	canvas.addEventListener('mousemove', e => {
		if (isDrawing) {
			const rect = canvas.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			// console.log('x: ' + x + ' y: ' + y);
			ctx.fillRect(x, y, 5, 5);
		}
	});

	canvas.addEventListener('touchmove', e => {
		// console.log(e);
		if (isDrawing) {
			const rect = canvas.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			// console.log('x: ' + x + ' y: ' + y);
			ctx.fillRect(x, y, 5, 5);
		}
	});
} else {
	console.log('your browser is shit, install a normal browser please');
}

document.body.appendChild(canvas);
