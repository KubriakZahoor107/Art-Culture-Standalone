if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  console.debug = () => {}
  console.error = () => {}
}

export const debug = (...args) => {
  if (process.env.NODE_ENV !== 'production') {
    console.debug(...args)
  }
}

export const error = (...args) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(...args)
  }
}
