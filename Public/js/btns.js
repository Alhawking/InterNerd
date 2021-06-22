const buttonsEdit = document.querySelectorAll('.button-edit');
const buttonsDetail = document.querySelectorAll('.button-detail');
buttonsEdit.forEach(button => {
    const id = button.parentElement.parentElement.parentElement.dataset.id;
    button.addEventListener('click', () => window.location.href = `/products/edit/${id}`)
})
buttonsDetail.forEach(button => {
    const id = button.parentElement.parentElement.parentElement.dataset.id;
    button.addEventListener('click', () => window.location.href = `/products/detail/${id}`)
})