let todas = [];
function mostrar(lista){
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  if(lista.length==0){ grid.innerHTML='<p>No hay noticias de esta categoría.</p>'; return; }
  lista.forEach(n=>{
    grid.innerHTML += `<article class="news-card"><div class="news-image">⚽</div><div class="news-content"><small>${n.fuente} - ${n.categoria}</small><h3>${n.titulo}</h3><p>${n.resumen}</p><a href="${n.link}" target="_blank">Leer más →</a></div></article>`;
  });
}
function filtrar(cat){
  document.querySelectorAll('.nav-content a').forEach(a=>a.classList.remove('active'));
  document.getElementById('btn-'+cat).classList.add('active');
  if(cat=='todas') mostrar(todas);
  else mostrar(todas.filter(n=>n.categoria==cat));
}
fetch('noticias.json?v='+Date.now()).then(r=>r.json()).then(data=>{
  todas=data; mostrar(todas);
});
