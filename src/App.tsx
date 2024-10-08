import QueryClientProvider from "@providers/QueryClientProvider";
import RouterProvider from "@providers/RouterProvider";

function App() {
  return (
    <QueryClientProvider>
      <RouterProvider />
    </QueryClientProvider>
  );
}

export default App;
