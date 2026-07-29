const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'app');

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file === 'page.tsx' || file === 'layout.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let relativePath = path.relative(baseDir, directory).replace(/\\/g, '/');
      
      if (relativePath.includes('[') && relativePath.includes(']')) {
        return;
      }
      
      let canonicalUrl = '/' + relativePath;
      if (canonicalUrl === '//') canonicalUrl = '/'; 
      
      if (content.includes('export const metadata: Metadata = {') || content.includes('export const metadata = {')) {
        if (!content.includes('alternates: {')) {
          const match = content.match(/export const metadata(?:.*?)=\s*\{/);
          if (match) {
            const injectIndex = match.index + match[0].length;
            const before = content.slice(0, injectIndex);
            const after = content.slice(injectIndex);
            
            const newContent = before + "\n  alternates: { canonical: '" + canonicalUrl + "' }," + after;
            fs.writeFileSync(fullPath, newContent, 'utf8');
            console.log("Updated " + fullPath + " with canonical: " + canonicalUrl);
          }
        }
      }
    }
  });
}

processDirectory(baseDir);
console.log("Done updating static pages.");
