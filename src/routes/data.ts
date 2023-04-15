let products = [
    {
        name: "Computadores",
        number: 1,
        title1: "Computador 1",
        title2: "Computador 2",
        title3: "Computador 3",
    },
    {
        name: "Eletrônicos",
        number: 2,
        title1: "Eletrônico 1",
        title2: "Eletrônico 2",
        title3: "Eletrônico 3",
    },
    {
        name: "Livros",
        number: 3,
        title1: "Livro 1",
        title2: "Livro 2",
        title3: "Livro 3",
    },
];

export function getProducts() {
    return products;
}

export function getProduct(number: any) {
    return products.find((product) => product.number === number
    );
}