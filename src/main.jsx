import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import Infinite from "../src/components/Infinite.jsx"
import { Provider } from 'react-redux'
import { store } from './app/store.jsx'
import { ToastContainer } from 'react-toastify';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Infinite />
        <ToastContainer />
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
)
