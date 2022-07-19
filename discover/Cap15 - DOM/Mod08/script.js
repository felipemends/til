const button = document.getElementById('openModal')

const modalWrapper = document.querySelector('modal-wrapper')

button.onclick = function() {
  modalWrapper
  .classList
  .remove('invisible')
}

document.addEventListener('keydown', funtion(Event) {
  const: isEscKey = Event.key === 'Escape',

  if(isEscKey) {
    modalWrapper.classList.toggle('invisible')
  }
})