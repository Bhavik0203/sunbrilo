const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

const ternaryRegex = /\{isSubmitted \? \([\s\S]*?<h3 className="text-2xl font-bold text-white mb-2 font-raleway">Thank You!<\/h3>[\s\S]*?<\/div>\s*\)\s*:\s*\(\s*(<form[\s\S]*?<\/form>)\s*\)\s*\}/g;

walkDir('app', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // 1. Remove the ternary in the 20 modal files
    if (content.match(ternaryRegex)) {
      content = content.replace(ternaryRegex, (match, formGroup) => {
        // Change the onSubmit handler to redirect
        let newForm = formGroup.replace(/onSubmit=\{\(e\) => \{ e\.preventDefault\(\); setIsSubmitted\(true\); \}\}/, "onSubmit={(e) => { e.preventDefault(); window.location.href = '/thank-you'; }}");
        return newForm;
      });
      changed = true;
    }

    // 2. Fix the contact-us/page.tsx form
    // The main form there has: onSubmit={(e) => e.preventDefault()}
    // Let's replace any remaining `onSubmit={(e) => e.preventDefault()}` with the redirect
    if (content.includes('onSubmit={(e) => e.preventDefault()}')) {
      content = content.replace(/onSubmit=\{\(e\) => e\.preventDefault\(\)\}/g, "onSubmit={(e) => { e.preventDefault(); window.location.href = '/thank-you'; }}");
      changed = true;
    }

    // 3. Fix ContactUsContent.tsx handleSubmit function
    if (content.includes('const handleSubmit = (e: React.FormEvent) => {')) {
      if (!content.includes('/thank-you')) {
        content = content.replace(
          /const handleSubmit = \(e: React\.FormEvent\) => \{\s*e\.preventDefault\(\);\s*console\.log\('Form submitted:', formData\);\s*\/\/[^\n]*\s*\};/g,
          `const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    window.location.href = '/thank-you';
  };`
        );
        changed = true;
      }
    }

    // Also update career page application form if there's any.
    // Let's replace any `handleSubmit` that just does preventDefault and console.log
    if (content.includes('const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {')) {
         if (!content.includes('/thank-you')) {
            content = content.replace(
              /const handleSubmit = \(e: React\.FormEvent<HTMLFormElement>\) => \{\s*e\.preventDefault\(\);\s*console\.log\([^)]+\);\s*alert\([^)]+\);\s*\};/g,
              `const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = '/thank-you';
  };`
            );
            changed = true;
         }
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated:', filePath);
    }
  }
});
