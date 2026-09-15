const fs = require('fs');
let code = fs.readFileSync('C:\\shellyn\\lain-lain\\portofolio\\app\\page.tsx', 'utf8');

// 1. Add imports to the top
if (!code.includes('import AOS')) {
  code = code.replace(
    /"use client";\s*/,
    `"use client";\nimport { useEffect } from 'react';\nimport AOS from 'aos';\nimport 'aos/dist/aos.css';\n\n`
  );
}

// 2. Add useEffect inside Home component
if (!code.includes('AOS.init')) {
  code = code.replace(
    /export default function Home\(\) {\s*return \(/,
    `export default function Home() {\n  useEffect(() => {\n    AOS.init({\n      duration: 800,\n      once: true,\n      easing: 'ease-out-cubic',\n      offset: 50,\n    });\n  }, []);\n\n  return (`
  );
}

// 3. Add data-aos attributes
code = code.replace(/<section (className="[^"]*")/g, '<section data-aos="fade-up" $1');
code = code.replace(/(<div className="[^"]*bg-surface-pure[^"]*rounded-xl[^"]*")/g, '$1 data-aos="fade-up" data-aos-delay="100"');
code = code.replace(/(<div className="[^"]*group border[^"]*rounded-xl[^"]*")/g, '$1 data-aos="fade-up" data-aos-delay="100"');
code = code.replace(/(<div className="[^"]*bg-charcoal text-white shadow-xl flex flex-col[^"]*")/g, '$1 data-aos="fade-up" data-aos-delay="200"');

fs.writeFileSync('C:\\shellyn\\lain-lain\\portofolio\\app\\page.tsx', code);
console.log("AOS applied successfully");
