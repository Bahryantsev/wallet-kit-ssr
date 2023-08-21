import React, { useContext } from 'react'

const createContext = <A>(name: string, defaultValue:A) => {
  const ctx = React.createContext<A | undefined>(undefined)

  const useCtx = () => {
    const c = useContext(ctx)
    if (!c) return defaultValue
    return c
  }

  return [useCtx, ctx.Provider] as const
}

export default createContext
