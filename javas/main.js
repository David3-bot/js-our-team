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


function printEmp() {
    for (i = 0 ; i < teamArray.length; i++){
        const divEl = document.createElement("div");
        divEl.classList.add("card");
        cardsContainerEl.append(divEl);
        const h2El = document.createElement("h2");
        h2El.innerHTML = teamArray[ i ].Nome;
        const h3El = document.createElement("h3");
        h2El.innerHTML = teamArray[ i ].img;
        const h4El = teamArray[ i ].Ruolo;


    }



}