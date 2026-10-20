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
    "Leandro.jpg",
    "zico.jpg",
    "ocaba.jpg"
];

const conteudo = document.getElementById("conteudo");

conteudo.innerHTML = `<h1> Uma História de Amor e Paixão: Do Remo aos Gramados</h1>
        <div class="heroBa" id="heroB">

        </div>

        <p class="textoI">Tudo começou no mar. Fundado em 17 de novembro de 1895 como um clube de regatas, o Flamengo logo abraçou o futebol para se tornar um fenômeno de massas. Uma história forjada na raça, no amor e na paixão, que transcende o esporte e se torna uma religião para milhões.</p>

        <div class="topicos" id="topicos">
            
        </div>

        
        `;

const topic = document.getElementById("topicos")

const h2 = [
    "As Origens (1895)",
    "A Chegada do Futebol (1912)",
    "A Era de Ouro (Anos 80)",
    "A Geração de 2019 (A Retomada)",
    "A Torcida (A Nação)"
]

const p = [
    "A fundação do Grupo de Regatas do Flamengo e as primeiras vitórias na Baía de Guanabara.",
    "A dissidência do Fluminense, o primeiro jogo oficial e o nascimento da rivalidade.",
    "O esquadrão imortal comandado por Zico, que dominou o Brasil, a América e o Mundo.",
    "O ano mágico sob o comando de Jorge Jesus, as quebras de recordes e a volta ao topo da América.",
    "O nosso maior patrimônio. O 12º jogador que empurra o time em qualquer lugar do planeta."
]

const im = [
    "Remo.jpg",
    "origins.jpg",
    "goldenEra.jpg",
    "2019.jpg",
    "torcida.jpg"
]

function createCard() {
    for (let i = 0; i < h2.length; i++) {
        topic.innerHTML += `
        <div class="topico">
            <div class="left">
                <h2 class="h2">${h2[i]}</h2>
                <p>${p[i]}</p>
            </div>
            <img src="${im[i]}" alt="${h2[i]}" class="imgH">
        </div>
        `;
    }
}
createCard();