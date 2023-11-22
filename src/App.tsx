import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./styles/index.scss";

import "primereact/resources/primereact.min.css";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-teal/theme.css";
import { ThemeContext } from "./context/themeContext";
import MemoizedHeader from "./components/Header/Header";
import { Suspense, useState } from "react";
import { ThemeModes } from "./types/common.types";
import Registration from "./pages/Auth/Auth";
import Main from "./pages/Main/Main";

function App() {
  const [theme, setTheme] = useState<ThemeModes>("light");

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="App">
          <MemoizedHeader></MemoizedHeader>
          <Suspense fallback={<></>}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
