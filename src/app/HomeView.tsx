import { AnimatePresence, motion } from "motion/react";
import { gifts } from "./components/figma/questionario-shared";

type HomeViewProps = {
  onStartQ1: () => void;
  onStartQ2: () => void;
  onStartQ1Mock: () => void;
  onStartQ2Mock: () => void;
};

export function HomeView({
  onStartQ1,
  onStartQ2,
  onStartQ1Mock,
  onStartQ2Mock,
}: HomeViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium tracking-widest uppercase mb-8">
          BSSM • Clube do Livro
        </div>
        <h1
          className="text-5xl md:text-7xl font-normal text-foreground leading-tight mb-6"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          Testes dos
          <br />
          <span className="text-primary italic">Dons Redentivos e Motivacionais</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Escolha entre dois testes distintos para descobrir como seus
          dons redentivos e seu estilo motivacional se manifestam no
          seu jeito de pensar, agir e se relacionar.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mb-12"
      >
        {Object.values(gifts).map((g, i) => (
          <motion.div
            key={g.key}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.07 }}
            className="flex flex-col items-center gap-1 px-3 py-3 rounded-xl border border-border/50 bg-card/30"
          >
            <span className="text-2xl">{g.emoji}</span>
            <span className="text-sm font-medium text-foreground/80">{g.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl"
      >
        <button
          onClick={onStartQ1}
          className="group relative w-full px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold tracking-wide hover:bg-accent transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-accent/30 hover:scale-105"
        >
          Ir para Questionário 1
          <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
        </button>
        <button
          onClick={onStartQ2}
          className="group relative w-full px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold tracking-wide hover:bg-accent transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-accent/30 hover:scale-105"
        >
          Ir para Questionário 2
          <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
        </button>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </motion.div>
  );
}
