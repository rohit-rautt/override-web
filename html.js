#!/usr/bin/env node

const fs = require('fs').promises;

const removeCspMetaTag = (html) => {
    return html.replace(/<meta\s+http-equiv="Content-Security-Policy".*?\/?>\s*/i, '');
};


const replaceString = (html) => {
    return html.replace(/\/dist-\d+-/g, 'http://localhost:8001/');
};

const processHtmlFile = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        let updatedHtml = removeCspMetaTag(data);
        updatedHtml = replaceString(updatedHtml);
        await fs.writeFile(filePath, updatedHtml, 'utf8');
        console.log('File updated successfully!!');
    } catch (error) {
        console.error(`Error processing the file: ${error.message}`);
    }
};

// Get the file path from command line arguments
const filePath = process.argv[2];
const cleanFilePath = decodeURIComponent(filePath.replace(/^file:\/\//, ''));

if (!cleanFilePath) {
    console.error('Please provide a file path as an argument.');
    process.exit(1);
}

// Run the processing function
processHtmlFile(cleanFilePath);