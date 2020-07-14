'use strict';

const fs = require('fs');
const yaml = require('js-yaml');


const data = yaml.safeLoad(fs.readFileSync('./repos.yml', 'utf-8'));

const output = [
  '👾 So many experiments, so little time.',
  ...Object.entries(data)
    .map(([category, repos]) => [
      `## ${category}`,
      Object.entries(repos)
        .map(([repo, desc]) => `- [${repo}](https://github.com/saltire/${repo}) – ${desc}`)
        .join('\n'),
    ])
    .flat(),
].join('\n\n');

fs.writeFileSync('./README.md', output);
