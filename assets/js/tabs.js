const tabsItem = document.querySelectorAll(".products-page__item");
const tabs_pane = document.querySelectorAll(".products-page__card-container")

tabsItem.forEach(nav => {
    nav.addEventListener("click", (e) => {

        tabsItem.forEach(item => {
            item.classList.remove("active")
        })

        nav.classList.add("active")

        tabs_pane.forEach(el => {
            el.classList.remove("show")
            el.classList.remove("active")

            if (nav.id == el.getAttribute("tab-panel")) {
                el.classList.add("show")
                el.classList.add("active")
            }
        })


    })
})



