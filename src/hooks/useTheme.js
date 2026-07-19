import { useState, useEffect } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(true) // default to dark (jungle at night 🌙)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  function toggleTheme() {
    setIsDark((prev) => !prev)
  }

  return { isDark, toggleTheme }
}