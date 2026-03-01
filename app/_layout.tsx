import { Stack } from "expo-router";
import { PreferencesProvider } from "../src/context/PreferencesContext";

export default function Layout() {
  return (
    <PreferencesProvider>
      <Stack />
    </PreferencesProvider>
  );
}