import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './contexts/AuthProvider'
import { NetflixProvider } from './contexts/NetflixProvider'
import { StorageProvider } from './contexts/StorageProvider'
import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyles />
    <StorageProvider>
      <AuthProvider>
        <NetflixProvider>
          <App />
        </NetflixProvider>
      </AuthProvider>
    </StorageProvider>
  </>
)
