import Home from "@pages/Home";

import MainProvider from "@providers/MainProvider";

function App() {
  return (
    <MainProvider>
      <Home />
    </MainProvider>
  );
}

export default App;
