function handleModal (){
    const button = document.getElementById('register')
    const modalContainer = document.getElementById('modalController')
    const button_faq = document.querySelector('.button_nextClass')

    button.addEventListener('click' , () => {
        modalContainer.showModal()
        
    })
    button_faq.addEventListener('click' , () => {
        modalContainer.showModal()
    })
}

function closeModal(){
    const buttonCloseModal = document.getElementById('close')
    const modalContainer = document.getElementById('modalController')

    buttonCloseModal.addEventListener('click', () => {
        modalContainer.close()
    })
}

handleModal()
closeModal()