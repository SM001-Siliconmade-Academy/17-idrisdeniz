import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";

const PicArea = () => {
  const win = Dimensions.get("window");
  const ratio = win.width / 248;

  return (
    <View style={styles.container}>
      <View style={styles.leftBar}>
        <Image
          style={{
            width: "100%",
            height: ratio * 90,
            borderRadius: 10,
            resizeMode: "cover",
          }}
          source={require("../../../assets/categories/giyim.png")}
        />
        <Image
          style={{
            width: "100%",
            height: ratio * 90,
            borderRadius: 10,
            resizeMode: "cover",
            marginTop: 10,
          }}
          source={require("../../../assets/categories/aksesuar.png")}
        />
        <Image
          style={{
            width: "100%",
            height: ratio * 90,
            borderRadius: 10,
            resizeMode: "cover",
            marginTop: 10,
          }}
          source={require("../../../assets/categories/canta.png")}
        />
        <Image
          style={{
            width: "100%",
            height: ratio * 90,
            borderRadius: 10,
            resizeMode: "cover",
            marginTop: 10,
          }}
          source={require("../../../assets/categories/kozmetik.png")}
        />
      </View>
      <View style={styles.rightBar}>
        <Image
          style={{
            width: "100%",
            height: ratio * 90,
            borderRadius: 10,
            resizeMode: "cover",
          }}
          source={require("../../../assets/categories/ayakkabi.png")}
        />
        <Image
          style={{
            width: "100%",
            height: ratio * 90,
            borderRadius: 10,
            resizeMode: "cover",
            marginTop: 10,
          }}
          source={require("../../../assets/categories/spor.png")}
        />
        <Image
          style={{
            width: "100%",
            height: ratio * 90,
            borderRadius: 10,
            resizeMode: "cover",
            marginTop: 10,
          }}
          source={require("../../../assets/categories/bebek-cocuk.png")}
        />
        <Image
          style={{
            width: "100%",
            height: ratio * 90,
            borderRadius: 10,
            resizeMode: "cover",
            marginTop: 10,
          }}
          source={require("../../../assets/categories/yeme-icme.png")}
        />
      </View>
    </View>
  );
};

export default PicArea;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  leftBar: {
    flex: 1,
    marginRight: 15,
  },
  rightBar: {
    flex: 1,
  },
  image: {},
});
