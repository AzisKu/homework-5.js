const next = document.querySelector("#next")
const prev = document.querySelector("#prev")



generate = () => {
    let quotes = {
        "- Walt Disney": '"Трудности Преодолимы"',
        "- Winston Churchill": '"Я люблю JavaScript"',
        "- Will Rogers": '"учите JavaScript"',
    };
    var authors = Object.keys(quotes);

    var author = authors[current];

    var quote = quotes[author];


    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
};

next.addEventListener("click",) () => {
    current += 1;
    if (current > 5) {
        return false;
    }
    generate();
});

prev.addEventListener("click",) () => {
    current -= 1;
    if (current < 0) {
        return false;
    }
    generate();
});

