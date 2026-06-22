import { AppRoutes } from "./routes";
import Header from "./components/Header";

export default function App() {
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <Header />
      <AppRoutes />
    </div>
  );
}
