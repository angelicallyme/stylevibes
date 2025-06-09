// Navegação suave function scrollToSection(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }

// Wishlist básica const wishlist = document.getElementById("wishlist");

function addToWishlist(itemName) { const li = document.createElement("li"); li.textContent = itemName; wishlist.appendChild(li); }

// Exemplo: simulando adição addToWishlist("Blusa cropped rosa pastel"); addToWishlist("Calça cargo bege");

// Upload da galeria das seguidoras const upload = document.getElementById("upload"); const galeria = document.getElementById("galeria");

upload?.addEventListener("change", (e) => { const file = e.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = function (event) { const img = document.createElement("img"); img.src = event.target.result; galeria.appendChild(img); }; reader.readAsDataURL(file); });

// Montador de Looks (simples) const montador = document.getElementById("montador"); if (montador) { const tops = ["top1.png", "top2.png"]; const bottoms = ["bottom1.png", "bottom2.png"];

const topImg = document.createElement("img"); const bottomImg = document.createElement("img"); topImg.style.marginRight = "1rem"; topImg.width = 100; bottomImg.width = 100;

let topIndex = 0; let bottomIndex = 0;

function updateLook() { topImg.src = tops[topIndex]; bottomImg.src = bottoms[bottomIndex]; }

const topBtn = document.createElement("button"); topBtn.textContent = "Trocar Top"; topBtn.onclick = () => { topIndex = (topIndex + 1) % tops.length; updateLook(); };

const bottomBtn = document.createElement("button"); bottomBtn.textContent = "Trocar Parte de Baixo"; bottomBtn.onclick = () => { bottomIndex = (bottomIndex + 1) % bottoms.length; updateLook(); };

montador.appendChild(topImg); montador.appendChild(bottomImg); montador.appendChild(document.createElement("br")); montador.appendChild(topBtn); montador.appendChild(bottomBtn);

updateLook(); }
