const fs = require('fs');
const path = require('path');

const snippetsDir = path.join(__dirname, 'typescript');

const outputFilePath = path.join('typescriptreact.json');

function readJsonFile(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return {};
  }
}

function mergeSnippets() {
  const snippets = {};

  const files = fs.readdirSync(snippetsDir)
    .filter(file => file.endsWith('.json'))
    .sort(); // Sort files alphabetically

  files.forEach(file => {
    const filePath = path.join(snippetsDir, file);
    const fileSnippets = readJsonFile(filePath);
    Object.assign(snippets, fileSnippets);
  });

  fs.writeFileSync(outputFilePath, JSON.stringify(snippets, null, 2));

  console.log('Snippets merged and sorted successfully!');
}

mergeSnippets();
