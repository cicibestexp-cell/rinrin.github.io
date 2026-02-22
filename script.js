document.addEventListener('DOMContentLoaded',()=>{
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');

  function activate(targetId){
    tabs.forEach(t=>{
      const is = t.dataset.target === targetId;
      t.classList.toggle('active',is);
      t.setAttribute('aria-selected',is);
    });

    panels.forEach(p=>{
      const is = p.id === targetId;
      if(is){
        p.hidden = false;
        p.classList.add('active');
      } else {
        p.hidden = true;
        p.classList.remove('active');
      }
    });
  }

  tabs.forEach(t=>t.addEventListener('click',()=>activate(t.dataset.target)));

  const viewBtns = document.querySelectorAll('.view-btn');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.modal-close');

  viewBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      modalImage.src = btn.dataset.image;
      modal.hidden = false;
    });
  });

  closeBtn.addEventListener('click',()=>{
    modal.hidden = true;
  });

  modal.addEventListener('click',(e)=>{
    if(e.target === modal) modal.hidden = true;
  });
});
