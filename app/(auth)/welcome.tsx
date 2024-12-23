import CustomButton from "@/components/CustomeButton";
import { onboarding } from "@/constant";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastIndex = onboarding?.length - 1 === activeIndex;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white p-5">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-in")}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]" />}
        activeDot={<View className="w-[32px] h-[4px] mx-1 bg-black" />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => {
          return (
            <View
              key={item?.id}
              className="flex items-center justify-center p-5"
            >
              <Image
                source={item.image}
                className="w-full h-[300]"
                resizeMode="contain"
              />
              <View className="flex justify-center items-center w-full mt-10">
                <Text className="text-black text-3xl font-bold mx-10 text-center">
                  {item?.title}
                </Text>
                <Text className="text-md font font-JakartaSemiBold text-center">
                  {item.description}
                </Text>
              </View>
            </View>
          );
        })}
      </Swiper>

      <CustomButton
        title={isLastIndex ? "Get Started" : "Next"}
        className="w-11/12 mt-10"
        onPress={() =>
          isLastIndex
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
      />
    </SafeAreaView>
  );
};

export default Welcome;
