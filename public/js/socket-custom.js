let socket = io();

      // Escuchar
      socket.on("connect", () => {
        console.log("Conectaddo al servidor", socket.connected);
      });

      socket.on("disconnect", () => {
        console.log("Perdimos la conexion con el servidor", socket.connected); // undefined
      });

      // Enviar información
      socket.emit('enviarMensaje', {
        usuario: 'Gustavo',
        mensaje: 'Hola Mundo!'
      }, (resp) => {
        console.log('Respuesta Server', resp);
      })

      // Escuchar informacion

      socket.on('enviarMensaje', (mensaje) => {
        console.log('Servidor: ', mensaje);
      })
