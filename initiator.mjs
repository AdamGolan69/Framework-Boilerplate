import { readFile, writeFile, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Remove git files.
unlinkSync(join(__dirname, '.gitmodules'));
unlinkSync(join(__dirname, 'src/.git'));
unlinkSync(join(__dirname, 'src/.gitignore'));
unlinkSync(join(__dirname, 'src/.gitmodules'));
unlinkSync(join(__dirname, 'src/style/.git'));
unlinkSync(join(__dirname, 'src/style/.gitignore'));

// Rewrite git config.
readFile('./.git/config', { encoding: 'utf-8' }, (err, data) => {
    err
        ? console.log(err)
        : writeFile('./.git/config',
            data.slice(data.indexOf(0, '[submodule')),
            { encoding: 'utf-8' },
            // Remove this file.
            () => unlinkSync('./initiator.mjs'));
});