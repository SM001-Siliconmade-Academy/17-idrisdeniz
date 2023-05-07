import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Linking,
  Pressable,
} from "react-native";
import { db } from "../../services/carouseldb";
import { useDispatch, useSelector } from "react-redux";
import {
  getOfferBarData,
  selectOfferBarPics,
  selectOfferBarStatus,
  selectOfferBarError,
} from "./OfferBarSlice";

//Screens
import Carousel from "./Carousel";
import ClickWinItems from "./ClickWinItems";
import MyOffersSlider from "./MyOffersSlider";
import LovemarksCollection from "./LovemarksCollection";
import LoveCategories from "./LoveCategories";
import i18n from "../../lang/_i18n";

const OfferBar = () => {
  const win = Dimensions.get("window");
  const ratio = win.width / 1018;
  const dispatch = useDispatch();
  const pics = useSelector(selectOfferBarPics);
  const status = useSelector(selectOfferBarStatus);
  const error = useSelector(selectOfferBarError);

  useEffect(() => {
    async function fetchOfferBarData() {
      try {
        // @ts-ignore
        await dispatch(getOfferBarData());
      } catch (error) {
        // handle error
      }
    }
    fetchOfferBarData();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.teklifTop}>
        <Text style={styles.teklifText}>{i18n.t("offerBar.offer")}</Text>
        <Text style={styles.teklifSayac}>1/{db.length}</Text>
      </View>

      <View style={styles.carousel}>
        <Carousel data={db} />
      </View>

      <View style={styles.offers}>
        {status === "loading" && <Text>Loading...</Text>}
        {status === "failed" && <Text>{error}</Text>}
        {status === "succeeded" &&
          pics.map((item, index) => (
            <Pressable
              onPress={() => Linking.openURL(item.visitUrl)}
              key={index}
            >
              <Image
                style={{
                  width: "100%",
                  height: ratio * 321,
                  resizeMode: "center",
                }}
                source={{ uri: item.imageUrl }}
              />
            </Pressable>
          ))}
      </View>

      <MyOffersSlider />

      <ClickWinItems />

      <LovemarksCollection />

      <LoveCategories />
    </View>
  );
};

export default OfferBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  teklifTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  teklifText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  teklifSayac: {
    fontWeight: "bold",
    backgroundColor: "#DFDFDF",
    fontSize: 12,
    borderRadius: 6,
    alignItems: "center",
    padding: 6,
  },
  carousel: {
    marginTop: 10,
  },
  offers: {
    marginTop: 10,
  },
});
