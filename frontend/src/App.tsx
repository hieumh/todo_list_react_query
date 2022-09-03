import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "antd/dist/antd.css"

import "./index.css"
import { routes } from "./routes"
import LayoutApp from "./Layout"
import { QueryClient, QueryClientProvider } from "react-query"
import ErrorBoundary from "./controller/ErrorBoundary"
import { Provider } from "react-redux"
import { store } from "./store/store"

export default function App() {
  const client = new QueryClient();
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <Router>
            <LayoutApp>
              <Routes>
                {routes.map((route, index) => (
                  <Route key={index} {...route} />
                ))}
              </Routes>
            </LayoutApp>
          </Router>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  )
}
