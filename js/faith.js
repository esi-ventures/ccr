document.addEventListener("DOMContentLoaded", () => {
  const faithModal = document.getElementById("faithModal");
  const closeFaithModal = document.getElementById("closeFaithModal");
  const openFaithButtons = document.querySelectorAll(
    "[data-open-faith], #openFaithModal, #openFaithModalMobile"
  );

  if (!faithModal) {
    return;
  }

  function openModal() {
    faithModal.classList.remove("faith-modal-closed");
    faithModal.classList.add("faith-modal-open");
    document.body.style.overflow = "hidden";

    window.setTimeout(() => {
      closeFaithModal?.focus();
    }, 100);
  }

  function closeModal() {
    faithModal.classList.remove("faith-modal-open");
    faithModal.classList.add("faith-modal-closed");
    document.body.style.overflow = "";
  }

  openFaithButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  closeFaithModal?.addEventListener("click", closeModal);

  faithModal.addEventListener("click", (event) => {
    if (event.target === faithModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      faithModal.classList.contains("faith-modal-open")
    ) {
      closeModal();
    }
  });

  const faithDetails = faithModal.querySelectorAll("details");

  faithDetails.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (!detail.open) {
        return;
      }

      faithDetails.forEach((otherDetail) => {
        if (otherDetail !== detail) {
          otherDetail.open = false;
        }
      });
    });
  });
});
