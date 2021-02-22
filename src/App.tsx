import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {User} from './components/user'
import {Example} from './components/example'

interface AppProps {}

const queryClient = new QueryClient()

function App(props: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <User />
    </QueryClientProvider>
  )
}

export default App
