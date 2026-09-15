const fs = require('fs');

try {
  let html = fs.readFileSync('C:\\Users\\user\\.gemini\\antigravity-ide\\brain\\423bfbbd-de39-4c3d-8dee-825eec6d6c3b\\scratch\\main_screen.html', 'utf8');

  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) {
    console.log("No body found");
    process.exit(1);
  }
  let body = bodyMatch[1];

  // React property conversions
  body = body.replace(/class=/g, 'className=');
  body = body.replace(/onclick=/g, 'onClick=');
  body = body.replace(/for=/g, 'htmlFor=');
  body = body.replace(/tabindex=/g, 'tabIndex=');
  body = body.replace(/stroke-width=/g, 'strokeWidth=');
  body = body.replace(/stroke-linecap=/g, 'strokeLinecap=');
  body = body.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  body = body.replace(/fill-rule=/g, 'fillRule=');
  body = body.replace(/clip-rule=/g, 'clipRule=');
  body = body.replace(/style="([^"]*)"/g, function(match, styleString) {
    // Basic inline style conversion for simple styles like `transform: translateX(0%);`
    // Actually the safest is just removing them if they are simple, or doing a rudimentary split
    // Let's just leave style as is and if build fails, we manually fix
    return `style={{ /* TODO: convert "${styleString}" */ }}`;
  });
  
  body = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Fix unclosed tags
  body = body.replace(/<img([^>]+?)(?<!\/)>\s*/gi, '<img$1 />');
  body = body.replace(/<br([^>]*?)(?<!\/)>\s*/gi, '<br$1 />');
  body = body.replace(/<hr([^>]*?)(?<!\/)>\s*/gi, '<hr$1 />');
  body = body.replace(/<input([^>]+?)(?<!\/)>\s*/gi, '<input$1 />');
  
  // HTML Comments to JSX Comments
  body = body.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  const jsx = `export default function Home() {
  return (
    <>
      ${body}
    </>
  );
}`;

  fs.writeFileSync('C:\\shellyn\\lain-lain\\portofolio\\app\\page.tsx', jsx);
  console.log("Conversion successful");
} catch(e) {
  console.error(e);
}
