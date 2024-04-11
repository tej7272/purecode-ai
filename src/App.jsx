import { AppProvidersWrapper, BackToTop } from "./components";
import { configureFakeBackend } from "@/common";

// styles
import "@/assets/css/style.css";
import { AdminLayout } from "./layouts";

configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
      <AdminLayout />
      <BackToTop />
    </AppProvidersWrapper>
  );
};

export default App;
