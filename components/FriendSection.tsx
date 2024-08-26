import { TouchableOpacity, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface FriendSectionProps {
  friendProfileLen: number;
  onPress: () => void;
  isOpened: boolean;
}

export default ({
  friendProfileLen,
  onPress,
  isOpened,
}: FriendSectionProps) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ color: "grey" }}>친구 {friendProfileLen}</Text>
      <TouchableOpacity onPress={onPress}>
        {isOpened ? (
          <Ionicons name="arrow-down" size={20} color="black" />
        ) : (
          <Ionicons name="arrow-up" size={20} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};
