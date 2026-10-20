const titleCard = ["Gabigol", "Bruno Henrique", "Capacete", "Leandro", "Zico", "Dida"];
const pTitleCard = [
    "O Príncipe da Geração de Ouro. O homem das decisões, dos gols em finais de Libertadores e da plaquinha levantada.",
    "O Rei dos Clássicos. Velocidade, impulsão e momentos decisivos que o colocaram no panteão rubro-negro.",
    "O Maestro. Recordista de jogos, técnica refinada e amor incondicional ao clube.",
    "O maior lateral-direito da história, que nunca vestiu outra camisa em sua carreira profissional.",
    "O Galinho de Quintino. O maior ídolo da nossa história, sinônimo de Flamengo, magia e gols inesquecíveis.",
    "Um dos maiores artilheiros da história rubro-negra com 257 gols."
];

const crdImage = [
    "babigol.jpg",
    "BH.jpg",
    "capacete.jpg",
    "leandro.jpg",
    "zico.jpg",
    "ocaba.jpg"
];

const conteudo = document.getElementById("conteudo");

conteudo.innerHTML = `<h1>Os Deuses do Maracanã: Nossos Ídolos</h1>
        <div class="heroB" id="heroB">

        </div>

        <p class="textoI">O Manto Sagrado não é para qualquer um. Ele pesa, ele tem história. Conheça os craques que honraram as cores rubro-negras, suaram sangue em campo e conquistaram a eternidade no coração de mais de 40 milhões de torcedores.</p>

        <div class="cards" id="cards">

        </div>

        
        `;

const cardArea = document.getElementById("cards");

function createCard() {
    for (let i = 0; i < pTitleCard.length; i++) {
        cardArea.innerHTML += `<article class="card sono" id="card"  style="background-image: url('${crdImage[i]}'); background-size: cover; background-position: center;"> 
                    <h3 id="TC">${titleCard[i]}</h3>
                    <p id="PTC">${pTitleCard[i]}</p>
                </article>`;
    }
}

createCard();