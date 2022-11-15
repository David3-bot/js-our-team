const cardsContainerEl = document.querySelector(".cardsContainer")

const teamArray = [
    {
        "Nome": "Wayne Barnett",
        "Ruolo": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "Nome": "Wayne Barnett",
        "Ruolo": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "Nome": "Wayne Barnett",
        "Ruolo": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "Nome": "Wayne Barnett",
        "Ruolo": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "Nome": "Wayne Barnett",
        "Ruolo": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "Nome": "Wayne Barnett",
        "Ruolo": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },


]

console.log (teamArray)

printEmp();

function printEmp() {
    for (i = 0 ; i < teamArray.length; i++){
        const divEl = document.createElement("div");
        divEl.classList.add("card");
        cardsContainerEl.append(divEl);

        const pEl = document.createElement("p");
        pEl.innerHTML = teamArray[ i ].Nome;
        cardsContainerEl.append(pEl);

        
        const h3El = document.createElement("h3")
        h3El.innerHTML = teamArray [ i ].Ruolo;
        cardsContainerEl.append(h3El);

        const h4El = document.createElement("h4");
        h4El.innerHTML = teamArray[ i ].img;
        cardsContainerEl.append(h4El);



    }



}