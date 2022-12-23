// ------Pop Up 1-----

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// ------Pop Up 2-----

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open2]"),
    closeModalBtn: document.querySelector("[data-modal-close2]"),
    modal: document.querySelector("[data-modal2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// ------Pop Up 3-----

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open3]"),
    closeModalBtn: document.querySelector("[data-modal-close3]"),
    modal: document.querySelector("[data-modal3]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// ------Pop Up 4-----

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open4]"),
    closeModalBtn: document.querySelector("[data-modal-close4]"),
    modal: document.querySelector("[data-modal4]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// ------Pop Up 5-----

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open5]"),
    closeModalBtn: document.querySelector("[data-modal-close5]"),
    modal: document.querySelector("[data-modal5]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();