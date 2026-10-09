
import { reactive } from 'vue'

export const siteConfig = reactive({
  brand: {
    officeName: 'Ramon Bastos | Advocacia Agro',
    shortName: 'Ramon Bastos',
    professionalName: 'Ramon Bastos',
    oab: '', // Preencher com a inscrição oficial
    // logo: '/LogoPNG1.png',
    initials: 'RB',
    favicon: '/favicon.ico',
    developer: 'Max Sistemas',
  },

  theme: {
    primary: '#031622',
    primaryDark: '#6f1d2c',
    secondary: '#0b2547',
    accent: '#b79a65',
    surface: '#ffffff',
    surfaceSoft: '#f6f5f2',
    text: '#182e49',
  },

  hero: {
    eyebrow: 'Advocacia especializada no agronegócio',
    title: 'Segurança jurídica para quem produz no campo.',
    highlight: 'estratégica',
    subtitle: 'Atuação jurídica em defesa dos produtores rurais, com foco em dívidas bancárias, execuções, contratos e regularização de propriedades rurais.',
    video: '/IMG-VIDEOS/Teste.mp4',
    backgroundImage: '/media/Banner3.png',
    ctaLabel: 'Fale com nosso advogado',
    highlights: ['Direito Agrário', 'Crédito Rural', 'Defesa do Produtor'],
  },

  contact: {
    phone: '(83) 9129-5236',
    phoneRaw: '5583991295236',
    whatsapp: '5583991295236',
    whatsappMessage: 'Olá! Vim pelo site da Ramon Bastos Advocacia Agro e gostaria de orientação jurídica sobre uma questão rural.',
    email: 'contato@seuescritorio.com.br',
    address: 'Rua Bartolomeu de Gusmão, 1509 - 3 ° Andar - Sala 10 - Centro',
    city: 'Paraná',
    zipCode: '85852-130',
    businessHours: 'Segunda a sexta, das 8h às 18h',
    emergencyPhone: '(83) 99129-5236',
    mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=-4.4250,-41.4586',
    latitude: -4.425,
    longitude: -41.4586,
    mapZoom: 16,
  },

  booking: {
    url: 'https://calendar.app.google/AKAQmEPSnxWeeRo7A',
    modes: ['Presencial', 'Por vídeo'],
  },

  documentChecklists: [
    {
      area: 'Prorrogação de Dívidas Rurais',
      approved: false,
      reviewedBy: '',
      reviewedAt: '',
      items: [
        'Documento de identificação do produtor rural',
        'Cédula de Crédito Rural (CCR), CCB ou contrato de financiamento',
        'Extratos bancários e demonstrativos da dívida',
        'Comprovantes de dificuldades financeiras ou perdas na produção',
        'Laudos técnicos, relatórios de safra e documentos relacionados, quando disponíveis',
      ],
    },
    {
      area: 'Execuções e Cobranças Rurais',
      approved: false,
      reviewedBy: '',
      reviewedAt: '',
      items: [
        'Documento de identificação do produtor rural',
        'Cópia da citação, notificação ou processo judicial',
        'Contrato bancário ou título que originou a cobrança',
        'Comprovantes de pagamentos já realizados',
        'Documentos das garantias oferecidas, quando existentes',
      ],
    },
    {
      area: 'Contratos Rurais',
      approved: false,
      reviewedBy: '',
      reviewedAt: '',
      items: [
        'Documento de identificação das partes',
        'Contrato de arrendamento, parceria, compra e venda ou financiamento',
        'Documentos relacionados ao imóvel ou à produção rural',
        'Comprovantes de pagamentos e obrigações contratuais',
        'Notificações e comunicações entre as partes, se disponíveis',
      ],
    },
    {
      area: 'Regularização de Imóveis Rurais',
      approved: false,
      reviewedBy: '',
      reviewedAt: '',
      items: [
        'Documento de identificação do proprietário ou possuidor',
        'Matrícula atualizada ou documentos de posse do imóvel',
        'Certificado de Cadastro de Imóvel Rural (CCIR), se disponível',
        'Cadastro Ambiental Rural (CAR), quando aplicável',
        'Comprovantes de ITR e documentos de georreferenciamento, se existentes',
      ],
    },
    {
      area: 'Crédito Rural e Renegociação Bancária',
      approved: false,
      reviewedBy: '',
      reviewedAt: '',
      items: [
        'Documento de identificação do produtor rural',
        'Contrato de crédito ou financiamento rural',
        'Demonstrativo atualizado do saldo devedor',
        'Comprovantes de pagamento das parcelas anteriores',
        'Documentos que demonstrem a situação financeira da atividade rural',
      ],
    },
    {
      area: 'Direito Agrário e Conflitos Rurais',
      approved: false,
      reviewedBy: '',
      reviewedAt: '',
      items: [
        'Documento de identificação',
        'Documentos de propriedade ou posse da área rural',
        'Contratos e instrumentos relacionados ao conflito',
        'Fotografias, notificações ou comunicações relevantes',
        'Número do processo judicial ou administrativo, caso exista',
      ],
    },
  ],

  professionalProfiles: [
    {
      slug: 'profissional-credito-rural',
      registration: '',
      education: [],
      areas: ['Crédito Rural', 'Prorrogação de Dívidas Rurais'],
      biography: '',
      email: '',
      whatsapp: '',
    },
    {
      slug: 'profissional-execucoes-rurais',
      registration: '',
      education: [],
      areas: ['Execuções Rurais', 'Defesa do Produtor Rural'],
      biography: '',
      email: '',
      whatsapp: '',
    },
    {
      slug: 'profissional-direito-agrario',
      registration: '',
      education: [],
      areas: ['Direito Agrário', 'Contratos Rurais', 'Regularização de Imóveis'],
      biography: '',
      email: '',
      whatsapp: '',
    },
  ],

  social: {
    instagram: 'https://instagram.com/seuperfil',
    facebook: 'https://facebook.com/seuperfil',
    linkedin: 'https://linkedin.com/company/seuperfil',
    x: '',
  },

  linkBio: {
    title: '',
    eyebrow: 'Advocacia Especializada no Agronegócio',
    description: 'Orientação jurídica para produtores rurais, com atuação em crédito rural, dívidas bancárias, contratos e proteção do patrimônio no campo.',
    coverImage: '',
    coverAlt: '',
    teamTitle: 'Fale com nosso advogado',
    whatsappMessage: 'Olá! Vim pelo link da bio da Ramon Bastos Advocacia Agro e gostaria de orientação jurídica.',
    // Mostra no máximo 3 pessoas de team. Para ocultar uma, use linkBio: false nela.
    quickLinks: [
      {
        label: 'Conheça nosso escritório',
        description: 'Nossa atuação no Direito do Agronegócio',
        href: '#inicio',
        icon: 'mdi-web',
      },
      {
        label: 'Agendar atendimento',
        description: 'Atendimento presencial ou por vídeo',
        href: '#agendamento',
        icon: 'mdi-calendar-outline',
      },
      {
        label: 'Áreas de atuação',
        description: 'Soluções jurídicas para o produtor rural',
        href: '#areas',
        icon: 'mdi-scale-balance',
      },
      {
        label: 'Prepare seu atendimento',
        description: 'Documentos para análise da sua situação rural',
        href: '#documentos',
        icon: 'mdi-file-document-outline',
      },
    ],
  },

  about: {
    title: 'Compromisso com quem vive e produz no campo',
    photo: '/media/Equipe3.png',
    photoAlt: 'Imagem ilustrativa de atendimento jurídico especializado no agronegócio',
    text: 'A Ramon Bastos Advocacia Agro atua na defesa dos interesses de produtores rurais e profissionais do agronegócio. Com uma abordagem técnica e estratégica, o escritório trabalha em questões relacionadas ao crédito rural, prorrogação de dívidas, execuções bancárias, contratos agrários e regularização de propriedades. Cada situação é analisada individualmente, considerando os desafios financeiros, produtivos e jurídicos enfrentados por quem trabalha no campo.',
    subtitle: 'Atuação jurídica especializada, com compromisso, transparência e atenção às necessidades do produtor rural.',
    cards: [
      {
        icon: 'fa-solid fa-scale-balanced',
        title: 'Segurança jurídica',
        desc: 'Orientação jurídica responsável para a proteção dos direitos e interesses do produtor rural.',
      },
      {
        icon: 'fa-solid fa-handshake-angle',
        title: 'Atendimento personalizado',
        desc: 'Análise individualizada, considerando a realidade econômica e produtiva de cada cliente.',
      },
      {
        icon: 'fa-solid fa-gavel',
        title: 'Atuação no Direito Agrário',
        desc: 'Conhecimento jurídico aplicado aos contratos, financiamentos e conflitos relacionados ao agronegócio.',
      },
      {
        icon: 'fa-solid fa-chart-line',
        title: 'Estratégias jurídicas',
        desc: 'Avaliação de alternativas jurídicas para lidar com dívidas, cobranças e questões patrimoniais rurais.',
      },
    ],
  },

  practiceAreas: [
    {
      title: 'Prorrogação de Dívidas Rurais',
      description: 'Análise de financiamentos e contratos de crédito rural para avaliar possibilidades legais de prorrogação de vencimentos e reorganização das obrigações financeiras do produtor.',
      icon: 'fa-solid fa-scale-balanced',
    },
    {
      title: 'Defesa em Execuções Rurais',
      description: 'Atuação jurídica em cobranças judiciais, execuções de dívidas bancárias, garantias e medidas de proteção dos direitos do produtor rural.',
      icon: 'fa-solid fa-gavel',
    },
    {
      title: 'Contratos Rurais',
      description: 'Elaboração, análise e revisão de contratos de arrendamento, parceria agrícola, compra e venda, financiamentos e outras relações comerciais do agronegócio.',
      icon: 'fa-solid fa-file-contract',
    },
    {
      title: 'Regularização de Imóveis Rurais',
      description: 'Assessoria jurídica em documentação imobiliária, registros, questões de posse, propriedade e regularização de áreas rurais.',
      icon: 'fa-solid fa-landmark',
    },
    {
      title: 'Crédito Rural e Renegociação',
      description: 'Orientação sobre operações de crédito rural, revisão de condições contratuais e alternativas de negociação de obrigações bancárias.',
      icon: 'fa-solid fa-building-columns',
    },
    {
      title: 'Direito Agrário e Conflitos Rurais',
      description: 'Atuação em questões relacionadas à posse da terra, relações agrárias, obrigações contratuais e conflitos envolvendo propriedades e atividades rurais.',
      icon: 'fa-solid fa-seedling',
    },
  ],

  serviceJourney: [
    {
      icon: 'mdi-message-text-outline',
      title: 'Primeiro contato',
      text: 'O produtor rural apresenta sua situação por telefone, WhatsApp ou formulário, informando sua principal necessidade jurídica.',
    },
    {
      icon: 'mdi-account-search-outline',
      title: 'Análise da situação rural',
      text: 'São identificadas as características do caso e os documentos necessários para avaliar contratos, dívidas, cobranças ou questões patrimoniais.',
    },
    {
      icon: 'mdi-file-sign',
      title: 'Orientação e próximos passos',
      text: 'Após a avaliação jurídica, são esclarecidas as alternativas possíveis, os procedimentos e os próximos passos aplicáveis à situação apresentada.',
    },
  ],

  faq: [
    {
      question: 'É possível prorrogar uma dívida de crédito rural?',
      answer: 'Em determinadas situações, a legislação e as normas aplicáveis ao crédito rural podem permitir a prorrogação da dívida. A possibilidade depende da operação, das condições contratuais e da comprovação dos requisitos necessários, exigindo análise individualizada.',
    },
    {
      question: 'O banco pode executar uma dívida rural?',
      answer: 'O ajuizamento de uma execução depende das condições legais e do título que fundamenta a cobrança. O produtor rural pode buscar orientação jurídica para verificar o procedimento, os valores cobrados e as medidas de defesa cabíveis.',
    },
    {
      question: 'Posso solicitar revisão de um contrato de financiamento rural?',
      answer: 'Sim. É possível solicitar uma avaliação jurídica das condições do contrato, dos encargos e das obrigações assumidas. A existência de irregularidades e a viabilidade de medidas jurídicas dependem da análise documental.',
    },
    {
      question: 'Quais documentos preciso apresentar para analisar uma dívida rural?',
      answer: 'Geralmente são solicitados os contratos de financiamento, demonstrativos da dívida, comprovantes de pagamento e documentos relacionados à atividade produtiva. Outros documentos poderão ser necessários conforme o caso.',
    },
    {
      question: 'O escritório atende produtores rurais de outros estados?',
      answer: 'Sim. O atendimento pode ser realizado por meios digitais, permitindo o contato com produtores rurais de diferentes regiões do Brasil, conforme a natureza da demanda.',
    },
    {
      question: 'O primeiro atendimento pode ser realizado online?',
      answer: 'Sim. O contato inicial pode ser feito pelo WhatsApp ou telefone. Conforme a necessidade, poderá ser agendado um atendimento por vídeo ou presencialmente.',
    },
    {
      question: 'O envio do formulário significa que o escritório assumiu meu caso?',
      answer: 'Não. O formulário é destinado ao contato inicial e não representa contratação de serviços advocatícios ou análise jurídica definitiva.',
    },
  ],

  team: [
    {
      name: 'Ramon Bastos',
      role: 'Advogado | Direito Agrário e do Agronegócio',
      description: 'Atuação jurídica voltada à defesa dos produtores rurais, com foco em crédito rural, prorrogação de dívidas, execuções bancárias, contratos agrários e regularização de propriedades.',
      photo: '/IMGADV/5.jpeg',
      instagram: '',
      linkedin: '',
    },
  ],

  testimonials: [
    {
      name: 'Depoimento ilustrativo',
      location: 'Agronegócio',
      text: 'Espaço reservado para conteúdo institucional autorizado. Substituir antes da publicação.',
      photo: '',
    },
    {
      name: 'Depoimento ilustrativo',
      location: 'Crédito Rural',
      text: 'Espaço reservado para conteúdo institucional autorizado. Substituir antes da publicação.',
      photo: '',
    },
    {
      name: 'Depoimento ilustrativo',
      location: 'Direito Agrário',
      text: 'Espaço reservado para conteúdo institucional autorizado. Substituir antes da publicação.',
      photo: '',
    },
  ],

  seo: {
    title: 'Ramon Bastos | Advocacia Agro e Direito Agrário',
    description: 'Ramon Bastos Advocacia Agro. Atuação jurídica em prorrogação de dívidas rurais, defesa em execuções bancárias, contratos rurais, crédito rural e regularização de imóveis. Atendimento a produtores rurais em todo o Brasil.',
  },

  whatsappWidget: {
    messages: [
      'Produtor rural, precisa de orientação sobre dívidas ou contratos? Fale conosco.',
      'Questões relacionadas ao crédito rural, execuções ou propriedades? Entre em contato com nosso escritório.',
    ],
    firstDelay: 12_000,
    interval: 60_000,
  },
})

export const whatsappUrl = () => {
  const message = encodeURIComponent(siteConfig.contact.whatsappMessage)
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`
}
