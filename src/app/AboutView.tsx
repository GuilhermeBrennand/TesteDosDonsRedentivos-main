export function AboutView() {
  return (
    <div className="min-h-screen px-4 py-12 bg-background">
      <div className="max-w-2xl mx-auto space-y-12">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-serif text-foreground">Sobre a Aplicação</h1>
          <p className="text-muted-foreground">Digitalizando o crescimento e o autoconhecimento.</p>
        </div>

        {/* Descrição da Aplicação */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif">O Projeto</h2>
          <p className="text-foreground/80 leading-relaxed">
            Esta aplicação foi desenvolvida com o objetivo de facilitar a jornada de descoberta dos dons espirituais. 
            Baseada nos questionários oficiais do <strong>Clube do Livro BSSM Português</strong> e da 
            <strong> Pastora Gisah Janzen</strong>, esta ferramenta transforma os testes contidos no PDF 
            original em uma experiência digital interativa, precisa e rápida. 
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Ao automatizar os cálculos matemáticos complexos presentes nas tabelas do PDF original, 
            permitimos que o usuário mantenha o foco no que realmente importa: a reflexão e o 
            desenvolvimento espiritual.
          </p>
        </section>

        {/* Informações do Grupo */}
        <section className="bg-secondary/30 p-8 rounded-2xl border border-border/50 space-y-4">
          <h2 className="text-2xl font-serif flex items-center gap-2">
            📚 Clube do Livro BSSM
          </h2>
          <p className="text-foreground/90 font-medium italic">
            Cultura da Honra (Danny Silk) | Edição de Férias
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Grupo dedicado aos alunos da BSSM Português que estão a ler o livro "Cultura da Honra". 
            Durante 8 semanas, exploramos juntos princípios que fortalecem relacionamentos saudáveis, 
            comunicação eficaz, responsabilidade pessoal e uma cultura baseada em honra e amor. 
            Mantemos o foco no grupo postando apenas assuntos relacionados com a leitura do livro!
          </p>
        </section>

        {/* Autor e Créditos */}
        <section className="border-t pt-8 space-y-4">
          <h2 className="text-xl font-medium">Desenvolvimento</h2>
          <p className="text-sm text-muted-foreground">
            <strong>Autor:</strong> Guilherme Brennand <br />
            <strong>Contacto:</strong>{' '}
            <a href="mailto:g.brennand@outlook.com" className="text-primary hover:underline">
              g.brennand@outlook.com
            </a>
          </p>
          <p className="text-xs text-muted-foreground italic mt-4">
            Data de criação: Junho de 2026.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Todo o conteúdo metodológico pertence aos autores originais. Esta aplicação é um 
            material de apoio sem fins lucrativos.
          </p>
        </section>

      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-8 mt-auto border-t border-border/40 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-sm text-muted-foreground">
          Desenvolvido por <strong>Guilherme Brennand</strong>.{' '}
          <a 
            href="/about" 
            className="text-primary hover:underline font-medium ml-2"
          >
            Sobre a Aplicação
          </a>
        </p>
      </div>
    </footer>
  );
}