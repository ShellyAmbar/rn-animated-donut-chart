import {View} from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={{width: "100%", paddingHorizontal: 16}}>
      <DonutChart
        isCemiCircle={true}
        isShowDescription={true}
        precentegs={[
          {id: 5, value: 20, color: "purple", name: "home"},
          {id: 0, value: 10, color: "red", name: "clothes"},
          {id: 1, value: 50, color: "#FF1493", name: "pharma"},
          {id: 2, value: 10, color: "#cc33ff", name: "food"},
          {id: 3, value: 30, color: "#000080", name: "vacations"},
        ]}
        totalValueStyle={{color: "purple", fontSize: 50}}
      />
    </View>
  );
};

export default App;
