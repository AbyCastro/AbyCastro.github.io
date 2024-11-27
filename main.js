var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Biotecnologa')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    // caracteres que se borraran
    .deleteChars(6)
    .typeString('<strong>programar!</strong>')
    .pauseFor(2500)
    .start();