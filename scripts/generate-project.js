const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function generateProject() {
  const projectName = await prompt('Enter your project name: ');
  const projectDir = path.join(process.cwd(), projectName);

  console.log(`Creating new project in ${projectDir}...`);

  // Create project directory
  fs.mkdirSync(projectDir);

  // Clone template repository
  execSync(
    `git clone https://github.com/your-username/your-template-repo.git ${projectDir}`
  );

  // Remove .git directory
  fs.rmSync(path.join(projectDir, '.git'), { recursive: true, force: true });

  // Initialize new git repository
  execSync('git init', { cwd: projectDir });

  // Update package.json
  const packageJsonPath = path.join(projectDir, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  packageJson.name = projectName;
  packageJson.version = '0.1.0';
  packageJson.description = await prompt(
    'Enter a brief description for your project: '
  );
  packageJson.author = await prompt('Enter the author name: ');
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { cwd: projectDir });

  console.log(`
Project ${projectName} has been created successfully!
To get started:

  cd ${projectName}
  npm run dev

Happy coding!
  `);

  rl.close();
}

generateProject().catch(console.error);
