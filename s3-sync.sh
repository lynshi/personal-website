#!/bin/bash
 aws s3 sync . s3://lynshi.com --exclude ".git/*" --exclude ".gitignore" --exclude ".vscode/*" --exclude "README.md" --exclude "node_modules/*" --exclude "package*.json" --exclude "src/*" --exclude "webpack.config.js" --exclude "*.sh" --exclude "*.zip" --delete