import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const currentDir = process.cwd();

const venvDir = path.join(currentDir, 'venv');
const requirementsFile = path.join(currentDir, 'scripts/requirements.txt');

export function setupPythonEnv() {
    if (!fs.existsSync(venvDir)) {
        console.log('🔧 Creating virtual environment...');
        execSync('python3 -m venv venv', { cwd: currentDir, stdio: 'inherit' });
    } else {
        console.log('✅ Virtual environment already exists.');
    }

    console.log('📦 Installing Python dependencies...');
    const pipPath = path.join(venvDir, 'bin', 'pip');
    execSync(`${pipPath} install -r ${requirementsFile}`, {
        cwd: currentDir,
        stdio: 'inherit',
    });
}
