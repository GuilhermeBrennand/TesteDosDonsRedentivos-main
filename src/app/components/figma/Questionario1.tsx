import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Gift,
  GiftKey,
  View,
  calculateScores,
  getTopKeys,
  giftCycle,
  gifts,
  redemptiveGiftCycle,
} from "./questionario-shared";
import { questions1 } from "./questionario-questions";

const questions = questions1;

const QUESTIONS_PER_PAGE = 7;
const TOTAL_PAGES = Math.ceil(questions.length / QUESTIONS_PER_PAGE);

const scaleLabels = [
  { value: 1, label: "Nunca", desc: "Quase nunca verdadeiro" },
  { value: 2, label: "Às vezes", desc: "Ocasionalmente verdadeiro" },
  { value: 4, label: "Usualmente", desc: "Na maioria das vezes" },
  { value: 5, label: "Sempre", desc: "Sempre verdadeiro" },
];

function WelcomeView({
  onStart,
  onBack,
}: {
  onStart: () => void;
  onBack?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center relative"
    >
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-8 left-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Voltar
        </button>
      )}

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
          Teste dos
          <br />
          <span className="text-primary italic">Dons Redentivos</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Descubra qual dos sete dons redentivos define a maneira como Deus te criou para ver, sentir e agir no mundo.
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
        className="flex flex-col items-center gap-4"
      >
        <button
          onClick={onStart}
          className="group relative px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold tracking-wide hover:bg-accent transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-accent/30 hover:scale-105"
        >
          Começar o Teste
          <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
        </button>
        <p className="text-muted-foreground text-sm">
          {questions.length} questões • Sem respostas certas ou erradas
        </p>
      </motion.div>
    </motion.div>
  );
}

function InstructionsView({
  onStart,
  onStartQ2,
  onBack,
}: {
  onStart: () => void;
  onStartQ2?: () => void;
  onBack?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
    >
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-8 left-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Voltar
        </button>
      )}

      <div className="max-w-2xl w-full">
        <h2
          className="text-4xl md:text-5xl font-normal mb-2 text-center"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          Como Responder
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Leia com atenção antes de começar
        </p>

        <div className="space-y-4 mb-10">
          {[
            {
              icon: "🎯",
              title: "Seja honesto",
              text: "Não há respostas certas ou erradas. Indique o que você É, não o que gostaria de ser ou acha que deveria ser.",
            },
            {
              icon: "⚡",
              title: "Confie no primeiro instinto",
              text: "Sua primeira resposta geralmente é a mais precisa. Não pense demais — responda com naturalidade.",
            },
            {
              icon: "🔄",
              title: "Diferencie hábito de natureza",
              text: "Diferencie o comportamento aprendido de como você naturalmente pensa e sente. Não deixe o que você faz atualmente afetar suas respostas.",
            },
            {
              icon: "❓",
              title: "Se não entender",
              text: "Se não compreender uma afirmação, provavelmente significa que você não está motivado para pensar dessa forma. Dê a si mesmo uma nota baixa.",
            },
          ].map((item) => (
            <div
              key={item.icon}
              className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <h3
                  className="font-semibold text-foreground mb-1"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: "1.1rem",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl border border-border/50 p-6 mb-10">
          <h3
            className="font-semibold text-foreground mb-4 text-center"
            style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: "1.2rem",
            }}
          >
            Escala de Pontuação - Questionario 1
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-2">
            {scaleLabels.map((s) => (
              <div
                key={s.value}
                className="w-24 flex flex-col items-center gap-1 p-2 rounded-xl bg-secondary/50"
              >
                <span className="text-2xl font-bold text-primary">{s.value}</span>
                <span className="text-xs text-muted-foreground text-center leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <button
            onClick={onStart}
            className="w-full py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-accent transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-primary/10"
          >
            Começar o Teste
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function QuizView({
  answers,
  onAnswer,
  onFinish,
  onBack,
}: {
  answers: (number | null)[];
  onAnswer: (index: number, value: number) => void;
  onFinish: () => void;
  onBack?: () => void;
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);
  
  const pageStart = currentPage * QUESTIONS_PER_PAGE;
  const pageEnd = Math.min(pageStart + QUESTIONS_PER_PAGE, questions.length);
  const pageQuestions = questions.slice(pageStart, pageEnd);
  
  const pageAnswered = pageQuestions.every(
    (_, i) => answers[pageStart + i] !== null,
  );

  const totalAnswered = answers.filter((a) => a !== null).length;
  const progress = totalAnswered / questions.length;

  const goNext = () => {
    if (currentPage < TOTAL_PAGES - 1) {
      setCurrentPage((p) => p + 1);
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      onFinish();
    }
  };

  const goPrev = () => {
    if (currentPage > 0) {
      setCurrentPage((p) => p - 1);
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen px-4 py-8">
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-8 left-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Voltar
        </button>
      )}
      <div ref={topRef} />
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-muted-foreground">
            Página {currentPage + 1} de {TOTAL_PAGES}
          </span>
          <span className="text-sm text-muted-foreground">
            {totalAnswered} / {questions.length} respondidas
          </span>
        </div>
        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="max-w-2xl mx-auto space-y-5 mb-10"
        >
          {pageQuestions.map((q, i) => {
            const globalIndex = pageStart + i;
            const current = answers[globalIndex];
            return (
              <div
                key={globalIndex}
                className="bg-card rounded-2xl border border-border/50 p-5 md:p-6"
              >
                <p className="text-foreground mb-5 leading-relaxed text-sm md:text-base">
                  <span className="text-muted-foreground text-xs mr-2 font-mono">
                    {globalIndex + 1}.
                  </span>
                  {q}
                </p>
                <div className="flex items-center gap-1 md:gap-2">
                  {scaleLabels.map((s) => (
                    <button
                      key={s.value}
                      onClick={() => onAnswer(globalIndex, s.value)}
                      className={`flex-1 flex flex-col items-center py-2 md:py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 border ${
                        current === s.value
                          ? "bg-primary text-primary-foreground border-primary scale-105 shadow-lg shadow-primary/20"
                          : "bg-secondary/50 text-muted-foreground border-transparent hover:border-primary/40 hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      <span className="text-base md:text-lg">{s.value}</span>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-1.5 px-0.5">
                  <span className="text-xs text-muted-foreground/60">Nunca</span>
                  <span className="text-xs text-muted-foreground/60">Sempre</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
      <div className="max-w-2xl mx-auto flex gap-3">
        {currentPage > 0 && (
          <button
            onClick={goPrev}
            className="flex-1 py-3.5 rounded-full border border-border/70 text-muted-foreground hover:text-foreground transition-all duration-200"
          >
            ← Anterior
          </button>
        )}
        <button
          onClick={goNext}
          disabled={!pageAnswered}
          className={`flex-1 py-3.5 rounded-full font-semibold transition-all duration-200 ${
            pageAnswered
              ? "bg-primary text-primary-foreground hover:bg-accent hover:scale-102 shadow-lg shadow-primary/15"
              : "bg-secondary text-muted-foreground cursor-not-allowed"
          }`}
        >
          {currentPage < TOTAL_PAGES - 1
            ? "Próxima Página →"
            : "Finalizar e Ver Resultado →"}
        </button>
      </div>

      {!pageAnswered && (
        <p className="text-center text-xs text-muted-foreground mt-3">
          Responda todas as questões desta página para continuar
        </p>
      )}
    </div>
  );
}

function ResultsView({
  scores,
  onRestart,
  onBack,
}: {
  scores: Record<GiftKey, number>;
  onRestart: () => void;
  onBack?: () => void;
}) {
  const ranked = getTopKeys(scores);
  const primary = gifts[ranked[0]];
  const secondary = gifts[ranked[1]];
  const maxScore = 13 * 5; // 13 questions × max 5

  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen px-4 py-12"
    >
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-8 left-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Voltar
        </button>
      )}
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-3">
            Seu Dom Principal
          </p>
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-4"
            style={{
              background: `${primary.color}20`,
              border: `1px solid ${primary.color}40`,
            }}
          >
            <span className="text-3xl">{primary.emoji}</span>
            <h1
              className="text-4xl md:text-5xl font-normal"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: primary.lightColor,
              }}
            >
              {primary.name}
            </h1>
          </div>
          <p
            className="text-muted-foreground text-lg italic"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            "{primary.tagline}"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-2xl border border-border/50 p-6 mb-8"
        >
          <h2
            className="text-xl font-medium mb-5"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            Pontuação por Dom
          </h2>
          <div className="space-y-3">
            {ranked.map((key, rank) => {
              const g = gifts[key];
              const pct = (scores[key] / maxScore) * 100;
              return (
                <div key={key} className="flex items-center gap-3">
                  <div className="w-6 text-center">
                    <span className="text-sm">{g.emoji}</span>
                  </div>
                  <div className="w-24 md:w-28 flex-shrink-0">
                    <span className="text-sm text-foreground/80 truncate block">
                      {g.name}
                    </span>
                  </div>
                  <div className="flex-1 h-2.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: g.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{
                        delay: 0.4 + rank * 0.07,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                  <div className="w-12 text-right">
                    <span className="text-sm font-mono text-muted-foreground">
                      {scores[key]}/{maxScore}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl border p-6 mb-6"
          style={{
            background: `${primary.color}08`,
            borderColor: `${primary.color}30`,
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{primary.emoji}</span>
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                Dom Principal
              </p>
              <h2
                className="text-2xl font-medium"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: primary.lightColor,
                }}
              >
                {primary.name}
              </h2>
            </div>
          </div>
          <p className="text-foreground/85 leading-relaxed mb-5 text-sm md:text-base">
            {primary.description}
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2 tracking-wide uppercase opacity-70">
                Características
              </h3>
              <ul className="space-y-1.5">
                {primary.characteristics.slice(0, 4).map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span
                      style={{ color: primary.lightColor }}
                      className="mt-0.5 flex-shrink-0"
                    >
                      ✦
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2 tracking-wide uppercase opacity-70">
                Desafios
              </h3>
              <ul className="space-y-1.5">
                {primary.challenges.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-muted-foreground/50 mt-0.5 flex-shrink-0">◦</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t pt-4" style={{ borderColor: `${primary.color}20` }}>
            <h3 className="text-sm font-semibold text-foreground mb-2 tracking-wide uppercase opacity-70">
              Recomendação
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {primary.recommendation}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="rounded-2xl border p-6 mb-6"
          style={{
            background: `${secondary.color}06`,
            borderColor: `${secondary.color}25`,
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{secondary.emoji}</span>
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                Dom Secundário
              </p>
              <h2
                className="text-xl font-medium"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: secondary.lightColor,
                }}
              >
                {secondary.name}
              </h2>
            </div>
          </div>
          <p className="text-foreground/80 leading-relaxed text-sm">
            {secondary.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-10"
        >
          <h2
            className="text-2xl font-medium mb-5"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            Os Sete Dons Redentivos
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {Object.values(gifts).map((g) => (
              <div
                key={g.key}
                className="flex gap-3 p-4 rounded-xl border transition-all"
                style={{
                  background: `${g.color}08`,
                  borderColor:
                    ranked[0] === g.key ? `${g.color}50` : `${g.color}20`,
                }}
              >
                <span className="text-xl flex-shrink-0">{g.emoji}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm" style={{ color: g.lightColor }}>
                      {g.name}
                    </span>
                    {ranked[0] === g.key && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: `${g.color}30`,
                          color: g.lightColor,
                        }}
                      >
                        Principal
                      </span>
                    )}
                    {ranked[1] === g.key && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                        Secundário
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug italic">
                    {g.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={handleDownloadPdf}
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all duration-200 hover:scale-105 print-hidden"
          >
            ⬇️ Baixar PDF
          </button>
          <button
            onClick={onRestart}
            className="px-8 py-3.5 rounded-full border border-border/70 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
          >
            ↺ Refazer o Teste
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Questionario1({
  onStartQ2,
}: {
  onStartQ2?: () => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const [view, setView] = useState<View>("welcome");
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );
  const [scores, setScores] = useState<Record<GiftKey, number> | null>(null);


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  useEffect(() => {
    const p = location.pathname;
    if (p.endsWith("/instructions")) setView("instructions");
    else if (p.endsWith("/quiz")) setView("quiz");
    else if (p.endsWith("/results")) {
      setView("results");
      const s = (location.state as any)?.scores as Record<GiftKey, number> | undefined;
      if (s) setScores(s);
    } else {
      setView("welcome");
    }
  }, [location.pathname]);

  const base = "/questionario-1";
  const isActive = (sub: string) =>
    location.pathname === base || (sub === "" && location.pathname === base) || location.pathname.endsWith(sub ? `/${sub}` : "");

  const handleAnswer = (index: number, value: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

const handleFinish = () => {
     const s = calculateScores(answers, redemptiveGiftCycle);
    setScores(s);
    navigate("/questionario-1/results", { state: { scores: s } });
  };
  const handleRestart = () => {
    setAnswers(Array(questions.length).fill(null));
    setScores(null);
    navigate("/questionario-1");
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <AnimatePresence mode="wait">
        {view === "welcome" && (
          <WelcomeView key="welcome" onStart={() => navigate('/questionario-1/instructions')} />
        )}
        {view === "instructions" && (
          <InstructionsView
            key="instructions"
            onStart={() => navigate('/questionario-1/quiz')}
            onStartQ2={onStartQ2}
          />
        )}
        {view === "quiz" && (
          <QuizView
            key="quiz"
            answers={answers}
            onAnswer={handleAnswer}
            onFinish={handleFinish}
          />
        )}
        {view === "results" && scores && (
          <ResultsView key="results" scores={scores} onRestart={handleRestart} />
        )}
      </AnimatePresence>
    </div>
  );
}
