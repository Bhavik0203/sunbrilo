const fs = require('fs');
const path = require('path');

const targetDirs = [
    'app/services',
    'app/solutions',
    'app/aboutus',
    'app/components'
];

const componentImport = `import LetsTalkModal from '@/app/components/LetsTalkModal';\n`;

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

// Regex to capture the entire modal block starting with {/* Modal */}
const modalRegex = /\{\/\*\s*Modal\s*\*\/\}\s*\{isModalOpen && \([\s\S]*?\<\/div\>\s*\)\}/;

targetDirs.forEach(dir => {
    const fullPath = path.join('e:/DTG/sunbrilo-website', dir);
    if (!fs.existsSync(fullPath)) return;
    
    walkDir(fullPath, (filePath) => {
        if (filePath.endsWith('.tsx') && !filePath.includes('LetsTalkModal.tsx')) {
            let content = fs.readFileSync(filePath, 'utf-8');
            if (modalRegex.test(content) && !content.includes('<LetsTalkModal')) {
                // Add import
                if (!content.includes('LetsTalkModal')) {
                    const importMatch = content.match(/import.*?;?\n/g);
                    if (importMatch) {
                        const lastImport = importMatch[importMatch.length - 1];
                        content = content.replace(lastImport, lastImport + componentImport);
                    } else {
                        content = componentImport + content;
                    }
                }
                
                // Replace modal
                content = content.replace(modalRegex, `{/* Modal */}\n      <LetsTalkModal isOpen={isModalOpen} onClose={closeModal} />`);
                
                fs.writeFileSync(filePath, content, 'utf-8');
                console.log('Updated', filePath);
            }
        }
    });
});
