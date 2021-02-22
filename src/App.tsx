import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {User} from './components/user'

interface AppProps {}

const queryClient = new QueryClient()

function App(props: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <User />
    </QueryClientProvider>
  )
}

export default App
