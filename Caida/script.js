document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        usuario: username,
        contrasena: password,
        fecha: new Date().toISOString()
    };

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
            // Si el servidor devuelve un error, muéstralo
            console.error('Error del servidor:', data.error);
            alert('Error al guardar: ' + data.error);
        } else {
            console.log('Datos guardados:', data);
            alert('Conexión exitosa (Datos guardados correctamente)');
            document.getElementById('loginForm').reset();
        }
    })
    .catch((error) => {
        console.error('Error de red:', error);
        alert('Error al conectar con el servidor.');
    });
});