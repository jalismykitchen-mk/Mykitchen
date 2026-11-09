const WHATSAPP_MESSAGE = "Hello {name}, I met you at EXPO 2026. I would like to know more about your products and services. Please share the details. Thank you.";
async function init(){
 const res=await fetch("data/staff.json"); const staff=await res.json();
 const id=new URLSearchParams(location.search).get("id");
 const profile=document.getElementById("profile"), directory=document.getElementById("directory"), nf=document.getElementById("not-found");
 if(id){
  const person=staff.find(x=>x.id===id);
  directory.hidden=true;
  if(!person){nf.hidden=false;return;}
  profile.hidden=false;
  document.title=person.name+" | EXPO 2026";
  document.getElementById("avatar").textContent=person.name.split(/\\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase();
  document.getElementById("name").textContent=person.name;
  document.getElementById("designation").textContent=person.designation;
  document.getElementById("workplace").textContent=person.workplace;
  document.getElementById("phone").textContent="+"+person.phone;
  const msg=WHATSAPP_MESSAGE.replaceAll("{name}",person.name);
  document.getElementById("whatsapp").href="https://wa.me/"+person.phone+"?text="+encodeURIComponent(msg);
 }else{
  const list=document.getElementById("staff-list");
  const render=(q="")=>{list.innerHTML="";staff.filter(x=>(x.name+" "+x.designation+" "+x.workplace).toLowerCase().includes(q.toLowerCase())).forEach(x=>{const a=document.createElement("a");a.className="staff-item";a.href="?id="+x.id;a.innerHTML="<b></b><span></span>";a.querySelector("b").textContent=x.name;a.querySelector("span").textContent=x.designation;list.appendChild(a);});};
  render();document.getElementById("search").addEventListener("input",e=>render(e.target.value));
 }
}
init().catch(()=>{document.getElementById("not-found").hidden=false;});
