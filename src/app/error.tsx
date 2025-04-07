'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
import ErrorComponent from '../commons/error'
 
export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <ErrorComponent message={error.message}/>
  )
}