import React from 'react'
import {client} from './utils/api-client'
import {useAsync} from './utils/hooks'

interface AppProps {}

async function getUser() {
  const data = await client()

  if (data) {
    const [user] = data.results
    return user
  }

  return null
}

function App(props: AppProps) {
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
  } = useAsync()

  React.useEffect(() => {
    run(getUser())
  }, [run])

  if (isLoading || isIdle) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <pre>{error.message}</pre>
  }

  if (isSuccess) {
    return user ? (
      <div>
        <h1>
          {user.name.first} {user.name.last}
        </h1>
        <pre>{user.email}</pre>
        <p>
          From {user.location.city}, {user.location.country}
        </p>
        <img src={user.picture.large}></img>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    ) : (
      <h1>Welcome to Snowpack!</h1>
    )
  }

  return null
}

export default App
