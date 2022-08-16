# n8n-nodes-base

This is a/my base for n8n community nodes.
The structure contains everything necessary to develop n8n nodes.
When using the template, this is also automatically adapted to the new repo and thus less work is required.


## What is the difference between this and the official n8n-nodes-starter

Basically it is meant for my n8n nodes. However, it is designed so that anyone can use this template.
It is not officially supported but if there are problems in this template I will also try to fix the problem.
Here is a list of the differences:
- dynamic tempalte with automatic adjustment
- workflow for testing and publishing the nodes
- complete eslint configuration (no tslint needed)
- prettier integrated directly into eslint with autofix
- separate eslint repo https://github.com/lublak/eslint-config-n8n-nodes-base
- issue templates for bugs and features
- no example nodes
- one eslint which reports all bugs directly on lintending

## Planned

- automatic testing of nodes
- generation of documentation
- automatic pull request for template changes

## Setup

- https://github.com/lublak/n8n-nodes-base/generate
- add NPM_AUTH_TOKEN to your github secrets: https://github.com/owner/repo/settings/secrets/actions

## Usage

https://docs.n8n.io/integrations/creating-nodes/build/
