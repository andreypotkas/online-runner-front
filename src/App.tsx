import { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { LocalStorageService } from "./api/localStorage.service";
import MemoizedHeader from "./components/Header/Header";
import { ThemeContext } from "./context/themeContext";
import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import { AuthFormTypes } from "./pages/Auth/types/auth.types";
import MemoizedEvents from "./pages/Events/Events";
import Main from "./pages/Main/Main";
import { useAuthState } from "./state/auth.state";
import { ThemeModes } from "./types/common.types";

import "./styles/index.scss";
import "primereact/resources/primereact.min.css";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-teal/theme.css";

function App() {
  const [theme, setTheme] = useState<ThemeModes>("light");
  const { setAuthData } = useAuthState();

  useEffect(() => {
    const authData = LocalStorageService.getAuthData();
    if (authData) {
      // console.log("LOGIN FROM LOCAL_STORAGE", authData);

      setAuthData(authData);
    }
  }, [setAuthData]);

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="App">
          <MemoizedHeader></MemoizedHeader>
          <Suspense fallback={<></>}>
            <Routes>
              <Route path="/" element={<Main />} />

              <Route
                path="/auth/login"
                element={<Auth type={AuthFormTypes.LOGIN} />}
              />
              <Route
                path="/auth/register"
                element={<Auth type={AuthFormTypes.REGISTER} />}
              />

              <Route path="/events" element={<MemoizedEvents />} />
              <Route path="/admin" element={<Admin />} />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
