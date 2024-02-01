import { registerFont, createCanvas } from 'canvas';
import fs from 'fs';

const title = process.argv[2];
const date = process.argv[3];
const path = process.argv[4];

registerFont('./src/fonts/Gambarino-Regular.otf', { family: 'Gambarino' })
registerFont('./src/fonts/Satoshi-Regular.otf', { family: 'Satoshi' })

const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Add background
ctx.fillStyle = "#0c151f";
ctx.fillRect(0, 0, width, height);

ctx.textBaseline = "top";

// Write title
ctx.font = '110px Gambarino';
ctx.fillStyle = '#fee1c2';
wrapText(ctx, title, 80, 80, 1050, 110);

// Write date
ctx.textBaseline = "bottom";
ctx.font = '40px Satoshi';
ctx.fillText(date, 80, 555);

const buffer = canvas.toBuffer("image/png");
fs.writeFileSync(path, buffer);

function wrapText(context, text, x, y, maxWidth, lineHeight) {
	var words = text.split(' ');
	var line = '';

	for (var n = 0; n < words.length; n++) {
		var testLine = line + words[n] + ' ';
		var metrics = context.measureText(testLine);
		var testWidth = metrics.width;
		if (testWidth > maxWidth && n > 0) {
			context.fillText(line, x, y);
			line = words[n] + ' ';
			y += lineHeight;
		} else {
			line = testLine;
		}
	}
	context.fillText(line, x, y);
}