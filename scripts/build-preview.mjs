import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const body = readFileSync(resolve(root, 'content/home.html'), 'utf8')
  .replaceAll('src="assets/', 'src="../assets/');
const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="A simple, playful Quarto website with a cartoon rabbit mascot.">
  <meta name="color-scheme" content="light">
  <title>Little Corner — A Playful Website</title>
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
${body}
</body>
</html>`;
mkdirSync(resolve(root, 'preview'), { recursive: true });
writeFileSync(resolve(root, 'preview/index.html'), html);
console.log('Preview created: preview/index.html');
