import { rmdirSync, unlinkSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Remove git main directory.
rmdirSync('.git');

// Remove git files.
['.gitmodules',
    'src/.git',
    'src/.gitignore',
    'src/.gitmodules',
    'src/style/.git',
    'src/style/.gitignore'].forEach(path => unlinkSync(join(__dirname, path)));

// Create directories.
mkdirSync('src/style/pages');

// Remove this file.
unlinkSync('./initiator.mjs');