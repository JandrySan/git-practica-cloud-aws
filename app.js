// ✅ Corregido: Al dejarlo vacío, usa el mismo origen (mismo dominio de Cloud Run)
// Esto garantiza que la petición pase por el proxy de Nginx sí o sí.
const API_URL = ""; 

async function enviarReserva() {
  const nombre   = document.getElementById("nombre").value.trim();
  const fecha    = document.getElementById("fecha").value.trim();
  const personas = document.getElementById("personas").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const btn      = document.getElementById("btnReserva");
  const msg      = document.getElementById("mensajeRespuesta");

  // Validación básica
  if (!nombre || !fecha || !personas || !telefono) {
    msg.className = "msg error";
    msg.textContent = "⚠️ Por favor completa todos los campos.";
    return;
  }

  // Deshabilitar botón mientras espera respuesta
  btn.disabled = true;
  btn.textContent = "Enviando...";
  msg.className = "msg";

  try {
    // Hará el fetch a "/reserva", lo cual Nginx interceptará de inmediato
    const response = await fetch(`${API_URL}/reserva`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, fecha, personas, telefono })
    });

    const data = await response.json();

    if (response.ok) {
      msg.className = "msg success";
      msg.textContent = `✅ ${data.mensaje}`;
      // Limpiar formulario tras éxito
      document.getElementById("nombre").value   = "";
      document.getElementById("fecha").value    = "";
      document.getElementById("personas").value = "";
      document.getElementById("telefono").value = "";
    } else {
      throw new Error(data.detail || "Error del servidor");
    }

  } catch (error) {
    msg.className = "msg error";
    msg.textContent = `❌ No se pudo enviar la reserva: ${error.message}`;
  } finally {
    btn.disabled = false;
    btn.textContent = "Solicitar reserva →";
  }
}