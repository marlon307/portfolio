// Todo o conteúdo do portfólio fica aqui. Edite este arquivo para atualizar o site.

export const profile = {
  name: 'Marlon Ramos',
  handle: 'marlon307',
  role: 'Desenvolvedor Full-Stack',
  location: 'Brasil',
  summary:
    'Construo sites e aplicações web simples, rápidos e fáceis de usar — do front-end ao back-end.',
  about: [
    'Gosto da tecnologia porque qualquer ideia pode virar realidade: basta acreditar e ter foco.',
    'Meu objetivo como desenvolvedor é participar desses momentos e tornar o futuro um lugar mais humanizado.',
  ],
  status: 'aberto a novas oportunidades',
};

export const links = [
  { label: 'linkedin', href: 'https://www.linkedin.com/in/marlon307/' },
  { label: 'github', href: 'https://github.com/marlon307' },
  { label: 'twitter', href: 'https://twitter.com/_marlon307' },
  { label: 'cv.pdf', href: 'https://github.com/marlon307/marlon307/raw/main/svg/Marlon.pdf', download: true },
];

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  description: string;
};

export const experience: TimelineItem[] = [
  {
    period: '01/2022 — 09/2022',
    title: 'Dev. Web Full-Stack',
    place: 'Coinsure',
    description:
      'Implementação e manutenção de CMS, RH e de uma aplicação para cotar seguros, conectando o usuário final direto com a seguradora. React, Styled-components, Node.js e MySQL.',
  },
  {
    period: '02/2019 — 02/2021',
    title: 'Auxiliar de Logística',
    place: 'SerraPark Log',
    description: 'Organização e supervisão do estoque de mercadorias e monitoramento da entrada e saída de itens.',
  },
  {
    period: '01/2015 — 10/2017',
    title: 'Auxiliar Administrativo',
    place: 'Polvilho & Trigo Souza Batista LTDA',
    description:
      'Organização de documentos, produção de planilhas e relatórios, atendimento ao cliente e gestão logística e de estoque.',
  },
];

export const education: TimelineItem[] = [
  {
    period: '03/2021 — 03/2022',
    title: 'Desenvolvimento Web Full-Stack',
    place: 'Trybe',
    description:
      'Mais de 1500 horas de formação em front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.',
  },
  {
    period: '01/2020 — 02/2021',
    title: 'Web Design',
    place: 'Origamid',
    description: 'Cursos de Web Design, Tipografia, JavaScript, Sass, HTML5, CSS3, UX Design, UI Design e React.',
  },
];

export type Project = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: 'loja-online',
    name: 'Loja Online',
    description: 'E-commerce integrado à API Storefront da Shopify.',
    tags: ['svelte', 'typescript', 'tailwind', 'shopify'],
    url: 'https://commerce-drop.vercel.app/',
    image: '/projects/loja-online.png',
  },
  {
    slug: 'respponse',
    name: 'Respponse',
    description: 'E-commerce com foco em venda de roupas e acessórios.',
    tags: ['next.js', 'typescript'],
    url: 'https://project-respponse-marlon307.vercel.app/',
    image: '/projects/respponse.png',
  },
  {
    slug: 'app-agenda',
    name: 'App Agenda',
    description: 'Agenda eficiente que gera horários com base no tempo de cada serviço.',
    tags: [],
    url: 'https://www.app-agenda.com/',
    image: '/projects/app-agenda.png',
  },
  {
    slug: 'mundo-do-poliglota',
    name: 'Mundo do Poliglota',
    description: 'Plugin para traduzir todo o site para o idioma escolhido e modernização completa do tema.',
    tags: ['wordpress'],
    url: 'https://mundodopoliglota.com/',
    image: '/projects/mundo-do-poliglota.png',
  },
  {
    slug: 'relatorio-diario',
    name: 'Relatório Diário',
    description: 'Relatório com as principais informações de um vendedor após uma rota de vendas.',
    tags: ['c#'],
    url: 'https://github.com/marlon307/relatorio',
    image: '/projects/relatorio-diario.png',
  },
  {
    slug: 'coinsure',
    name: 'Coinsure',
    description: 'Seguros de Responsabilidade Civil para atividades profissionais, com tecnologia e sem burocracia.',
    tags: ['react', 'node.js', 'mysql'],
    url: 'https://www.linkedin.com/company/coinsure/',
    image: '/projects/coinsure.png',
  },
];

export const stack = [
  { group: 'front-end', items: 'HTML, CSS, Sass, JavaScript, TypeScript, React, Redux, Next.js, Svelte, Tailwind' },
  { group: 'back-end', items: 'Node.js, Python, Flask, C#' },
  { group: 'banco de dados', items: 'MySQL, MongoDB' },
  { group: 'ferramentas', items: 'Git, GitHub, VS Code, WordPress, Shopify' },
];

export const services = [
  { name: 'Sites e landing pages', detail: 'rápidos, responsivos e otimizados' },
  { name: 'Lojas virtuais', detail: 'e-commerce com Shopify ou sob medida' },
  { name: 'WordPress', detail: 'temas, plugins e modernização' },
  { name: 'Aplicações web', detail: 'sistemas full-stack sob medida' },
];
