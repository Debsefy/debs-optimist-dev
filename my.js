
  /* Navbar */
  const nav=document.getElementById('navbar');
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>40));

  /* Reveal */
  const ro=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target);}}),{threshold:.1});
  document.querySelectorAll('.reveal').forEach(r=>ro.observe(r));

  /* Skill bars */
  const so=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.querySelectorAll('.skill-fill').forEach((b,i)=>{
          setTimeout(()=>b.style.transform=`scaleX(${b.dataset.w||1})`,i*130);
        });
        so.unobserve(e.target);
      }
    });
  },{threshold:.3});
  const se=document.getElementById('skillBars');
  if(se)so.observe(se);

  /* Form */
  function handleSubmit(btn){
    btn.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    btn.disabled=true;
    setTimeout(()=>{
      btn.innerHTML='<i class="fa-solid fa-check"></i> Message Sent!';
      btn.style.background='#22c55e';
      setTimeout(()=>{btn.innerHTML='<i class="fa-solid fa-paper-plane"></i> Send Message';btn.style.background='';btn.disabled=false;},3000);
    },1400);
  }
