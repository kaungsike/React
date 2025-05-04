import React, {
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react"
  import PropTypes from "prop-types"
  
  const ThemeProviderContext = createContext({
    theme: "system",
    setTheme: () => null,
  })
  
  export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
    ...props
  }) {
    const [theme, setThemeState] = useState(() => {
      return localStorage.getItem(storageKey) || defaultTheme
    })
  
    useEffect(() => {
      const root = window.document.documentElement
      root.classList.remove("light", "dark")
  
      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        root.classList.add(systemTheme)
      } else {
        root.classList.add(theme)
      }
    }, [theme])
  
    const setTheme = (newTheme) => {
      localStorage.setItem(storageKey, newTheme)
      setThemeState(newTheme)
    }
  
    const value = {
      theme,
      setTheme,
    }
  
    return (
      <ThemeProviderContext.Provider value={value} {...props}>
        {children}
      </ThemeProviderContext.Provider>
    )
  }
  
  ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
    defaultTheme: PropTypes.oneOf(["light", "dark", "system"]),
    storageKey: PropTypes.string,
  }
  
  export const useTheme = () => {
    const context = useContext(ThemeProviderContext)
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
  }
  