(()=>{
  const cases=window.REPLAY_CASES,select=document.querySelector('#replay-task');
  if(!cases||!select)return;
  const el=id=>document.getElementById(id),range=el('replay-range');
  for(const c of cases){const option=document.createElement('option');option.value=c.task;option.textContent=c.title;select.append(option)}
  let current,index=0;
  function frame(){
    const f=current.frames[index];if(!f)return;
    el('replay-image').src=f.src;
    el('replay-image').alt=`${current.title}: ${f.source.includes('hosted')?'viewer step':'local entry'} ${f.entry}`;
    range.value=index;range.setAttribute('aria-valuetext',`Checkpoint ${index+1} of ${current.frames.length}, entry ${f.entry}`);
    el('replay-prev').disabled=index===0;el('replay-next').disabled=index===current.frames.length-1;
    el('replay-position').textContent=`Checkpoint ${index+1} / ${current.frames.length} · ${f.source.includes('hosted')?'Hosted viewer step':'Local entry'} ${f.entry} · ${f.local_image}. A hosted step can show the observation preceding its action.`;
  }
  function checkpoints(){
    el('hosted-player').replaceChildren();el('hosted-player').hidden=true;el('checkpoint-player').hidden=false;el('replay-back').hidden=true;el('replay-load').hidden=!current.url;
    el('replay-status').textContent=current.url?'The embedded player connects directly to trajectories.sh when loaded. If it cannot load, use the new-tab link or return to checkpoints.':'The selected hosted URL was unavailable. These checkpoints come from the exact retained local recording; no sibling run is substituted.';
  }
  function choose(task){
    current=cases.find(c=>c.task===task)||cases[0];select.value=current.task;index=0;range.max=current.frames.length-1;
    el('replay-external').hidden=!current.url;if(current.url)el('replay-external').href=current.url;else el('replay-external').removeAttribute('href');
    el('replay-bundle').href=`evidence/${current.task}.zip`;checkpoints();frame();
  }
  select.addEventListener('change',()=>choose(select.value));range.addEventListener('input',()=>{index=Number(range.value);frame()});
  el('replay-prev').addEventListener('click',()=>{if(index>0){index--;frame()}});el('replay-next').addEventListener('click',()=>{if(index<current.frames.length-1){index++;frame()}});
  el('replay-load').addEventListener('click',()=>{
    if(!current.url)return;const iframe=document.createElement('iframe');iframe.src=current.url;iframe.title=`Full trajectory: ${current.title}`;iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';
    el('hosted-player').replaceChildren(iframe);el('hosted-player').hidden=false;el('checkpoint-player').hidden=true;el('replay-load').hidden=true;el('replay-back').hidden=false;
  });
  el('replay-back').addEventListener('click',checkpoints);
  document.querySelectorAll('[data-replay-task]').forEach(button=>button.addEventListener('click',()=>{choose(button.dataset.replayTask);el('replay-theater').scrollIntoView({behavior:'instant',block:'start'})}));
  choose('task16_store_management_workflows');
})();
