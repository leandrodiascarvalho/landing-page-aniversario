$(document).ready(function () {
  // Função para adicionar a data 24 de Julho de 2025 usando Date.js
  function addEventDate() {
    // Use new Date para garantir um objeto Date.js, se disponível
    let eventDate = Date.parse("24th July, 2025");
    // Se Date.js não estiver funcionando, Date.parse retorna um número (timestamp)
    if (typeof eventDate === "number") {
      eventDate = new Date(eventDate);
    }

    // Verifica se o método toString do Date.js está disponível
    let formattedDate;
    if (
      typeof eventDate.toString === "function" &&
      eventDate.toString.length > 0
    ) {
      try {
        formattedDate = eventDate.toString("dddd, MMMM d, yyyy");
      } catch (e) {
        formattedDate = eventDate.toLocaleDateString("pt-BR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
    } else {
      formattedDate = eventDate.toLocaleDateString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    console.log("Data do Evento: ", formattedDate);
    $("#event-date").text(`${formattedDate}`);
  }

  // Chamada da função para adicionar a data
  addEventDate();
});

// Cores em tons de azul e cinza
const snowColors = [
  "#1e3a8a", // primary blue
  "#3b82f6", // secondary blue
  "#87ceeb", // light blue
  "#add8e6", // lighter blue
  "#b0e0e6", // lightest blue
  "#b0bec5", // cinza claro
  "#90a4ae", // cinza médio
  "#607d8b", // cinza escuro
];

const snowflakeContainer = document.querySelector(
  ".birthday-container__floating-elements"
);
const snowflakeChar = "❄";
const snowflakeCount = 20;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createSnowflake() {
  const flake = document.createElement("span");
  flake.className = "birthday-container__snowflake";
  flake.textContent = snowflakeChar;
  flake.style.left = `${randomBetween(0, 100)}%`;
  flake.style.fontSize = `${randomBetween(16, 32)}px`;
  flake.style.color = snowColors[Math.floor(Math.random() * snowColors.length)];
  flake.style.opacity = randomBetween(0.6, 1).toFixed(2);
  flake.style.animationName = "snow-fall";
  flake.style.animationDuration = `${randomBetween(8, 16)}s`;
  flake.style.animationDelay = `${randomBetween(0, 8)}s`;
  flake.style.position = "absolute";
  flake.style.top = "-5%";
  return flake;
}

// Limpa flocos antigos
snowflakeContainer.innerHTML = "";

// Cria flocos
for (let i = 0; i < snowflakeCount; i++) {
  snowflakeContainer.appendChild(createSnowflake());
}
