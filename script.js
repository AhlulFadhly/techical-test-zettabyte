function buynow(event){
    event.stopPropagation();
    alert("success!");
}

function selected(card){
    const cards = document.querySelectorAll(".card")

    cards.forEach( item => {
        item.classList.remove("selected");
    })

    card.classList.add("selected");
}