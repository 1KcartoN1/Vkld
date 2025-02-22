let tabs = document.querySelectorAll(`.tab`)
let link = document.querySelectorAll(`.menu a`)
let menu = document.querySelector(`.menu`)

menu.addEventListener(`click`, (event) => {
    event.preventDefault()
    let linkTarget = event.target

    for (let i = 0; i < link.length; i++) {
        //    удалить класс актив у всех вкладок
        link[i].classList.remove(`active`)
        // добавить класс актив вкладке на которую кликнули
        linkTarget.classList.add(`active`)
        // удалить класс актив у всех блоков
        tabs.classList.remove(`active`)

        // если у ссылки `active` - то tabs доб актив
        if (link[i].classList.contains(`active`)) {
            tabs[i].classList.add(`active`)
        }
    }

})


