import Home from "./pages/Home";
import AppLoader from "./components/AppLoader";
import { Suspense } from "react";
function App() {
  return (
    <main>
      <Suspense fallback={<AppLoader />}>
        <Home />
      </Suspense>
    </main>
  );
}

export default App;
