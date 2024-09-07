// Read data from CSV
const fs = require('fs');

function readCsv(filePath) {
	const content = fs.readFileSync(filePath, 'utf8');
	return content.split('\n').map((line) => line.split(','));
}

// process data copy pasted
function calculateAverages(data) {
	return data.map((row) => [ row.reduce((sum, x) => sum + parseFloat(x), 0) / row.length ]);
}
function writeCsv(filePath, data) {
	const content = data.map((row) => row.join(',')).join('\n');
	fs.writeFileSync(filePath, content, 'utf8');
}

// Main Program
const inputPath = 'input.csv';
const outputPath = 'output.csv';
const data = readCsv(inputPath);
const processedData = calculateAverages(data);
writeCsv(outputPath, processedData);
