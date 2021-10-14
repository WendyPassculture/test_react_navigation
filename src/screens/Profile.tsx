import * as React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {MainNavigationParams, routes} from "../routes";
import {Button, StyleSheet, Text, View} from "react-native";
import {useContext} from "react";
import {AuthContext} from "../reducers/Auth";

export type ProfileProps = NativeStackScreenProps<MainNavigationParams, typeof routes.home>;

export const Profile: React.FC<ProfileProps> = () => {
  const {
    loginFail
  } = useContext(AuthContext);
  return (
    <View style={styles.container}>

      <View style={styles.profile}>
        <View style={styles.profilePicture}  />
        <Text style={styles.profileName}>Wendy JEAN-LOUIS</Text>
      </View>
      <Button color={"red"} title={"Se déconnecter"} onPress={loginFail}/>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20
  },
  profile:{
    flexDirection:"row",
    marginBottom:30,
    backgroundColor:"#FFF",
    padding:10,
    borderRadius:5,
    alignItems:"center"
  },
  profilePicture:{
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:"limegreen"
  },
  profileName:{
    marginLeft:20,
    fontWeight:"600",
    color:"#444",
    fontSize:20,
  }
})
