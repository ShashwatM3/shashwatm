(()=>{
  const paper=location.pathname.endsWith('/paper.html')||new URLSearchParams(location.search).get('theme')==='paper';
  document.documentElement.dataset.theme=paper?'paper':'dark';
  const sheet=document.getElementById('dark-theme');if(sheet)sheet.disabled=paper;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content',paper?'#faf9f7':'#080808');
  document.addEventListener('DOMContentLoaded',()=>{
    const main=['','index.html','dark.html','paper.html'].includes(location.pathname.split('/').pop());
    document.querySelectorAll('[data-variation]').forEach(a=>{
      const variant=a.dataset.variation;a.setAttribute('aria-current',variant===(paper?'paper':'dark')?'page':'false');
      a.href=main?(variant+'.html'+location.hash):(location.pathname.split('/').pop()+(variant==='paper'?'?theme=paper':'')+location.hash);
      a.addEventListener('click',()=>{const active=document.querySelector('.toc a.active');const hash=location.hash||(active?.hash||'');a.hash=hash});
    });
    if(paper)document.querySelectorAll('a[href]').forEach(a=>{
      if(a.hasAttribute('data-variation'))return;
      const raw=a.getAttribute('href');if(!raw||raw.startsWith('#'))return;
      const u=new URL(a.href,location.href);if(u.origin!==location.origin)return;
      const name=u.pathname.split('/').pop();
      if(name==='index.html'){u.pathname=u.pathname.replace(/index\.html$/,'paper.html');a.href=u.href}
      else if(['research.html','validity.html','claims.html','source-index.html'].includes(name)){u.searchParams.set('theme','paper');a.href=u.href}
    });
    const button=document.querySelector('.share-button'),status=document.querySelector('.share-status');
    button?.addEventListener('click',async()=>{
      try{await navigator.clipboard.writeText(location.href);status.textContent='Link copied';setTimeout(()=>status.textContent='',2500)}
      catch{status.textContent='Copy the address from your browser.'}
    });
  });
})();
