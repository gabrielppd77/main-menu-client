import Home from "@pages/Home";

import MainProvider from "@providers/MainProvider";
import QueryClientProvider from "@providers/QueryClientProvider";

function App() {
  return (
    <QueryClientProvider>
      <MainProvider>
        <Home />
      </MainProvider>
    </QueryClientProvider>
  );
}

export default App;
