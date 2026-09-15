const fs = require('fs');

let code = fs.readFileSync('C:\\shellyn\\lain-lain\\portofolio\\app\\page.tsx', 'utf8');

// Fix onSubmit
code = code.replace(/onsubmit=/g, 'onSubmit=');

// Fix onClick strings
code = code.replace(/onClick="([^"]*)"/g, 'onClick={() => { $1 }}');
code = code.replace(/onClick='([^']*)'/g, "onClick={() => { $1 }}");

// Fix boolean props that are written as strings
code = code.replace(/\b(required|disabled|checked|autoFocus|readOnly)="[^"]*"/g, '$1');

// Fix numeric props that are written as strings
code = code.replace(/\brows="(\d+)"/g, 'rows={$1}');
code = code.replace(/\bcols="(\d+)"/g, 'cols={$1}');
code = code.replace(/\btabIndex="(\d+)"/g, 'tabIndex={$1}');

fs.writeFileSync('C:\\shellyn\\lain-lain\\portofolio\\app\\page.tsx', code);
console.log("Fixes applied successfully");
