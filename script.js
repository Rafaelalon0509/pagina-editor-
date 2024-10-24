 // Obtener el textarea y el iframe
 const textarea = document.getElementById('intercod');
 const iframe = document.getElementById('codsal');
 
 // Función que actualiza el iframe
 function updateIframe() {
     iframe.srcdoc = textarea.value;
     }
 
         // Detectar cambios en el textarea y actualizar el iframe en tiempo real
 textarea.addEventListener('input', updateIframe);
 
         // Inicializar con contenido vacío
 updateIframe();
     