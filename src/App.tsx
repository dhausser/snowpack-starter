import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {AuthenticatedApp} from './components/authenticated-app'
import {UnauthenticatedApp} from './components/unauthenticated-app'
import {useAuthenticatedUser} from './components/user'

const queryClient = new QueryClient()

function App() {
  const authenticated = useAuthenticatedUser()
  return authenticated ? (
    <QueryClientProvider client={queryClient}>
      <AuthenticatedApp />
    </QueryClientProvider>
  ) : (
    <UnauthenticatedApp />
  )
}

export default App
