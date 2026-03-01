import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type FontSize = "small" | "medium" | "large";
type Prefs = { fontSize: FontSize; setFontSize: (v: FontSize) => void; scale: number };

const PreferencesContext = createContext<Prefs | null>(null);
const KEY = "prefs_font_size_v1";

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>("medium");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const v = await AsyncStorage.getItem(KEY);
        if (v === "small" || v === "medium" || v === "large") setFontSizeState(v);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  const setFontSize = async (v: FontSize) => {
    setFontSizeState(v);
    await AsyncStorage.setItem(KEY, v);
  };

  const scale = fontSize === "small" ? 0.9 : fontSize === "large" ? 1.2 : 1.0;

  const value = useMemo(() => ({ fontSize, setFontSize, scale }), [fontSize, scale]);

  if (!loaded) return null;

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePrefs() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error("usePrefs must be used inside PreferencesProvider");
  return ctx;
}