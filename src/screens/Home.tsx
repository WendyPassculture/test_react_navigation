import * as React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {MainNavigationParams, routes} from "../routes";
import {Button, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useContext, useReducer} from "react";
import {AuthContext} from "../reducers/Auth";

export type HomeProps = NativeStackScreenProps<MainNavigationParams, typeof routes.home>;

export const Home: React.FC<HomeProps> = ({navigation: {navigate}}) => {
  const {isLogged} = useContext(AuthContext);
  console.log('isLogged : ', isLogged);
  const goToProfile = () => {
    if (isLogged) {
      navigate(routes.private, {
        screen: routes.profile
      })
    } else {
      navigate(routes.public, {
        screen: routes.login,
        params: {
          nextRoute:{
            name: routes.private,
            params:{
              screen: routes.profile
            }
          }
        }
      })
    }
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.wellcome}>Bienvenue sur mon application</Text>
        <View style={{flex: 1}}>
          <Button title={"Aller vers le profile -->"} onPress={goToProfile}/>
        </View>


        <View>
          <Button title={"Voir les conditions générales"} onPress={() => navigate(routes.cgu)}/>
        </View>

      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wellcome: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1,
    color: "red"
  }
})
