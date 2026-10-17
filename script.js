// CONFIGURAÇÃO: troque pelo número do WhatsApp comercial, com código do país e DDD.
const WHATSAPP_NUMBER = "5511999999999";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-plan]").forEach((button) => {
  button.addEventListener("click", () => {
    const serviceSelect = document.querySelector("#service");
    if (serviceSelect) {
      const plan = button.dataset.plan;
      serviceSelect.value = plan === "Exclusivo" ? "Outro projeto" : plan === "Profissional" ? "Site institucional" : "Landing page";
    }
  });
});

const quoteForm = document.querySelector("#quote-form");
const feedback = document.querySelector("#form-feedback");

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(quoteForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const details = String(formData.get("details") || "").trim();

    if (!name || !service) {
      if (feedback) feedback.textContent = "Preencha seu nome e escolha o tipo de site.";
      return;
    }

    const message = [
      "Olá! Gostaria de solicitar um orçamento para criação de site.",
      "",
      "Nome: " + name,
      email ? "E-mail: " + email : "",
      "Projeto: " + service,
      details ? "Sobre a ideia: " + details : ""
    ].filter(Boolean).join("\n");

    if (WHATSAPP_NUMBER === "5511999999999") {
      if (feedback) feedback.textContent = "Antes de usar o formulário, configure seu número real do WhatsApp no arquivo script.js (WHATSAPP_NUMBER).";
      return;
    }

    const whatsappUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (feedback) feedback.textContent = "Sua mensagem está pronta no WhatsApp. Revise e envie para concluir o pedido.";
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
