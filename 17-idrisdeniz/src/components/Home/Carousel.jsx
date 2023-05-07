import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from "react-native-reanimated";

const Carousel = ({ data }) => {
  const [newData] = useState([
    { key: "spacer-left" },
    ...data,
    { key: "spacer-right" },
  ]);

  const { width } = useWindowDimensions();
  const SIZE = width * 0.9;
  const SPACER = (width - SIZE) / 4;
  const x = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={16}
      snapToInterval={SIZE}
      decelerationRate="fast"
      onScroll={onScroll}
    >
      {newData.map((item, index) => {
        const style = useAnimatedStyle(() => {
          const scale = interpolate(
            x.value,
            [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
            [0.88, 1, 0.88]
          );
          return {
            transform: [{ scale }],
          };
        });

        if (!item.image) {
          return <View style={{ width: SPACER }} key={index} />;
        }

        return (
          <View style={{ width: SIZE }} key={index}>
            <Animated.View style={(styles.imageContainer, style)}>
              <Image style={styles.image} source={item.image} key={index}/>
            </Animated.View>
          </View>
        );
      })}
    </Animated.ScrollView>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 34,
    overflow: "hidden",
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: undefined,
    aspectRatio: 16 / 9,
  },
});
