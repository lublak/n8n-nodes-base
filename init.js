import fs from 'fs/promises';

const repo = process.env.GITHUB_REPOSITORY;
const slash_index = repo.indexOf('/');
const owner = repo.substring(0, slash_index);
const repo_name = repo.substring(slash_index+1);

/**
 * replace ${{#name#}} in data with value
 * @param {string} data
 * @param {string} name
 * @param {string} value
 * @return {string}
 */
function fillReplace(data, name, value) {
  return data.replace(new RegExp('\\$\\{\\{#' + name + '#\\}\\}', 'g'), value);
}

/**
 * fill out the file
 * @param {string} file
 */
async function apply(file) {
  let data = await fs.readFile(file);
  data = fillReplace(data, 'REPO_NAME', repo_name);
  data = fillReplace(data, 'REPO_OWNER', owner);
  data = fillReplace(data, 'REPO_FULLNAME', repo);
  fs.writeFile(file, data);
}
async function init() {
  await fs.unlink('README.md');
  await fs.rename('README.template.md', 'README.md');
  await apply('README.md');
  await apply('package.json');
  await apply('package-lock.json');
  await apply('LICENSE');
  await apply('.github/ISSUE_TEMPLATE/bug_report.yml');
  await apply('.github/ISSUE_TEMPLATE/feature_request.yml');
  await apply('nodes/README.md');
  await apply('credentials/README.md');
}

init();