
let characters = [
    {

        name: "Dilbert",
        image: "./img/Dilbert-Pin.jpg"
    },
    {

        name: "Alice",
        image: "./img/Alice.png"
    },
    {
        name: "Dogbert",
        image: "./img/Dogbert1.jpg"
    },
    {
        name: "Catbert",
        image: "./img/Catbert3.jpg"
    },
    {
        name: "Ratbert",
        image: "./img/Ratbert3.jpg"
    },
    {
        name: "Loud Howard",
        image: "./img/Loud_Howard_1.jpg"
    },
    {
        name: "Wally",
        image: "./img/Wally.png"
    },
    {
        name: "Pointy-Haired Boss",
        image: "./img/Boss.png"
    },
    {
        name: "Asok",
        image: "./img/ASOK.jpeg"
    },
    {
        name: "Dilbert's Mother",
        image: "./img/Dilmom.jpg"
    },
    {
        name: "Bob the Dinosaur",
        image: "./img/BobTheDinosaur.gif"
    },
    {
        name: "Mister Garbage Man",
        image: "./img/Garbageman.jpg"
    }
]
characters = characters.map((ch, idx) => {
    ch["id"] = idx;
    return ch;
});

module.exports = { characters }