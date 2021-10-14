import * as React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {MainNavigationParams, routes} from "../routes";
import {StyleSheet, Text, View} from "react-native";

export type NotFoundProps = NativeStackScreenProps<MainNavigationParams, typeof routes.home>;

export const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚠️{'\n'}Attention,{'\n'}Cette page n'existe pas</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },
  title:{
    fontSize:20,
    color:"red",
    textAlign:"center"
  }
})
