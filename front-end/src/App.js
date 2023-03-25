import {BrowserRouter} from "react-router-dom";
import AppDashboard from "./components/dashboard/AppDashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import {Provider} from "react-redux";

const queryClient = new QueryClient();
function App() {
  return (
      <BrowserRouter>
          <QueryClientProvider client={queryClient}>
                <AppDashboard />
          </QueryClientProvider>
      </BrowserRouter>
  );
}

export default App;
