# n8n-nodes-base

This is a basis for community n8n nodes.

## What is the difference between this and the official n8n-nodes-starter

This basis is basically only meant for my developed nodes.
Therefore it is rather unsupported.
Basically, there are no example nodes here, but for me the corresponding standard template for a complete github repo with workflow and issue templates.
Of course you are still free to use this as your base.

## Setup

- add NPM_AUTH_TOKEN to your github secrets: https://github.com/owner/repo/settings/secrets/actions
- https://github.com/lublak/n8n-nodes-base/generate

## Usage
- npm install
-	Create nodes/credentials
	Optional:
	-	npm install n8n-node-dev -g
	- cd nodes
	- n8n-node-dev new