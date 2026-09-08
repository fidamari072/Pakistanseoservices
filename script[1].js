const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');if(menu){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)})}
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;document.querySelector('.progress').style.width=(scrollY/h*100)+'%'})
const search=document.querySelector('#industrySearch'),grid=document.querySelector('#industryGrid'),no=document.querySelector('#noResults');let activeFilter='all';
function apply(){if(!grid)return;const q=(search?.value||'').toLowerCase();let visible=0;grid.querySelectorAll('.industry-card').forEach(c=>{const n=c.dataset.name;const ok=n.includes(q);c.style.display=ok?'block':'none';if(ok)visible++});if(no)no.style.display=visible?'none':'block'}
if(search)search.addEventListener('input',apply);
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');activeFilter=b.dataset.filter;apply()}));
const form=document.querySelector('#contactForm');if(form)form.addEventListener('submit',e=>{e.preventDefault();const note=document.querySelector('#formNote');note.textContent='Thanks — your inquiry is ready. Connect this form to your email/CRM endpoint before production launch.';form.reset()});
