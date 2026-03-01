import { Pressable, Text } from "react-native";

export default function PlayButton({ onPress }: any) {
  return (
    <Pressable onPress={onPress}>
      <Text style={{ fontSize: 20 }}>▶</Text>
    </Pressable>
  );
}