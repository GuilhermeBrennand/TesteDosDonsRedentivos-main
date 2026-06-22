# 🎁 Avaliação de Dons Redentivos e Motivacionais

Uma aplicação web interativa desenvolvida para digitalizar e automatizar a descoberta de dons espirituais, transformando questionários físicos em uma experiência fluida, dinâmica e acessível.

---

## 🏆 Créditos e Direitos Autorais

[cite_start]Todo o conteúdo, metodologia, textos base e regras de avaliação presentes nesta aplicação pertencem exclusivamente ao **Clube do Livro BSSM Português** [cite: 2, 4, 7, 134] e à **Pastora Gisah Janzen**. 

Este projeto não tem fins lucrativos ou apropriação de propriedade intelectual. [cite_start]Ele foi construído puramente como uma ferramenta tecnológica facilitadora, servindo como material de apoio digital para reflexão, crescimento e desenvolvimento espiritual[cite: 6], com base no material em PDF disponibilizado pelo ministério.

---

## 💻 O Que a Aplicação Faz

Responder a testes longos no papel e cruzar os dados em tabelas matriciais pode ser confuso e suscetível a erros de soma. Esta aplicação resolve esse problema digitalizando o processo por completo.

A plataforma oferece:
* Uma interface limpa, focada e amigável (separada por páginas para não sobrecarregar o usuário).
* Um sistema de botões para escolha rápida das notas.
* Cálculo instantâneo no momento da finalização.
* Uma tela de resultados visualmente rica, gerando gráficos de barras, pontuações exatas e destacando os **Dons Principal e Secundário** do usuário, com a opção de imprimir/salvar em PDF.

---

## ⚙️ Estrutura e Regras Extraídas do PDF Original

[cite_start]A arquitetura de código da aplicação foi rigorosamente desenhada para espelhar a matemática do PDF[cite: 8, 135]. O projeto lida com dois métodos de avaliação distintos:

### [cite_start]1. Questionário de Dons Redentivos (91 Questões) [cite: 8, 126, 127]
* [cite_start]**Escala de Pontuação:** Avalia as afirmações baseadas na vivência do usuário com notas de frequência (Nunca, Às Vezes, Na Maioria das Vezes e Sempre)[cite: 22, 23, 24, 25].
* [cite_start]**Lógica de Agrupamento:** No PDF, a soma é feita verticalmente em 7 colunas[cite: 131]. [cite_start]O algoritmo traduziu isso para um ciclo repetitivo fiel à ordem da tabela original: *Mestre, Doador, Líder, Encorajador, Misericordioso, Profeta e Servo*[cite: 132].

### [cite_start]2. Questionário de Dons Motivacionais (140 Questões) [cite: 135, 293, 294]
* [cite_start]**Escala de Pontuação:** Possui uma granularidade maior, utilizando um sistema de 0 (Nunca) a 5 (Sempre)[cite: 147, 149].
* [cite_start]**Lógica de Agrupamento:** O PDF propõe uma soma horizontal por linhas[cite: 148]. [cite_start]A aplicação se adapta perfeitamente a isso mudando a sua "engrenagem" de ciclo para a ordem: *Doador, Mestre, Líder, Misericordioso, Servo, Encorajador e Profeta*[cite: 291, 292, 293].

### 🧠 O Motor Matemático
A regra de negócio central da aplicação (`calculateScores`) elimina qualquer dependência do layout visual do PDF (linhas ou colunas). Ela utiliza um operador aritmético de módulo (`%`) que distribui matematicamente a nota de cada pergunta para o dom correto, garantindo 100% de precisão nos totais e respeitando as particularidades de cada um dos dois testes.

---

## 🚀 Tecnologias Utilizadas
* **React** para a construção da interface do usuário.
* **Framer Motion** para as animações de transição suaves entre perguntas e na exibição dos gráficos de resultado.
* **TypeScript** para garantir tipagem forte e imutabilidade nas regras e ciclos de cálculo.
* **Tailwind CSS** para a estilização responsiva.
