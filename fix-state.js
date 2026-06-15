const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('app', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We only care if we injected `setIsSubmitted` but didn't declare it.
    if (content.includes('setIsSubmitted(') && !content.includes('const [isSubmitted, setIsSubmitted] = useState(false);') && !content.includes('const [isSubmitted, setIsSubmitted] = useState<boolean>(false);')) {
      
      let changed = false;

      if (content.includes('const [isModalOpen, setIsModalOpen] = useState(false);')) {
         content = content.replace('const [isModalOpen, setIsModalOpen] = useState(false);', 'const [isModalOpen, setIsModalOpen] = useState(false);\n  const [isSubmitted, setIsSubmitted] = useState(false);');
         changed = true;
      } else if (content.includes('const [isModalOpen, setIsModalOpen] = useState<boolean>(false);')) {
         content = content.replace('const [isModalOpen, setIsModalOpen] = useState<boolean>(false);', 'const [isModalOpen, setIsModalOpen] = useState<boolean>(false);\n  const [isSubmitted, setIsSubmitted] = useState(false);');
         changed = true;
      }

      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Added useState in:', filePath);
      }
    }
  }
});
