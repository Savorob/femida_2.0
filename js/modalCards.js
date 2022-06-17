const modalButtons = document.querySelectorAll("[data-modal-button]");
const closeButtons = document.querySelectorAll("[data-modal-close]");
const overlayClose = document.querySelectorAll("[data-modal]");

modalButtons.forEach(function(item){
    item.addEventListener('click', function(){
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        
        modal.classList.remove('hidden');

        modal.querySelector(".services-modal").addEventListener('click', function(e){
            e.stopPropagation();
        });
    })
})

closeButtons.forEach(function(item){
    item.addEventListener('click', function () {
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden');
    })
})

overlayClose.forEach(function(item){
    item.addEventListener('click', function(){
        const modal = this.closest("[data-modal]");
        modal.classList.add("hidden");
    })
})