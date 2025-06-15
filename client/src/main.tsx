import "./index.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ToastContainer />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
