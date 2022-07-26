let products = {
    data:[{
        productName: "É assim que acaba", /* nome do livro */
        category: "Romance", /* Genero do livro */
        price: "PDF", /*formato*/
        image: "#", 
    }
    {
        productName: "É assim que acaba", /* nome do livro */
        category: "Romance", /* Genero do livro */
        price: "PDF", /*formato*/
        image: "#",
    }
    {
        productName: "É assim que acaba", /* nome do livro */
        category: "Romance", /* Genero do livro */
        price: "PDF", /*formato*/
        image: "#",
    }
    {
        productName: "É assim que acaba", /* nome do livro */
        category: "Romance", /* Genero do livro */
        price: "PDF", /*formato*/
        image: "#",
    }
    {
        productName: "É assim que acaba", /* nome do livro */
        category: "Romance", /* Genero do livro */
        price: "PDF", /*formato*/
        image: "#",
    }
]
};

for (let i of products.data) {
    //Criar Cartão
    let card = document.creatElement("div");
    //O cartão deve ter categoria
    card.classList. add("card", "i.category");
    //img div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    document.getElementById("products").appendChild(card);
}