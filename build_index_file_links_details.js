// build_index_file.js

const fs = require('fs');
const path = require('path');

// The folder we want to scan
let targetFolder = path.join(__dirname, 'src', 'tutorials');

// The file we want to create
let outputFile = path.join(__dirname, 'index_links.html');

// Helper function to format names (turns "aoo_object_methods.html" into "Aoo Object Methods")
function formatName(rawName) 
{
    let clean = rawName.replace('.html', '');
    clean = clean.replace(/_/g, ' ');
    
    // Capitalize the first letter of each word
    let words = clean.split(' ');
    for (let i = 0; i < words.length; i++) 
    {
        if (words[i].length > 0) 
        {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
    }
    return words.join(' ');
}

// The recursive scanner function
function scanDirectory(currentPath, relativePath) 
{
    let htmlString = "<ul>\n";
    
    // Read all items in the current folder
    let items = fs.readdirSync(currentPath);

    for (let i = 0; i < items.length; i++) 
    {
        let item = items[i];
        let fullItemPath = path.join(currentPath, item);
        let stat = fs.statSync(fullItemPath);
        
        let displayName = formatName(item);

        if (stat.isDirectory()) 
        {
            // If it is a folder, create a bold category header and dive inside
            htmlString += "<li><details><summary class='folder_title'>"+displayName+"</summary>\n";
            
            // Recursively call the function to build the sub-list
            htmlString += scanDirectory(fullItemPath, relativePath + item + "/");
            
            // Close the details tag and list item here
            htmlString += "</details></li>\n"; 
        } 
        else if (item.endsWith('.html')) 
        {
            // If it is an HTML file, create a clickable link
            let linkPath = "src/tutorials/" + relativePath + item;

            htmlString += "<li><a href='" + linkPath + "' target = 'blank'>" + displayName + "</a></li>\n";
        }
    }

    htmlString += "</ul>\n";
    return htmlString;
}

/*
// The recursive scanner function
function scanDirectory(currentPath, relativePath) 
{
    let htmlString = "<ul>\n";
    
    // Read all items in the current folder
    let items = fs.readdirSync(currentPath);

    for (let i = 0; i < items.length; i++) 
    {
        let item = items[i];
        let fullItemPath = path.join(currentPath, item);
        let stat = fs.statSync(fullItemPath);
        
        let displayName = formatName(item);

        if (stat.isDirectory()) 
        {
            // If it is a folder, create a bold category header and dive inside
            htmlString += "<li><details><summary class='folder_title'>"+displayName+"</summary>\n";
            // Recursively call the function to build the sub-list
            htmlString += scanDirectory(fullItemPath, relativePath + item + "/");
            htmlString += "</li>\n";
        } 
        else if (item.endsWith('.html')) 
        {
            // If it is an HTML file, create a clickable link
            let linkPath = "src/html/" + relativePath + item;

            htmlString += "<li><a href='" + linkPath + "' target = 'blank'>" + displayName + "</a></li>\n";

            //htmlString += "<li><iframe src='" + linkPath + "'>" + displayName + "</iframe></li>\n";
        }
    }

    htmlString += "</ul>\n";
    return htmlString;
}
    */

// ENGINE START
console.log("Scanning directories...");

// Build the HTML Menu String
let menuHTML = scanDirectory(targetFolder, "");

// Wrap it in a beautiful Starfleet-style Dark Theme Document
let fullHTML = "<!-- Dedicated to God the Father -->\n";
fullHTML += "<!-- CATopalian Starfleet Academy Index -->\n";
fullHTML += "<!DOCTYPE html>\n";
fullHTML += "<html lang='en'>\n";
fullHTML += "<head>\n";
fullHTML += "<title> Starfleet Academy Index </title>\n";
fullHTML += "<style>\n";
fullHTML += "body { margin: 0px; background-color: rgb(20, 20, 25); color: white; font-family: 'Segoe UI', Arial, sans-serif; padding: 2px; }\n";
fullHTML += ".headline { color: #00ffcc; border-bottom: 1px solid #444; padding-left: 5px; padding-bottom: 2px; }\n";
fullHTML += "ul { list-style-type: none; padding-left: 20px; border-left: 1px solid #333; margin-top: 2px; }\n";
fullHTML += "li { margin: 1px 0px; }\n";
fullHTML += ".folder_title { font-weight: bold; color: #ffcc00; font-size: 18px; }\n";
fullHTML += "a { color: #0088ff; text-decoration: none; font-size: 16px; transition: color 0.2s; }\n";
fullHTML += "a:hover { color: rgb(0, 255, 255); }\n";
fullHTML += "</style>\n";
fullHTML += "</head>\n";
fullHTML += "<body>\n";
fullHTML += "<div class = 'headline'> Tutorial Database Index </div>\n";
fullHTML += menuHTML;
fullHTML += "</body>\n";
fullHTML += "</html>";

// Write the file to the hard drive
fs.writeFileSync(outputFile, fullHTML);

console.log("Success! File has been generated.");

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

