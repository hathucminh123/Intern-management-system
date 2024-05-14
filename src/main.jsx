import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import 'antd/dist/antd.css'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,  
} from '@tanstack/react-query'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PersistGate } from 'redux-persist/integration/react'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> 
   <Provider store={store}  >
   <GoogleOAuthProvider clientId="225470423561-8q8bcl5kbhntde4k85p8lq02k87rv1pa.apps.googleusercontent.com">
   {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
   {/* </PersistGate> */}
   </GoogleOAuthProvider>
  </Provider>
  </QueryClientProvider>
  </React.StrictMode>
)
