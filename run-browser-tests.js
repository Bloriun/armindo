const { execSync } = require('child_process');

function run(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8' }).trim();
  } catch (e) {
    return e.stdout || e.message;
  }
}

console.log('1. Open URL...');
console.log(run('npx agent-browser open http://127.0.0.1:4173/index.html'));

console.log('2. Click button beach (Residenciais)...');
console.log(run('npx agent-browser find role tab click --name Residenciais'));

console.log('3. Check catalog count text...');
console.log(run('npx agent-browser get text #catalog-count'));

console.log('4. Check hidden items count...');
console.log(run('npx agent-browser eval "Array.from(document.querySelectorAll(\'.catalog-item\')).filter(i => !i.classList.contains(\'hidden-item\')).length"'));
