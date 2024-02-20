import { useState, useEffect } from "react";
import {
  Image,
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Plus } from "../svg/Plus";
import Button from "./Button";
import { Close } from "../svg/Close";
import { SearchBar } from "@rneui/themed";
import { useGetLatLon } from "../hooks/useGetLatLon";
import { useDispatch } from "react-redux";
import { addLocation } from "../util/store";

const theme = GlobalStyles.lightTheme;
// We need to get the height of the phone and use it relatively,
// This is because height of phones vary

const windowHeight = Dimensions.get("window").height;
export const AddressSearch = () => {
  // This state would determine if the drawer sheet is visible or not
  const dispatch = useDispatch();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  const matchedLocations = useGetLatLon(search);
  // Function to open the bottom sheet
  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  // Function to close the bottom sheet
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };
  return (
    <View>
      <Button onPress={handleOpenBottomSheet}>
        <Plus />
      </Button>
      <Modal
        animationType="slide"
        transparent={true}
        // We use the state here to toggle visibility of Bottom Sheet
        visible={isBottomSheetOpen}
        // We pass our function as default function to close the Modal
        onRequestClose={handleCloseBottomSheet}
      >
        <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
          <View
            style={{
              flex: 0,
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <View></View>
            <Button onPress={handleCloseBottomSheet}>
              <Close />
            </Button>
          </View>
          <View style={{ width: "100%" }}>
            <SearchBar
              placeholder="Type Here..."
              onChangeText={updateSearch}
              value={search}
              inputStyle={{
                backgroundColor: "transparent",
              }}
              inputContainerStyle={{
                backgroundColor: "transparent",
              }}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
                borderColor: theme.borderColor,
                borderWidth: 1,
                borderRadius: 10,
              }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
              {matchedLocations.map((location, index) => {
                const { latitude, longitude, admin1, name } = location;
                return (
                  <Button
                    key={index}
                    style={{ marginBottom: 10, marginTop: 10 }}
                    onPress={() => {
                      dispatch(
                        addLocation({ lat: latitude, lon: longitude, name })
                      );
                      handleCloseBottomSheet();
                      // set the state of the map to the selected location
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>{`${name}, ${admin1}`}</Text>
                  </Button>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// The StyleSheet is imported from React Native
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    display: "flex",
    right: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.backgroundColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: 0,
    borderWidth: 1,
    borderColor: theme.borderColor,
  },
});
