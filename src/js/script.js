// Função para exibir a mensagem de surpresa
function showMessage() {
  // Mostra a mensagem de surpresa e o botão de surpresa
  document.getElementById("message").classList.remove("d-none");
  document.getElementById("message").textContent = "Parabéns, Mãe! 🎉🎂";

  // Esconde o botão de surpresa
  document.getElementById("surpriseButton").classList.add("d-none");
}

// Função para iniciar o cronômetro
function startCountdown() {
  const countdownElement = document.getElementById("countdown");

  // Define a data final (data do aniversário)
  const targetDate = new Date("2025-06-24T00:00:00").getTime();

  // Atualiza o cronômetro a cada segundo
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calcula dias, horas, minutos e segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe o cronômetro
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Quando o cronômetro chegar a 0, exibe o botão de surpresa
    if (distance < 0) {
      clearInterval(interval); // Para o cronômetro
      countdownElement.innerHTML = "Feliz Aniversário!";
      document.getElementById("surpriseButton").classList.remove("d-none"); // Exibe o botão de surpresa
    }
  }, 1000); // Atualiza o cronômetro a cada 1 segundo
}

// Inicializa o cronômetro quando a página for carregada
window.onload = startCountdown;
