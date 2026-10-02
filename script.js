const startDate = new Date("2026-08-18T00:00:00");

function updateCounter(){
  const now = new Date();
  let diff = Math.max(0, now - startDate);
  const day = 86400000, hour = 3600000, minute = 60000;
  const days = Math.floor(diff/day); diff %= day;
  const hours = Math.floor(diff/hour); diff %= hour;
  const minutes = Math.floor(diff/minute); diff %= minute;
  const seconds = Math.floor(diff/1000);
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}
updateCounter();
setInterval(updateCounter,1000);

function showSurprise(){
  const box = document.getElementById("surprise");
  box.style.display = box.style.display === "block" ? "none" : "block";
  if(box.style.display === "block") box.scrollIntoView({behavior:"smooth",block:"center"});
}

function makeHeart(){
  const h=document.createElement("div");
  h.className="float-heart";
  h.textContent=Math.random()>.25?"♥":"♡";
  h.style.left=(Math.random()*100)+"vw";
  h.style.fontSize=(10+Math.random()*18)+"px";
  h.style.setProperty("--drift",(Math.random()*100-50)+"px");
  h.style.animationDuration=(7+Math.random()*7)+"s";
  document.querySelector(".hearts").appendChild(h);
  setTimeout(()=>h.remove(),15000);
}
setInterval(makeHeart,1200);
