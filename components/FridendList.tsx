import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MyProfile from "./MyProfile";
import Margin from "./Margin";

export default function FridendList({ data, isOpened }: any) {
  console.log(isOpened);
  if (!isOpened) return;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data.map((item: any) => (
        <View key={item.uri}>
          <MyProfile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={12} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
