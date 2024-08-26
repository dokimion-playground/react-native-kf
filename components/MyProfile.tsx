import { Image, View, Text } from "react-native";
import Margin from "./Margin";

interface MyProfileProps {
  name: string;
  introduction: string;
  uri: string;
}

export default ({ name, introduction, uri }: MyProfileProps) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri }}
        style={{ width: 50, height: 50, borderRadius: 20 }}
      />
      <View style={{ justifyContent: "center", marginLeft: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>
        <Margin height={6} />
        <Text style={{ fontSize: 12 }}>{introduction}</Text>
      </View>
    </View>
  );
};
