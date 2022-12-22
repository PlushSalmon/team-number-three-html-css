// -----Modal Window-----

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

// -----Modal Window-----

setInterval(() => {
	let $curr = document.querySelector('#slider1 input[type=radio]:checked'),
  		$next = $curr.nextSibling;
      
  if (!$next.length) {
  	$next = document.querySelector('#slider1 input[type=radio]').firstChild;
  }
  $next.setAttribute('checked', true);
}, 3000);