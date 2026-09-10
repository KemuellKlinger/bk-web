document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".carousel-card");
    if (cards.length === 0) return;

    let currentIndex = 0;

    function updateCarousel() {
        // Remove todas as classes de posição antigas
        cards.forEach((card) => {
            card.classList.remove("active", "prev", "next", "far-prev", "far-next");
        });

        const total = cards.length;

        // Cálculo dos índices circulares das 5 posições
        const farPrevIndex = (currentIndex - 2 + total) % total;
        const prevIndex    = (currentIndex - 1 + total) % total;
        const nextIndex    = (currentIndex + 1) % total;
        const farNextIndex = (currentIndex + 2) % total;

        // Aplica as classes correspondentes
        cards[currentIndex].classList.add("active");
        cards[prevIndex].classList.add("prev");
        cards[nextIndex].classList.add("next");
        cards[farPrevIndex].classList.add("far-prev");
        cards[farNextIndex].classList.add("far-next");

        // Avança para o próximo card na próxima execução
        currentIndex = (currentIndex + 1) % total;
    }

    // Executa imediatamente na abertura
    updateCarousel();

    // Rotação automática a cada 3 segundos (3000ms)
    setInterval(updateCarousel, 3000);
});