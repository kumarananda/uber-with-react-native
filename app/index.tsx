import { Redirect } from "expo-router";
import { Image, View, Text } from "react-native";

export default function HomeScreen() {
  return <Redirect href={"/(auth)/welcome"} />;
}
