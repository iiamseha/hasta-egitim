import { router } from "expo-router";
import * as Speech from "expo-speech";
import { Pressable, ScrollView, Text, View } from "react-native";
import MenuRow from "../src/components/MenuRow";
import { TOPICS } from "../src/data/content";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#bfe8ff" }}>
      <ScrollView style={{ padding: 15 }}>
        {TOPICS.map((t) => (
          <MenuRow
            key={t.id}
            title={t.title}
            onOpen={() => router.push(`/topic/${t.id}`)}
            onSpeak={() => Speech.speak(t.title, { language: "tr-TR" })}
          />
        ))}

        {/* ✅ Yazı Boyutu ekranına giden buton */}
        <Pressable
          onPress={() => router.push("/settings")}
          style={{
            marginTop: 8,
            backgroundColor: "#0b8f5a",
            paddingVertical: 14,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "white", fontWeight: "900", textAlign: "center" }}>
            YAZI BOYUTU
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}