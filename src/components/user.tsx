import React from 'react'
import {useQuery} from 'react-query'
import {client} from '../utils/api-client'

interface User {
  name: {
    first: string
    last: string
  }
  email: string
  location: {
    city: string
    country: string
  }
  picture: {
    large: string
  }
}

function User() {
  const {data: user, error, isLoading, isIdle, isError, isSuccess} = useQuery<
    User,
    Error
  >('userData', () => client().then(data => data.results[0]))

  if (isLoading || isIdle) {
    return <p>Loading...</p>
  }

  if (isError && error) {
    return <pre>{error.message}</pre>
  }

  console.log(user)

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

export {User}
