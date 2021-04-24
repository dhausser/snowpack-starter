import * as React from 'react'
import { useQuery } from 'react-query'

interface RepoData {
  name: string
  description: string
  subscribers_count: number
  stargazers_count: number
  forks_count: number
}

function Example(): React.ReactElement {
  const { isLoading, error, data } = useQuery<RepoData, Error>('repoData', () =>
    fetch(
      'https://api.github.com/repos/tannerlinsley/react-query'
    ).then((res) => res.json())
  )

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>{'An error has occured: ' + error.message}</p>

  return (
    <p>
      {data ? (
        <div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <strong>👀 {data.subscribers_count}</strong> 29{' '}
          <strong>✨ {data.stargazers_count}</strong> 30{' '}
          <strong>🍴 {data.forks_count}</strong>
        </div>
      ) : null}
    </p>
  )
}

export { Example }
