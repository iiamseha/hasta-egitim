import { Pressable, StyleSheet, Text, View } from "react-native";
import PlayButton from "./PlayButton";

export default function MenuRow({ title, onOpen, onSpeak, scale = 1 }: any) {
  return (
    <View style={styles.row}>
      <Pressable style={styles.card} onPress={onOpen}>
        <Text style={[styles.text, { fontSize: 15 * (scale ?? 1) }]}>{title}</Text>
      </Pressable>

      <PlayButton onPress={onSpeak} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  card: {
    flex: 1,
    backgroundColor: "#1aa1c8",
    padding: 15,
    borderRadius: 10
  },
  text: {
    color: "white",
    fontWeight: "bold"
  }
});