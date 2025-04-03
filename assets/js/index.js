const times = ['Inter Miami', 'Benfica', 'Porto', 'Al Ahly', 'Auckland City'];

const resultados = [
    { data: '14/03', dia: 'Sex', hora: '19:00', time1: 'Porto', gols1: '1', artilheiros1: ['Ceará'], time2: 'Al Ahly', gols2: '9', artilheiros2: ['Macarrão', 'Macarrão', 'Macarrão', 'Elienderson', 'Poke', 'Xandão', 'Alex', 'Burguês', 'Burguês'] },
    { data: '15/03', dia: 'Sáb', hora: '17:00', time1: 'Inter Miami', gols1: '3', artilheiros1: ['GC', 'João Miguel', 'Ewerton'], time2: 'Benfica', gols2: '1', artilheiros2: ['Helton'] },

    { data: '19/03', dia: 'Qua', hora: '19:00', time1: 'Inter Miami', gols1: '6', artilheiros1: ['João Marcos', 'João Marcos', 'Ewerton', 'Jean', 'João Miguel', 'João Miguel'], time2: 'Porto', gols2: '1', artilheiros2: ['Ceará'] },
    { data: '21/03', dia: 'Sex', hora: '19:00', time1: 'Benfica', gols1: '3', artilheiros1: ['Bruno', 'Helton', 'Bruno'], time2: 'Auckland City', gols2: '2', artilheiros2: ['Pedro', 'Pedro'] },

    { data: '29/03', dia: 'Sáb', hora: '17:00', time1: 'Inter Miami', gols1: '1', artilheiros1: ['Zainfe'], time2: 'Auckland City', gols2: '2', artilheiros2: ['Hudson', 'Pedro'] },
    { data: '29/03', dia: 'Sáb', hora: '18:00', time1: 'Benfica', gols1: '3', artilheiros1: ['Hebert', 'Helton', 'Helton'], time2: 'Al Ahly', gols2: '2', artilheiros2: ['Macarrão', 'Alex'] },

    { data: '03/04', dia: 'Qui', hora: '19:30', time1: 'Inter Miami', gols1: '', artilheiros1: [], time2: 'Al Ahly', gols2: '', artilheiros2: [] },
    { data: '03/04', dia: 'Qui', hora: '20:30', time1: 'Porto', gols1: '', artilheiros1: [], time2: 'Auckland City', gols2: '', artilheiros2: [] },

    { data: '12/04', dia: 'Sáb', hora: '17:00', time1: 'Benfica', gols1: '', artilheiros1: [], time2: 'Porto', gols2: '', artilheiros2: [] },
    { data: '12/04', dia: 'Sáb', hora: '18:00', time1: 'Al Ahly', gols1: '', artilheiros1: [], time2: 'Auckland City', gols2: '', artilheiros2: [] },

    { data: '19/04', dia: 'Sáb', hora: '17:00', time1: 'Benfica', gols1: '', artilheiros1: [], time2: 'Inter Miami', gols2: '', artilheiros2: [] },
    { data: '19/04', dia: 'Sáb', hora: '18:00', time1: 'Al Ahly', gols1: '', artilheiros1: [], time2: 'Porto', gols2: '', artilheiros2: [] },

    { data: '24/04', dia: 'Qui', hora: '19:30', time1: 'Porto', gols1: '', artilheiros1: [], time2: 'Inter Miami', gols2: '', artilheiros2: [] },
    { data: '24/04', dia: 'Qui', hora: '20:30', time1: 'Auckland City', gols1: '', artilheiros1: [], time2: 'Benfica', gols2: '', artilheiros2: [] },

    { data: '03/05', dia: 'Sáb', hora: '17:00', time1: 'Auckland City', gols1: '', artilheiros1: [], time2: 'Inter Miami', gols2: '', artilheiros2: [] },
    { data: '03/05', dia: 'Sáb', hora: '18:00', time1: 'Al Ahly', gols1: '', artilheiros1: [], time2: 'Benfica', gols2: '', artilheiros2: [] },

    { data: '08/05', dia: 'Qui', hora: '19:30', time1: 'Al Ahly', gols1: '', artilheiros1: [], time2: 'Inter Miami', gols2: '', artilheiros2: [] },
    { data: '08/05', dia: 'Qui', hora: '20:30', time1: 'Auckland City', gols1: '', artilheiros1: [], time2: 'Porto', gols2: '', artilheiros2: [] },

    { data: '17/05', dia: 'Sáb', hora: '17:00', time1: 'Porto', gols1: '', artilheiros1: [], time2: 'Benfica', gols2: '', artilheiros2: [] },
    { data: '17/05', dia: 'Sáb', hora: '18:00', time1: 'Auckland City', gols1: '', artilheiros1: [], time2: 'Al Ahly', gols2: '', artilheiros2: [] },
];

const cartoes = [
    { jogador: "Mário", time: "Al Ahly", amarelos: 1, vermelhos: 0 },
    { jogador: "Souza", time: "Al Ahly", amarelos: 1, vermelhos: 0 },
    { jogador: "Macarrão", time: "Al Ahly", amarelos: 1, vermelhos: 0 },
    { jogador: "Eduardo", time: "Inter Miami", amarelos: 3, vermelhos: 0 },
    { jogador: "Gilson", time: "Inter Miami", amarelos: 0, vermelhos: 1 },
    { jogador: "Hamilton", time: "Benfica", amarelos: 1, vermelhos: 0 },
    { jogador: "Vitor Mello", time: "Benfica", amarelos: 1, vermelhos: 0 },
    { jogador: "Hebert", time: "Benfica", amarelos: 1, vermelhos: 0 },
    { jogador: "Thiago", time: "Porto", amarelos: 1, vermelhos: 0 },
    { jogador: "Ceará", time: "Porto", amarelos: 0, vermelhos: 1 },
    { jogador: "Pedro", time: "Auckland City", amarelos: 2, vermelhos: 0 },
    { jogador: "Paulo", time: "Auckland City", amarelos: 1, vermelhos: 0 },
    { jogador: "Ismael", time: "Auckland City", amarelos: 1, vermelhos: 0 },
    { jogador: "George", time: "Auckland City", amarelos: 1, vermelhos: 1 },
    { jogador: "Hudson", time: "Auckland City", amarelos: 1, vermelhos: 1 },
    { jogador: "Célio", time: "Inter Miami", amarelos: 1, vermelhos: 1 }
];

const suspensoes = [
    { jogador: "George", time: "Auckland City", amarelos: 1, vermelhos: 1 },
    { jogador: "Hudson", time: "Auckland City", amarelos: 1, vermelhos: 1 },
    { jogador: "Célio", time: "Inter Miami", amarelos: 1, vermelhos: 1 },
    { jogador: "Gilson", time: "Inter Miami", amarelos: 0, vermelhos: 1 },
    { jogador: "Ceará", time: "Porto", amarelos: 0, vermelhos: 1 },
    { jogador: "Eduardo", time: "Inter Miami", amarelos: 3, vermelhos: 0 }
]

const cartoesTimes = [
    { time: "Al Ahly", amarelos: 3, vermelhos: 0 },
    { time: "Inter Miami", amarelos: 3, vermelhos: 2 },
    { time: "Benfica", amarelos: 3, vermelhos: 0 },
    { time: "Porto", amarelos: 1, vermelhos: 1 },
    { time: "Auckland City", amarelos: 6, vermelhos: 2 },
];

const eliminatorias = [
    { fase: 'Semifinal', data: '22/05', dia: 'Qui', hora: '19:00', time1: '1º Colocado', gols1: '', artilheiros1: [], time2: '4º Colocado', gols2: '', artilheiros2: [] },
    { fase: 'Semifinal', data: '22/05', dia: 'Qui', hora: '20:00', time1: '2º Colocado', gols1: '', artilheiros1: [], time2: '3º Colocado', gols2: '', artilheiros2: [] },

    { fase: 'Disputa 3º Lugar', data: '24/05', dia: 'Sáb', hora: '17:00', time1: 'Perdedor SF', gols1: '', artilheiros1: [], time2: 'Perdedor SF', gols2: '', artilheiros2: [] },

    { fase: 'Final', data: '24/05', dia: 'Sáb', hora: '18:00', time1: 'Vencedor SF', gols1: '', artilheiros1: [], time2: 'Vencedor SF', gols2: '', artilheiros2: [] }
];

function calcularClassificacao() {
    const classificacao = times.map(time => ({
        time,
        pontos: 0,
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        saldo: 0,
        golsFeitos: 0,
        golsSofridos: 0
    }));

    resultados.forEach(jogo => {
        if (jogo.gols1 !== '' && jogo.gols2 !== '') {
            const time1 = classificacao.find(t => t.time === jogo.time1);
            const time2 = classificacao.find(t => t.time === jogo.time2);

            const gols1 = parseInt(jogo.gols1);
            const gols2 = parseInt(jogo.gols2);

            time1.jogos += 1;
            time2.jogos += 1;

            time1.golsFeitos += gols1;
            time1.golsSofridos += gols2;
            time2.golsFeitos += gols2;
            time2.golsSofridos += gols1;

            time1.saldo += gols1 - gols2;
            time2.saldo += gols2 - gols1;

            if (gols1 > gols2) {
                time1.pontos += 3;
                time1.vitorias += 1;
                time2.derrotas += 1;
            } else if (gols2 > gols1) {
                time2.pontos += 3;
                time2.vitorias += 1;
                time1.derrotas += 1;
            } else {
                time1.pontos += 1;
                time2.pontos += 1;
                time1.empates += 1;
                time2.empates += 1;
            }
        }
    });

    classificacao.sort((a, b) => 
        b.pontos - a.pontos ||
        b.vitorias - a.vitorias ||
        b.saldo - a.saldo ||
        b.golsFeitos - a.golsFeitos
    );

    return classificacao;
}

function exibirTabelaDeClassificacao() {
    const classificacao = calcularClassificacao();

    const tabelaHTML = classificacao.map((time, index) => `
        <tr>
            <td class="tags"></td>
            <td>${index + 1}</td>
            <td>${time.time}</td>
            <td>${time.jogos}</td>
            <td>${time.vitorias}</td>
            <td>${time.empates}</td>
            <td>${time.derrotas}</td>
            <td>${time.golsFeitos}:${time.golsSofridos}</td>
            <td>${time.pontos}</td>
        </tr>
    `).join('');

    document.getElementById('tabelaClassificacao').innerHTML = `
        <h2 class="tittleClassificacao"><strong>Classificação</strong></h2>
        <table class="classificacao">
            <thead>
                <tr>
                    <th></th>
                    <th>#</th>
                    <th>Time</th>
                    <th>J</th>
                    <th>V</th>
                    <th>E</th>
                    <th>D</th>
                    <th>Gols</th>
                    <th>Pts</th>
                </tr>
            </thead>
            <tbody>
                ${tabelaHTML}
            </tbody>
        </table>
    `;
}

function exibirTabelaDeJogos() {
    const tabelaHTML = resultados.map((jogo, index) => `
        <tr class="dataHora">
            <td></td>
            <td class="imgDataHora"><img src="assets/icons/Calendar.svg" alt=""></img>${jogo.data} <strong>|</strong> ${jogo.dia}</td>
            <td></td>
            <td class="losango">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"/>
                </svg>
            </td>
            <td></td>
            <td class="imgDataHora"><img src="assets/icons/Clock.svg" alt=""></img>${jogo.hora}</td>
            <td></td>
        </tr>
        <tr class="resultado">
            <td class="imgLeft"><img src="assets/images/${jogo.time1}.png" alt=""></td>
            <td>${jogo.time1}</td>
            <td>${jogo.gols1 || ''}</td>
            <td>x</td>
            <td>${jogo.gols2 || ''}</td>
            <td>${jogo.time2}</td>
            <td class="imgRight"><img src="assets/images/${jogo.time2}.png" alt=""></td>
        </tr>
        <tr>
            <td></td>
            <td class="golTime1" colspan="2">
                ${jogo.artilheiros1.length > 0 ? jogo.artilheiros1.map(artilheiro => ` ${artilheiro}`).join('<br>') : ''}
            </td>
            <td></td>
            <td class="golTime2" colspan="2">
                ${jogo.artilheiros2.length > 0 ? jogo.artilheiros2.map(artilheiro => ` ${artilheiro}`).join('<br>') : ''}
            </td>
            <td></td>
        </tr>



    `).join('');

    document.getElementById('tabelaJogos').innerHTML = `
        <h2><strong>Tabela de Jogos</strong></h2>
        <table>
            <tbody>
                ${tabelaHTML}
            </tbody>
        </table>
    `;
}

function exibirEliminatorias() {
    const tabelaHTML = eliminatorias.map((jogo, index) => `
        <tr class="textFinais">
            <td colspan="8"><h3><strong>${jogo.fase}</strong></h3></td>
        </tr>
        <tr class="textFinais2">
            <td></td>
            <td class="imgDataHora"><img src="assets/icons/Calendar.svg" alt=""></img>${jogo.data} <strong>|</strong> ${jogo.dia}</td>
            <td></td>
            <td class="losango">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"/>
                </svg>
            </td>
            <td></td>
            <td class="imgDataHora"><img src="assets/icons/Clock.svg" alt=""></img>${jogo.hora}</td>
            <td></td>
        </tr>
        <tr class="fontSmall resultado">
            <td class="imgLeft"><img style="border: .65px solid var(--color-4); background: var(--color-4); border-radius: 3px" src="assets/images/${jogo.time1}.png" alt=""></td>
            <td>${jogo.time1}</td>
            <td>${jogo.gols1 || ''}</td>
            <td>x</td>
            <td>${jogo.gols2 || ''}</td>
            <td>${jogo.time2}</td>
            <td class="imgRight"><img style="border: .65px solid var(--color-4); background: var(--color-4); border-radius: 3px" src="assets/images/${jogo.time2}.png" alt=""></td>
        </tr>
        <tr>
            <td></td>
            <td class="golTime1" colspan="2">
                ${jogo.artilheiros1.length > 0 ? jogo.artilheiros1.map(artilheiro => ` ${artilheiro}`).join('<br>') : ''}
            </td>
            <td></td>
            <td class="golTime2" colspan="2">
                ${jogo.artilheiros2.length > 0 ? jogo.artilheiros2.map(artilheiro => ` ${artilheiro}`).join('<br>') : ''}
            </td>
            <td></td>
        </tr>



    `).join('');

    document.getElementById('tabelaEliminatorias').innerHTML = `
        <h2><strong>Eliminatórias</strong></h2>
        <table>
            <tbody>
                ${tabelaHTML}
            </tbody>
        </table>
    `;
}

function calcularArtilharia() {
    let artilheiros = {};

    function processarGols(jogos) {
        jogos.forEach(jogo => {
            // Contabilizar gols para o time 1, ignorando gols contra
            jogo.artilheiros1.forEach(jogador => {
                if (jogador !== "GC") {  // Verifica se não é gol contra
                    const jogadorId = `${jogador}-${jogo.time1}`;
                    if (!artilheiros[jogadorId]) {
                        artilheiros[jogadorId] = { jogador, time: jogo.time1, gols: 0 };
                    }
                    artilheiros[jogadorId].gols++;
                }
            });

            // Contabilizar gols para o time 2, ignorando gols contra
            jogo.artilheiros2.forEach(jogador => {
                if (jogador !== "GC") {  // Verifica se não é gol contra
                    const jogadorId = `${jogador}-${jogo.time2}`;
                    if (!artilheiros[jogadorId]) {
                        artilheiros[jogadorId] = { jogador, time: jogo.time2, gols: 0 };
                    }
                    artilheiros[jogadorId].gols++;
                }
            });
        });
    }

    // Processar gols da fase de grupos e das eliminatórias
    processarGols(resultados); // Fase de grupos
    if (typeof eliminatorias !== 'undefined') {
        processarGols(eliminatorias); // Fase eliminatória (se existir)
    }

    return Object.values(artilheiros).sort((a, b) => b.gols - a.gols);
}

function exibirTabelaDeArtilharia() {
    const artilheiros = calcularArtilharia();
    const tabelaHTML = artilheiros.map((jogador, index) => `
        <tr class="tableArtilharia">
            <td>${index + 1}</td>
            <td class="imgArtilharia"><img src="assets/images/${jogador.time}.png" alt=""></td>
            <td class="nomeArtilharia">${jogador.jogador}</td>
            <td>${jogador.gols}</td>
        </tr>
    `).join('');

    document.getElementById('tabelaArtilharia').innerHTML = `
        <h2 class="artilharia"><strong>Artilharia</strong></h2>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th></th>
                    <th>Jogador</th>
                    <th>Gols</th>
                </tr>
            </thead>
            <tbody>
                ${tabelaHTML}
            </tbody>
        </table>
    `;
}

function exibirTabelaDeCartoes() {
    // Ordenar conforme a prioridade: mais cartões > mais vermelhos > mais amarelos
    cartoes.sort((a, b) => 
        b.vermelhos - a.vermelhos ||  // Prioriza quem tem mais cartões vermelhos
        b.amarelos - a.amarelos      // Depois, prioriza quem tem mais cartões amarelos
    );
    

    // Construir HTML da tabela
    const tabelaHTML = cartoes.map((jogador, index) => `
        <tr class="tableArtilharia">
            <td class="imgArtilharia"><img src="assets/images/${jogador.time}.png" alt=""></td>
            <td class="nomeArtilharia">${jogador.jogador}</td>
            <td>${jogador.amarelos}</td>
            <td>${jogador.vermelhos}</td>
        </tr>
    `).join('');

    document.getElementById('tabelaCartoes').innerHTML = `
        <h2 class="artilharia"><strong>Cartões</strong></h2>
        <table>
            <thead>
                <tr>
                    <th style="text-align: left;">Time</th>
                    <th>Jogador</th>
                    <th><div style="background: yellow;" class="cartao"></div></th>
                    <th><div style="background: red;" class="cartao"></div></th>
                </tr>
            </thead>
            <tbody>
                ${tabelaHTML}
            </tbody>
        </table>
    `;
}
function exibirTabelaDeSuspensoes() {
    // Construir HTML da tabela
    const tabelaHTML = suspensoes.map((jogador, index) => `
        <tr class="tableArtilharia">
            <td class="imgArtilharia"><img src="assets/images/${jogador.time}.png" alt=""></td>
            <td class="nomeArtilharia">${jogador.jogador}</td>
            <td>${jogador.amarelos}</td>
            <td>${jogador.vermelhos}</td>
        </tr>
    `).join('');

    document.getElementById('tabelaSuspensoes').innerHTML = `
        <h2 class="artilharia"><strong>Suspensões</strong></h2>
        <table>
            <thead>
                <tr>
                    <th style="text-align: left;">Time</th>
                    <th>Jogador</th>
                    <th><div style="background: yellow;" class="cartao"></div></th>
                    <th><div style="background: red;" class="cartao"></div></th>
                </tr>
            </thead>
            <tbody>
                ${tabelaHTML}
            </tbody>
        </table>
        <h5 style="margin-top: 1rem; text-align: center;"><i>Jogadores cumprirão <br> suspensão de 1 partida</i></h5>
    `;
}
function exibirTabelaDeCartoesTimes() {
    // Construir HTML da tabela
    const tabelaHTML = cartoesTimes.map((cartao, index) => `
        <tr class="tableArtilharia">
            <td class="imgArtilharia"><img src="assets/images/${cartao.time}.png" alt=""></td>
            <td class="nomeArtilharia">${cartao.time}</td>
            <td>${cartao.amarelos}</td>
            <td>${cartao.vermelhos}</td>
        </tr>
    `).join('');

    document.getElementById('tabelaCartoesTimes').innerHTML = `
        <h2 class="artilharia"><strong>Cartões</strong></h2>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Time</th>
                    <th><div style="background: yellow;" class="cartao"></div></th>
                    <th><div style="background: red;" class="cartao"></div></th>
                </tr>
            </thead>
            <tbody>
                ${tabelaHTML}
            </tbody>
        </table>
    `;
}
// Inicializa as tabelas ao carregar a página
function atualizarTabelas() {
    exibirTabelaDeJogos();
    exibirEliminatorias();
    exibirTabelaDeClassificacao();
    exibirTabelaDeArtilharia();
    exibirTabelaDeCartoes();
    exibirTabelaDeSuspensoes()
    exibirTabelaDeCartoesTimes()
}

// Inicializa as tabelas ao carregar a página
atualizarTabelas();

/***************************************/

//Função de rolagem menu superior
document.addEventListener('DOMContentLoaded', function(){
    const idButtonPartidas = document.getElementById('buttonPartidas')
    const idButtonEliminatorias = document.getElementById('buttonEliminatorias')
    const idButtonClassificacao = document.getElementById('buttonClassificacao')
    const idButtonGaleria = document.getElementById('buttonGaleria')
  
    const classTabelaPontos = document.querySelector('.tabelaClassificacao')
    const classMataMata = document.querySelector('.tabelaEliminatorias')
    const classGaleria = document.querySelector('.galeria')
    const classTabelaJogos = document.querySelector('.tabelaJogos')
  
    idButtonPartidas.addEventListener('click', function(){
        const targetPosition = classTabelaJogos.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = targetPosition - 96
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    })
    idButtonEliminatorias.addEventListener('click', function(){
        const targetPosition = classMataMata.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = targetPosition - 96
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    })
    idButtonClassificacao.addEventListener('click', function(){
        const targetPosition = classTabelaPontos.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = targetPosition - 96
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    })
    idButtonGaleria.addEventListener('click', function(){
        const targetPosition = classGaleria.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = targetPosition - 96
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    })
})

/***********************************************************/
