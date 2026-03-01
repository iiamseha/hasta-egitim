import { router, useLocalSearchParams } from "expo-router";
import * as Speech from "expo-speech";
import React, { useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MenuRow from "../../src/components/MenuRow";
import { usePrefs } from "../../src/context/PreferencesContext";
import { TOPICS } from "../../src/data/content";

export default function TopicScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { scale } = usePrefs();

  const topic = useMemo(() => TOPICS.find((t) => t.id === id), [id]);

  if (!topic) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 16 * scale, fontWeight: "800" }}>Başlık bulunamadı.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {topic.subTopics.map((s) => (
          <MenuRow
            key={s.id}
            title={s.title}
            scale={scale}
            onOpen={() => router.push(`/detail/${topic.id}/${s.id}`)}
            onSpeak={() => Speech.speak(s.title, { language: "tr-TR" })}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#bfe8ff" },
  content: { padding: 14, paddingBottom: 28 },
});