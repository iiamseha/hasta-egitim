import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { usePrefs } from "../src/context/PreferencesContext";

function Option({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable style={[styles.opt, selected && styles.optSelected]} onPress={onPress}>
      <Text style={[styles.optText, selected && styles.optTextSelected]}>{label}</Text>
    </Pressable>
  );
}

export default function SettingsScreen() {
  const { fontSize, setFontSize } = usePrefs();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Option label="KÜÇÜK" selected={fontSize === "small"} onPress={() => setFontSize("small")} />
        <Option label="ORTA" selected={fontSize === "medium"} onPress={() => setFontSize("medium")} />
        <Option label="BÜYÜK" selected={fontSize === "large"} onPress={() => setFontSize("large")} />
      </View>

      <Text style={styles.note}>Yazı boyutu tüm metinlere uygulanır ve kaydedilir.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#bfe8ff", padding: 16 },
  card: { backgroundColor: "white", borderRadius: 14, padding: 14, gap: 10 },
  opt: {
    backgroundColor: "#e8f6ff",
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#cbe9ff",
  },
  optSelected: { backgroundColor: "#0b8f5a", borderColor: "#0b8f5a" },
  optText: { textAlign: "center", fontWeight: "900" },
  optTextSelected: { color: "white" },
  note: { marginTop: 12, fontWeight: "700" },
});