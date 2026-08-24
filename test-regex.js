const html = '<span style="color: #efefef; background-color: transparent; font-size: 12px;">Hello <a href="#" style="color: blue;">World</a></span>';
const clean = html.replace(/(?:color|background-color):\s*[^;"]+;?/gi, '');
console.log(clean);
