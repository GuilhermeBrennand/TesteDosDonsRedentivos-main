import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const parts = location.pathname.split("/").filter(Boolean);

  const breadcrumbNames: Record<string, string> = {
    "questionario-1": "Questionário 1",
    "questionario-2": "Questionário 2",
    instructions: "Instruções",
    quiz: "Quiz",
    results: "Resultados",
  };

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <nav className="text-xs text-muted-foreground flex items-center gap-4">
          <span className="flex items-center gap-2">
            <button
              onClick={() => navigate("/")}
              className="text-xs font-medium text-foreground hover:text-foreground hover:underline"
            >
              Home
            </button>
            {parts.length > 0 && <span className="text-muted-foreground/50">/</span>}
          </span>

          {parts.map((seg, i) => {
            const to = `/${parts.slice(0, i + 1).join("/")}`;
            const isLast = i === parts.length - 1;
            const label = breadcrumbNames[seg] || seg;
            return (
              <span key={to} className="flex items-center gap-2">
                {!isLast ? (
                  <button
                    onClick={() => navigate(to)}
                    className="text-xs hover:text-foreground hover:underline"
                  >
                    {label}
                  </button>
                ) : (
                  <span className="text-xs text-foreground font-medium">{label}</span>
                )}
                {!isLast && <span className="text-muted-foreground/50">/</span>}
              </span>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
