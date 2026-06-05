
const words=['B.E CSE','Developer','Editor','Cybersecurity Enthusiast'];

let i=0,j=0,current='',isDeleting=false;
function type(){
current=words[i];
document.getElementById('typing').textContent=current.substring(0,j);
if(!isDeleting){j++; if(j>current.length){isDeleting=true;setTimeout(type,1000);return;}}
else{j--; if(j===0){isDeleting=false;i=(i+1)%words.length;}}
setTimeout(type,isDeleting?50:100);
}
type();

const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('active');});
});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const counters=document.querySelectorAll('.counter');
counters.forEach(counter=>{
let target=+counter.dataset.target;
let c=0;
let interval=setInterval(()=>{
c++;
counter.innerText=c;
if(c>=target) clearInterval(interval);
},100);
});

document.addEventListener('mousemove',e=>{
const glow=document.querySelector('.cursor-glow');
glow.style.left=(e.clientX-125)+'px';
glow.style.top=(e.clientY-125)+'px';
});
