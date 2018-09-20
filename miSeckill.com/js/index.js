var tabs = document.getElementById("tabs").getElementsByTagName("li");
var lists = document.getElementById("lists").getElementsByTagName("ul");

for (var i = 0; i < tabs.length; i++) {
  tabs[i].onclick = showlist;
}

function showlist() {
  for (var i = 0; i < tabs.length; i++) {
    if (tabs[i] === this) {
      tabs[i].className = "active";
      lists[i].className = "active clear-float";
    } else {
      tabs[i].className = "";
      lists[i].className = "clear-float";
    }
  }
}

var seckillNav = document.getElementById("seckillNav");

window.onscroll = function() {
  var scrollTop = document.documentElement.scrollTop;
  if (scrollTop >= 265)
    seckillNav.className = "seckill-nav seckill-navfixed container";
  else
    seckillNav.className = "seckill-nav container";

  }

var cartM = document.getElementById("cartM");
var hov = document.getElementById("hov");
var topC = document.getElementsByClassName("topbar-cart")[0];
console.log(cartM, topC);

topC.onmouseover = function() {
  cartM.style.display = "block";
  hov.className = "active";
}
topC.onmouseout = function() {
  cartM.removeAttribute('style');
  hov.className = "";
}
