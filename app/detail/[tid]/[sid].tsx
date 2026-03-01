import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { usePrefs } from "../../../src/context/PreferencesContext";
import { TOPICS } from "../../../src/data/content";

export default function DetailScreen() {
  const { tid, sid } = useLocalSearchParams<{ tid: string; sid: string }>();
  const { scale } = usePrefs();

  const { topic, sub } = useMemo(() => {
    const topic = TOPICS.find((t) => t.id === tid);
    const sub = topic?.subTopics.find((s) => s.id === sid);
    return { topic, sub };
  }, [tid, sid]);

  if (!topic || !sub) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 16 * scale, fontWeight: "800" }}>İçerik bulunamadı.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={{ fontSize: 18 * scale, fontWeight: "900", marginBottom: 10 }}>
          {sub.title}
        </Text>

        <Text style={{ fontSize: 15 * scale, lineHeight: 22 * scale }}>
          {sub.body}
        </Text>

        {/* İstersen buraya bir "DINLE" butonu da ekleriz */}
        {/* Şimdilik metin ekranı; istersen ekleyeyim */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#bfe8ff" },
  content: { padding: 16, paddingBottom: 28 },
});