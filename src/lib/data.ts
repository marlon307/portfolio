// Todo o conteúdo do portfólio fica aqui. Edite este arquivo para atualizar o site.

export const site = {
  url: 'https://marlon307.vercel.app',
  locale: 'pt_BR',
  twitter: '@_marlon307',
};

export const profile = {
  name: 'Marlon Ramos',
  handle: 'marlon307',
  role: 'Desenvolvedor Full-Stack',
  headline: 'Desenvolvedor Full-Stack · TypeScript, React, Next.js, Svelte e Node.js',
  location: 'Brasil',
  summary:
    'Desenvolvo aplicações web rápidas, acessíveis e escaláveis — de lojas virtuais a plataformas de agendamento — do front-end ao back-end.',
  about: [
    'Sou Marlon Ramos (marlon307), desenvolvedor full-stack com formação de mais de 1.500 horas pela Trybe. Trabalho com TypeScript, React, Next.js, Svelte e Node.js para criar produtos web com foco em performance, acessibilidade e boa experiência de uso.',
    'Já atuei no desenvolvimento de CMS, sistemas de RH e de uma plataforma de cotação de seguros na Coinsure, criei lojas virtuais integradas à Shopify, plugins e temas WordPress e o Horanza, uma plataforma de agendamento online.',
    'Acredito que qualquer ideia pode virar realidade com foco e boa engenharia — e meu objetivo é ajudar pessoas e empresas a transformar essas ideias em produtos digitais simples, confiáveis e humanos.',
  ],
  status: 'aberto a novas oportunidades',
  keywords: [
    'Marlon Ramos',
    'marlon307',
    'desenvolvedor full-stack',
    'desenvolvedor web',
    'desenvolvedor front-end',
    'React',
    'Next.js',
    'Svelte',
    'TypeScript',
    'Node.js',
    'portfólio',
  ],
};

export const links = [
  { label: 'linkedin', href: 'https://www.linkedin.com/in/marlon307/' },
  { label: 'github', href: 'https://github.com/marlon307' },
  { label: 'twitter', href: 'https://twitter.com/_marlon307' },
  { label: 'cv.pdf', href: 'https://github.com/marlon307/marlon307/raw/main/svg/Marlon.pdf', download: true },
];

// Experiência e formação completas ficam no LinkedIn. As instituições abaixo
// são usadas apenas nos dados estruturados (SEO).
export const schools = ['Trybe', 'Origamid'];

export type Project = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
  /** Projetos em destaque aparecem maiores, no topo da seção */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'commerce-drop',
    name: 'Commerce Drop',
    description:
      'Loja virtual headless integrada à API Storefront da Shopify, com catálogo, carrinho e checkout rápidos e responsivos.',
    tags: ['svelte', 'typescript', 'tailwind', 'shopify'],
    url: 'https://commerce-drop.vercel.app/',
    image: '/projects/commerce-drop.png',
    featured: true,
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
    slug: 'horanza',
    name: 'Horanza',
    description:
      'Plataforma de agendamento online que gera automaticamente os horários disponíveis com base na duração de cada serviço.',
    tags: [],
    featured: true,
    url: 'https://horanza.com/',
    image: '/projects/horanza.png',
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
