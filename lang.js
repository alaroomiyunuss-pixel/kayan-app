(function(){
  var q=new URLSearchParams(location.search).get('lang');
  var nav=(navigator.language||'nl').slice(0,2);
  var l=q||(['nl','en','ar'].indexOf(nav)>=0?nav:'nl');
  function set(x){
    document.querySelectorAll('[data-lang]').forEach(function(s){s.hidden=s.getAttribute('data-lang')!==x});
    document.querySelectorAll('.langs button').forEach(function(b){b.classList.toggle('on',b.dataset.l===x)});
    document.documentElement.lang=x;
  }
  document.querySelectorAll('.langs button').forEach(function(b){b.onclick=function(){set(b.dataset.l)}});
  set(l);
})();
