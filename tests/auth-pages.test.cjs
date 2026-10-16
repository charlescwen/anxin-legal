const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');

for (const page of ['auth-confirmed.html', 'auth-recovery.html']) {
  test(`${page} keeps the app callback hidden until a valid code is available`, () => {
    const html = readFileSync(new URL(`../${page}`, import.meta.url), 'utf8');
    assert.match(html, /<a class="button" id="open-app" href="#" hidden>/);
    assert.match(html, /\.button\[hidden\]\s*\{\s*display:\s*none\s*!important\s*\}/);
    assert.match(html, /button\.hidden\s*=\s*false/);
  });
}
