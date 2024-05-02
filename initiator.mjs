import { rmSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Remove git main directory.
try {
    rmSync('.git', { recursive: true, force: true });
} catch (err) {
    console.error(err);
}

// Remove git files.
['.gitmodules',
    'src/.git',
    'src/.gitignore',
    'src/.gitmodules',
    'src/style/.git',
    'src/style/.gitignore'].forEach(path => {
        try {
            rmSync(join(__dirname, path));
        } catch (err) {
            console.error(err);
        }
    });

// Create directories.
mkdirSync('src/style/pages');

// Remove this file.
rmSync('./initiator.mjs');