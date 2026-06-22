export type GiftKey =
  | "profeta"
  | "servo"
  | "mestre"
  | "encorajador"
  | "doador"
  | "lider"
  | "misericordioso";

  // Para o Questionário 1
export const redemptiveGiftCycle: readonly GiftKey[] = [
  "mestre",
  "doador",
  "lider",
  "encorajador",
  "misericordioso",
  "profeta",
  "servo"
] as const;

// Para o Questionário 2
export const motivationalGiftCycle: readonly GiftKey[] = [
  "doador",
  "mestre",
  "lider",
  "misericordioso",
  "servo",
  "encorajador",
  "profeta"
] as const;

export type View = "welcome" | "instructions" | "quiz" | "results";

export interface Gift {
  key: GiftKey;
  name: string;
  abbrev: string;
  color: string;
  lightColor: string;
  emoji: string;
  tagline: string;
  characteristics: string[];
  description: string;
  challenges: string[];
  recommendation: string;
}

export type ScoreMap<Keys extends string = GiftKey> = Record<Keys, number>;

export const giftCycle: GiftKey[] = [
  "doador",
  "mestre",
  "lider",
  "misericordioso",
  "servo",
  "encorajador",
  "profeta",
];


export const gifts: Record<GiftKey, Gift> = {
  profeta: {
    key: "profeta",
    name: "Profeta",
    abbrev: "P",
    color: "#7c5cbf",
    lightColor: "#b09ae0",
    emoji: "🔥",
    tagline: "Vê com clareza, fala com convicção",
    characteristics: [
      "Vê as coisas claramente como certas ou erradas",
      "Tem convicções fortes baseadas em investigação profunda",
      "Identifica rapidamente o bem e o mal",
      "Possui vida de oração intensa, especialmente intercessão",
      "Apaixonado pela verdade e pela justiça",
      "Capaz de perceber a atmosfera espiritual",
      "Tende ao perfeccionismo",
    ],
    description:
      "O Profeta vê e ouve com clareza. Possui um senso profundo do que é certo e do que é errado, convicções inabaláveis e um desejo fervoroso pela verdade. Chama as coisas como são e se apaixona pela justiça e pela retidão. Este dom traz ordem ao caos e luz às trevas — é o dom que não se cala diante da injustiça.",
    challenges: [
      "Pode parecer rígido ou crítico demais",
      "Dificuldade em aceitar pontos de vista diferentes",
      "Pode se isolar emocionalmente dos outros",
      "Tendência ao perfeccionismo paralisante",
    ],
    recommendation:
      "Como Profeta, você é chamado a declarar a verdade com compaixão. Seu dom ajuda o Corpo de Cristo a enxergar com clareza e permanecer alinhado com os propósitos de Deus. Desenvolva sua inteligência emocional para temperar sua diretividade com graça. Cultive sua vida de oração como sua arma principal e lembre-se: seu chamado é remir e restaurar, não apenas corrigir.",
  },
  servo: {
    key: "servo",
    name: "Servo",
    abbrev: "S",
    color: "#4a9b8c",
    lightColor: "#7ecfbf",
    emoji: "🤝",
    tagline: "Serve com alegria, ama na prática",
    characteristics: [
      "Prefere servir a liderar",
      "Atende necessidades práticas com alegria",
      "Trabalha nos bastidores sem buscar reconhecimento",
      "Altamente leal e confiável",
      "Hospitaleiro, faz todos se sentirem bem-vindos",
      "Orientado a projetos de curto prazo",
      "Pode ter dificuldade em dizer 'não'",
    ],
    description:
      "O Servo possui um desejo profundo de ajudar os outros. Encontra alegria em suprir necessidades práticas e trabalhar nos bastidores. É altamente sintonizado com o que os outros precisam e sacrificará seu próprio conforto para servir. Este dom demonstra o amor de Cristo através de ações concretas — é a fundação sobre a qual o Reino é construído.",
    challenges: [
      "Pode se tornar sobrecarregado por servir demais",
      "Dificuldade em receber ajuda dos outros",
      "Pode negligenciar suas próprias necessidades",
      "Tendência a se sentir indispensável",
    ],
    recommendation:
      "Como Servo, seu dom é fundamental para o Reino. Você demonstra o amor de Cristo através de ações práticas. Aprenda a estabelecer limites saudáveis para servir de forma sustentável. Permita que outros também o sirvam — isso os abençoa. Seu dom de serviço cria espaço para que outros prosperem.",
  },
  mestre: {
    key: "mestre",
    name: "Mestre",
    abbrev: "M",
    color: "#6b8f4a",
    lightColor: "#9cc47a",
    emoji: "📖",
    tagline: "Pesquisa com rigor, ensina com clareza",
    characteristics: [
      "Pesquisador e estudante meticuloso",
      "Valida informações de múltiplas fontes",
      "Pensador sistemático e lógico",
      "Ama explicar e tornar a verdade acessível",
      "Altos padrões de precisão",
      "Sempre anotando e documentando",
      "Pode ser excessivamente cauteloso ou lento para decidir",
    ],
    description:
      "O Mestre valida a verdade meticulosamente e a apresenta com clareza. Possui amor profundo pelo estudo e pela pesquisa, deseja compreender os princípios fundamentais e é dotado para tornar verdades complexas acessíveis. Este dom estabelece fundações sólidas — é a âncora que garante que a fé seja edificada sobre rocha, e não sobre areia.",
    challenges: [
      "Pode se perder nos detalhes e perder o quadro geral",
      "Dificuldade em agir sem informação completa",
      "Pode parecer frio ou distante emocionalmente",
      "Tendência a ser muito crítico de ensinamentos imprecisos",
    ],
    recommendation:
      "Como Mestre, você é chamado a estabelecer a verdade na Igreja. Seu dom ajuda outros a construir sobre fundações sólidas. Equilibre sua minuciosidade com praticidade — às vezes bom o suficiente é melhor que perfeito. Use seu dom para equipar outros e confie que a Palavra de Deus pode transformar vidas mesmo quando não completamente entendida.",
  },
  encorajador: {
    key: "encorajador",
    name: "Encorajador",
    abbrev: "E",
    color: "#d4784a",
    lightColor: "#f0a87a",
    emoji: "✨",
    tagline: "Inspira pessoas, transforma vidas",
    characteristics: [
      "Excelente conselheiro e encorajador",
      "Sempre enxerga o potencial nas pessoas",
      "Relacional e cativante",
      "Conecta a verdade à aplicação prática na vida",
      "Atitude positiva e cheia de fé",
      "Pode ter um círculo seleto de amigos próximos",
      "Pode ter dificuldade com limites nos relacionamentos",
    ],
    description:
      "O Encorajador ama pessoas e sabe como extrair o melhor delas. Aconselha com eficácia, edifica os outros e possui uma presença positiva e vivificante. Conecta a verdade à aplicação prática na vida das pessoas. Este dom é o combustível da esperança — é aquele que faz você crer que é possível mesmo quando tudo parece impossível.",
    challenges: [
      "Pode buscar aprovação excessivamente",
      "Dificuldade em encorajar com verdades difíceis",
      "Pode ser manipulável por pessoas que exploram sua bondade",
      "Tendência a evitar conflitos necessários",
    ],
    recommendation:
      "Como Encorajador, você carrega o espírito de incentivo que transforma vidas. Seu dom de ver o potencial das pessoas é uma ferramenta poderosa para o Reino. Guarde-se de buscar aprovação e aprenda a encorajar mesmo quando envolve verdades difíceis. Seus relacionamentos autênticos são uma ferramenta ministerial essencial.",
  },
  doador: {
    key: "doador",
    name: "Doador",
    abbrev: "D",
    color: "#c8914a",
    lightColor: "#e8c07a",
    emoji: "💛",
    tagline: "Administra com sabedoria, doa com propósito",
    characteristics: [
      "Sábio e estratégico em sua generosidade",
      "Administra bem as finanças para poder dar mais",
      "Guiado pelo Espírito Santo em suas doações",
      "Vê a hospitalidade como uma oportunidade de dar",
      "Não gosta de pedir dinheiro",
      "Consciente da qualidade no uso dos recursos",
      "Pode lutar com o controle de como seus dons são usados",
    ],
    description:
      "O Doador possui uma capacidade única de administrar recursos para propósitos do Reino. Doa com sabedoria e estratégia, não apenas generosidade impulsiva. Consegue discernir onde os recursos terão o maior impacto. Este dom é o canal através do qual a provisão de Deus flui — é aquele que transforma recursos materiais em legado espiritual eterno.",
    challenges: [
      "Pode tentar controlar como os dons são usados",
      "Pode medir o valor das pessoas pelo que têm",
      "Dificuldade em receber sem sentir obrigação",
      "Pode ser excessivamente cauteloso em suas doações",
    ],
    recommendation:
      "Como Doador, você é chamado a ser um alocador estratégico de recursos para o Reino. Seu dom multiplica bênçãos no Corpo de Cristo. Pratique dar com as mãos abertas — solte o controle de como seus dons são usados. Cultive a generosidade como um estilo de vida, não apenas um ato. Seu dom tem o poder de desbloquear avanços para ministérios e indivíduos.",
  },
  lider: {
    key: "lider",
    name: "Líder",
    abbrev: "V",
    color: "#4a6fb5",
    lightColor: "#7a9fe0",
    emoji: "🎯",
    tagline: "Organiza com visão, lidera com eficiência",
    characteristics: [
      "Organizador natural e delegador eficiente",
      "Visão e planejamento de longo prazo",
      "Alcança metas com eficiência",
      "Trabalha bem sob pressão",
      "Altas expectativas de si mesmo e dos outros",
      "Focado em completar tarefas",
      "Pode lutar com impaciácia ou excesso de controle",
    ],
    description:
      "O Líder organiza pessoas, recursos e tempo para alcançar objetivos. Enxerga o quadro geral e sabe como mobilizar outros em direção a ele. Prospera sob pressão e é um administrador natural. Este dom cria ordem e fecundidade — é aquele que transforma visões em realidade através de planejamento e execução excelentes.",
    challenges: [
      "Pode ser visto como controlador ou exigente demais",
      "Dificuldade em relaxar e desfrutar do processo",
      "Pode sacrificar relacionamentos por resultados",
      "Tendência a assumir tudo ao invés de delegar",
    ],
    recommendation:
      "Como Líder, você é chamado a administrar autoridade para a edificação do Reino de Deus. Seu dom cria ordem e fecundidade. Desenvolva liderança servidora — sua autoridade existe para beneficiar os outros. Cultive paciência e celebre as pequenas vitórias no caminho para sua grande visão. Seu dom é essencial para o crescimento sustentável na Igreja.",
  },
  misericordioso: {
    key: "misericordioso",
    name: "Misericordioso",
    abbrev: "MI",
    color: "#b5607a",
    lightColor: "#e090a8",
    emoji: "💜",
    tagline: "Sente com o coração, cura com presença",
    characteristics: [
      "Altamente empático e compassivo",
      "Atrai pessoas que estão sofrendo",
      "Percebe a atmosfera emocional de um ambiente",
      "Guiado pelo coração mais do que pela razão",
      "Traz conforto e cura",
      "Tem dificuldade em dizer 'não'",
      "Pode ser emocionalmente esgotado pelos outros",
    ],
    description:
      "O Misericordioso é profundamente empático e emocionalmente sintonizado. Atrai pessoas que sofrem, percebe a atmosfera emocional de um ambiente e traz conforto e cura. É motivado pelo amor e pela compaixão. Este dom é o coração pulsante da comunidade — é aquele que garante que ninguém seja deixado para trás ou se sinta sozinho.",
    challenges: [
      "Pode ser emocionalmente sobrecarregado",
      "Dificuldade em estabelecer limites saudáveis",
      "Pode habilitar comportamentos destrutivos por compaixão",
      "Tendência a evitar confrontos necessários",
    ],
    recommendation:
      "Como Misericordioso, você carrega a compaixão do coração de Deus pelos quebrantados. Seu dom traz cura e aceitação a quem se sente rejeitado. Aprenda a estabelecer limites emocionais para sustentar seu ministério. Desenvolva discernimento para ajudar as pessoas em direção à cura, não apenas ao conforto. Seu dom é uma demonstração poderosa do amor incondicional de Deus.",
  },
};

export function calculateScores(
  answers: (number | null)[],
  cycle: readonly GiftKey[] = giftCycle,
): Record<GiftKey, number> {
  const scores = {} as Record<GiftKey, number>;
  cycle.forEach((key) => {
    scores[key] = 0;
  });

  answers.forEach((ans, index) => {
    if (ans !== null) {
      const key = cycle[index % cycle.length];
      scores[key] += ans;
    }
  });

  return scores;
}

export function getTopKeys(
  scores: Record<GiftKey, number>,
): GiftKey[] {
  const entries = Object.entries(scores) as [GiftKey, number][];
  return entries
    .sort(([, a], [, b]) => b - a)
    .map(([key]) => key);
}
