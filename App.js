import React from "react";
import {StyleSheet, View} from "react-native";
import DonutChart from "./components/donut-chart/donut-chart";
export default function App() {
  return (
    <View style={styles.container}>
      <DonutChart
        isCemiCircle={false}
        isShowDescription={true}
        precentegs={[
          {id: 5, value: 20, color: "purple", name: "home"},
          {id: 0, value: 10, color: "red", name: "clothes"},
          {id: 1, value: 50, color: "#FF1493", name: "pharma"},
          {id: 2, value: 10, color: "#cc33ff", name: "food"},
          {id: 3, value: 30, color: "#000080", name: "vacations"},
        ]}
        totalValueStyle={{color: "purple"}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
