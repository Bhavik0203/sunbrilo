const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetForm = `<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>`;
const replacementForm = `{isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-raleway">Thank You!</h3>
                <p className="text-gray-300">Your message has been sent successfully. We will get back to you shortly.</p>
                <button type="button" onClick={() => { setIsSubmitted(false); setIsModalOpen(false); }} className="mt-6 px-6 py-2 bg-[#ffee50] text-[#3B3808] font-bold rounded-lg hover:bg-[#ffe500] transition-colors">
                  Close
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>`;

walkDir('app', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    let changed = false;
    
    // First, check if form needs replacement
    if (content.includes(targetForm)) {
      content = content.replace(targetForm, replacementForm);
      // Replace the end of the form to include the closing brace for the ternary operator.
      // Usually it ends with </form> inside the modal div.
      // To be safe we will just replace `</form>` with `</form>\n            )}` but only the LAST instance of `</form>` after our injected form.
      // Actually, since we replace the form start tag, we can just replace the FIRST `</form>` that appears after our replacement.
      // But a simple string replace of `</form>` might be dangerous if there are multiple forms.
      // Fortunately these modal pages usually have one modal form. Let's do a basic replace.
      
      // We know the modal structure usually is:
      // </form>
      // </div>
      // </div>
      // )}
      // We can replace the exact end structure.
      content = content.replace(/<\/form>\s*<\/div>\s*<\/div>\s*\)}/g, '</form>\n            )}\\n          </div>\\n        </div>\\n      )}');
      changed = true;
    }

    if (changed) {
      // Let's add state variable if needed
      if (content.includes('const [isModalOpen, setIsModalOpen] = useState(false);') && !content.includes('isSubmitted')) {
         content = content.replace('const [isModalOpen, setIsModalOpen] = useState(false);', 'const [isModalOpen, setIsModalOpen] = useState(false);\n  const [isSubmitted, setIsSubmitted] = useState(false);');
      } else if (content.includes('const [isModalOpen, setIsModalOpen] = useState<boolean>(false);') && !content.includes('isSubmitted')) {
         content = content.replace('const [isModalOpen, setIsModalOpen] = useState<boolean>(false);', 'const [isModalOpen, setIsModalOpen] = useState<boolean>(false);\n  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);');
      }

      // Special case where `closeModal` function is defined and sets modal open to false but does not reset isSubmitted
      if (content.includes('const closeModal = () => {')) {
        content = content.replace('const closeModal = () => {', 'const closeModal = () => {\n    setIsSubmitted(false);');
      }

      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated:', filePath);
    }
  }
});
