$(document).ready(function () {
  // Função para adicionar a data 24 de Julho de 2025 usando Date.js
  function addEventDate() {
    // Criação da data 24 de julho de 2025
    const eventDate = Date.parse("24th July, 2025");

    // Exibindo a data no console
    console.log("Data do evento:", eventDate.toString("dddd, MMMM d, yyyy")); // Exibindo no formato completo

    // Manipule a data e exiba no HTML
    $("#event-date").text(
      `Evento em: ${eventDate.toString("dddd, MMMM d, yyyy")}`
    );
  }

  // Chamada da função para adicionar a data
  addEventDate();
});
