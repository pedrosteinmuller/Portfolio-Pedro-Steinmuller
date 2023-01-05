import git from './skillsImages/git.svg';
import github from './skillsImages/github.svg';
import html from './skillsImages/html.svg';
import css from './skillsImages/css.svg';
import javascript from './skillsImages/javascript.svg';
import react from './skillsImages/react.svg';
import pixelsArt from './projectsImages/pixelsArt.jpg';
import trybewarts from './projectsImages/trybewarts.jpg';
import shoppingCart from './projectsImages/shoppingCart.jpg';
import solarSystem from './projectsImages/solarSystem.jpg';
import tryunfo from './projectsImages/tryunfo.jpg';
import trybetunes from './projectsImages/trybetunes.jpg';
import onlineStore from './projectsImages/frontEndOnlineStore.jpg';
import trybewallet from './projectsImages/trybewallet.jpg';
import trivia from './projectsImages/trivia.jpg';
import starWars from './projectsImages/starWars.jpg';
import appReceitas from './projectsImages/appReceitas.jpg';

const myProjects = [
  {
    nome: 'Arte com Pixels',
    imagem: pixelsArt,
    descricao: 'No projeto Pixels Art, fui capaz de implementar um editor de arte com pixels em que a pessoa usuária pode escolher uma cor em uma paleta de cores e poderá pintar o que quiser em um quadro branco.',
    link: 'https://projeto-pixels-art-sage.vercel.app/',
    github: 'https://github.com/pedrosteinmuller/ProjetoPixelsArt',
    stacks: [html, css, javascript, git, github],
  },
  {
    nome: 'Trybewarts',
    imagem: trybewarts,
    descricao: 'Neste projeto, desenvolvi uma página de formulário da Escola de Magia de Trybewarts, em que as pessoas estudantes poderão enviar seus feedbacks sobre ela. O tema desse projeto é baseado na obra Harry Potter, de J. K. Rowling, já que programar é o mais próximo que podemos chegar de algo verdadeiramente mágico!',
    link: 'https://projeto-trybewarts-eta.vercel.app/',
    github: 'https://github.com/pedrosteinmuller/ProjetoTrybewarts',
    stacks: [html, css, javascript, git, github],
  },
  {
    nome: 'Carrinho de compras',
    imagem: shoppingCart,
    descricao: 'Um dos projetos de Frontend que mais gostei, o carrinho de compras. Aqui, desenvolvi um site de compras dinâmico, usando react e dados de uma API. Uma API, da sigla em inglês Application Programming Interface, é um ponto de contato na internet com determinado serviço e nesse projeto utilizei a API do Mercado Livre para buscar produtos à venda. Também, fui capaz de implementar testes para contribuir na escrita de códigos mais confiáveis e com boa performance. Também, tive a experiência de pôr em prática o desenvolvimento orientado a testes, o famoso TDD (Test Driven Development), que me ajuda a garantir um código de qualidade, percebendo os casos de uso da sua aplicação e garantindo que ela está funcionando da maneira correta!',
    link: 'https://shopping-cart-beta-blush.vercel.app/',
    github: 'https://github.com/pedrosteinmuller/ShoppingCart',
    stacks: [html, css, javascript, react, git, github],
  },
  {
    nome: 'Sistema Solar',
    imagem: solarSystem,
    descricao: 'A pessoa usuária, ao utilizar essa aplicação, poderá ser capaz de visualizar todos os planetas do sistema solar renderizados na tela e todas as cartas com as informações sobre missões espaciais. Habilidades utilizadas: JSX no React, utilizar corretamente o método render() para renderizar meus componentes, utilizar import para trazer componentes em diferentes arquivos, criar componentes de classe no React, criar múltiplos componentes a partir de um array, fazer uso correto de props e PropTypes.',
    link: 'https://projeto-solar-system-ochre.vercel.app/',
    github: 'https://github.com/pedrosteinmuller/ProjetoSolarSystem',
    stacks: [html, css, javascript, react, git, github],
  },
  {
    nome: 'Tryunfo',
    imagem: tryunfo,
    descricao: 'Neste projeto, desenvolvi um jogo no estilo Super Trunfo. Onde a pessoa usuária poderá criar um baralho com o tema livre, adicionar e remover uma carta do baralho, visualizar todas as cartas que foram adicionadas ao baralho. Habilidades utilizadas: ler o estado de um componente e usá-lo para alterar o que exibimos no browser, inicializar um componente, dando a ele um estado pré-definido, atualizar o estado de um componente, capturar eventos utilizando a sintaxe do React, criar formulários utilizando sintaxe JSX com as tags: input, textarea, select, form, checkbox e transmitir informações de componentes filhos para componentes pais via callbacks.',
    link: 'https://projeto-tryunfo-nine.vercel.app/',
    github: 'https://github.com/pedrosteinmuller/ProjetoTryunfo',
    stacks: [html, css, javascript, react, git, github],
  },
  {
    nome: 'TrybeTunes',
    imagem: trybetunes,
    descricao: 'O projeto TrybeTunes consiste em uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Também, fazer login, pesquisar por uma banda ou artista, listar os álbuns disponíveis dessa banda ou artista, visualizar as músicas de um álbum selecionado, reproduzir uma prévia das músicas deste álbum, favoritar e desfavoritar músicas, ver a lista de músicas favoritas, ver o perfil da pessoa logada e editar o perfil da pessoa logada. Habilidades adicionais: fazer requisições e consumir dados vindos de uma API, utilizar os ciclos de vida de um componente React, criar rotas, mapeando o caminho da URL com o componente correspondente, via Route, utilizar o Switch do React Router e criar links de navegação na aplicação com o componente Link.',
    link: 'https://projeto-trybetunes-mauve.vercel.app/',
    github: 'https://github.com/pedrosteinmuller/ProjetoTrybetunes',
    stacks: [html, css, javascript, react, git, github],
  },
  {
    nome: 'Front-end Online Store',
    imagem: onlineStore,
    descricao: 'Neste projeto fui capaz de criar uma versão simplificada, sem persistência no banco de dados, de uma loja online, desenvolvendo em grupo suas funcionalidades de acordo com demandas definidas em um quadro Kanban, em um cenário próximo ao do mercado de trabalho. Na aplicação, a pessoa usuária poderá: buscar produtos por termos e categorias a partir da API do Mercado Livre, interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades, visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações e simular a finalização da compra dos itens selecionados. Como de grande importância, pude entender e praticar o que são métodos ágeis, Kanban, Scrum, trabalho em equipe e todas as habilidades desenvolvidas durante o módulo de Front-end.',
    link: 'https://projeto-online-store-three.vercel.app/',
    github: 'https://github.com/pedrosteinmuller/ProjetoOnlineStore',
    stacks: [html, css, javascript, react, git, github],
  },
  {
    nome: 'Trybewallet',
    imagem: trybewallet,
    descricao: 'Neste projeto, desenvolvi uma carteira de controle de gastos com conversor de moedas. Na aplicação, a pessoa usuária poderá adicionar remover e editar um gasto, além de visualizar uma tabela com seus gastos e o total de gastos convertidos para uma moeda de escolha. Além disso, no projeto Trybewallet, fui capaz de criar uma store Redux em aplicação React, criar reducers no Redux, actions, dispatchers e conectar o Redux aos componentes React.',
    link: 'https://projeto-trybewallet-mu.vercel.app/',
    github: 'https://github.com/pedrosteinmuller/ProjetoTrybewallet',
    stacks: [html, css, javascript, react, git, github],
  },
  {
    nome: 'Jogo Trivia',
    imagem: trivia,
    descricao: 'No projeto Trivia, desenvolvi um jogo de perguntas e respostas baseado no jogo Trivia (semelhante ao jogo do milhão americano) utilizando React e Redux, desenvolvendo em grupo as funcionalidades de acordo com as demandas definidas em um quadro Kanban. Na aplicação, é possível logar no jogo e, se o email tiver cadastro no site Gravatar, ter sua foto associada ao perfil da pessoa usuária, acessar a página referente ao jogo, onde se deverá escolher uma das respostas disponíveis para cada uma das perguntas apresentadas, a resposta deve ser marcada antes do contador de tempo chegar a zero, caso contrário a resposta deverá ser considerada errada, ser redirecionada, após 5 perguntas respondidas, para a tela de score, onde o texto mostrado depende do número de acertos, visualizar a página de ranking, se quiser, ao final de cada jogo, configurar algumas opções para o jogo em uma tela de configuração acessível a partir do cabeçalho do app. Foi utilizado as tecnologias de React e Redux para o funcionamento do projeto.',
    link: 'https://projeto-jogo-trivia.vercel.app/',
    github: 'https://github.com/pedrosteinmuller/ProjetoJogoTrivia',
    stacks: [html, css, javascript, react, git, github],
  },
  {
    nome: 'Star Wars Planets Search',
    imagem: starWars,
    descricao: 'No projeto Star Wars, desenvolvi uma lista com filtros de planetas do universo de Star Wars usando Context API e Hooks para controlar os estados globais. Como habilidades, utilizei Context API no React para gerenciar estado, React Hook useState, useContext, useEffect e escrita de testes para garantir que a aplicação possua uma boa cobertura de testes.',
    link: 'https://projeto-starwars.vercel.app/',
    github: 'https://github.com/pedrosteinmuller/ProjetoStarwars',
    stacks: [html, css, javascript, react, git, github],
  },
  {
    nome: 'App de Receitas',
    imagem: appReceitas,
    descricao: 'No último projeto (em grupo) do módulo de Front-end, desenvolvi um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API. Nele será possível: ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas de comidas e bebidas, em que a base de dados foram 2 APIs distintas, uma para comidas e outra para bebidas. Foi utilizado o Context API para gerenciamento de estado.',
    link: 'https://projeto-app-receitas-nine.vercel.app/',
    github: 'https://github.com/pedrosteinmuller/ProjetoAppReceitas',
    stacks: [html, css, javascript, react, git, github],
  },
]

export default myProjects;