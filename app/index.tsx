import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Header from "@/components/Header";
import MyProfile from "@/components/MyProfile";
import { friendProfiles, myProfile } from "@/constants/data";
import Margin from "@/components/Margin";
import Division from "@/components/Division";
import FriendSection from "@/components/FriendSection";
import FridendList from "@/components/FridendList";
import TabBar from "@/components/TabBar";

const HomeScreen = () => {
  const [isOpened, setIsOpened] = useState(true);

  const onPressArrow = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <Header />
        <Margin height={10} />
        <MyProfile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />
        <Margin height={16} />

        <Division />
        <FriendSection
          isOpened={isOpened}
          friendProfileLen={friendProfiles.length}
          onPress={onPressArrow}
        />
        <FridendList data={friendProfiles} isOpened={isOpened} />
        <Margin height={12} />
        <TabBar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 14,
  },
});

export default HomeScreen;
