// Conectar de HTML con JS
 
const song_form = document.getElementById('song_form');
const playList = document.getElementById('playList')
 
// Función para agregar canciones
 
function addsong(songName, songArtist, songLink) {
    const item = document.createElement('li');
    item.innerHTML = `
    <strong>${songName}<strong> - ${songArtist}
    <a href = "${songLink}"> 🎵 Reproducir<a>
    <button class="delete-btn">Eliminar </button>
    `;
 
    playList.appendChild(item);
}
 
// Tener valores de los datos
 
song_form.addEventListener('submit', (u)=> {
    u.preventDefault();
    const songName =document.getElementById('song_name').value;
    const songArtist = document.getElementById('song_artist').value;
    const songLink = document.getElementById('song_url').value;

 
    addsong(songName, songArtist, songLink);
    song_form.reset();
})