import { AnimatePresence } from "motion/react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Questionario1 } from "./components/figma/Questionario1";
import { Questionario2 } from "./components/figma/Questionario2";
import { calculateScores } from "./components/figma/questionario-shared";
import {
  HomeView,
  mockAnswersQuestionario1,
  mockAnswersQuestionario2,
} from "./HomeView";
import { AboutView } from "./AboutView";

export function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <HomeView
              onStartQ1={() => navigate("/questionario-1")}
              onStartQ2={() => navigate("/questionario-2")}
            />
          }
        />
        <Route
          path="/questionario-1/*"
          element={
            <Questionario1
              onStartQ2={() => navigate("/questionario-2")}
            />
          }
        />
        <Route
          path="/questionario-2/*"
          element={<Questionario2 />}
        />
        <Route
            path="/about"
            element={<AboutView />}
        />
      </Routes>
    </AnimatePresence>
  );
}
