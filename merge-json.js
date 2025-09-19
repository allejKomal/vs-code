const fs = require('fs');
const path = require('path');

const directories = ['typescript', 'tailwind', 'shadcn'];
const outputFiles = {
  'typescript': 'typescript.json',
  'tailwind': 'tailwind.json',
  'shadcn': 'shadcn.json'
};

function readJsonFile(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return {};
  }
}

function mergeSnippetsFromDir(snippetsDir) {
  const snippets = {};
  const files = fs.readdirSync(snippetsDir)
    .filter(file => file.endsWith('.json'))
    .sort(); // Sort files alphabetically

  files.forEach(file => {
    const filePath = path.join(snippetsDir, file);
    const fileSnippets = readJsonFile(filePath);
    Object.assign(snippets, fileSnippets);
  });

  return snippets;
}

function mergeAllSnippets() {
  directories.forEach(dir => {
    const snippetsDir = path.join(__dirname, dir);
    const mergedSnippets = mergeSnippetsFromDir(snippetsDir);
    const outputFilePath = path.join(__dirname, outputFiles[dir]);
    fs.writeFileSync(outputFilePath, JSON.stringify(mergedSnippets, null, 2));
    console.log(`Snippets from ${dir} merged and saved to ${outputFiles[dir]} successfully!`);
  });
}

mergeAllSnippets();
