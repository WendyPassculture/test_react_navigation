import * as React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {PublicNavigationParams, routes} from "../routes";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {useContext} from "react";
import {AuthContext} from "../reducers/Auth";

export type LoginProps = NativeStackScreenProps<PublicNavigationParams, typeof routes.login>;

export const Login: React.FC<LoginProps> = ({navigation: {navigate}, route: {params}}) => {
  const {
    loginSuccess
  } = useContext(AuthContext);

  const onLogin = () => {
    loginSuccess();
    requestAnimationFrame(() => navigate(params.nextRoute!.name as keyof PublicNavigationParams, params.nextRoute!.params));
  }
  return (
    <View style={styles.container}>

      <TextInput style={styles.input} placeholder={"Login"}/>
      <TextInput style={styles.input} placeholder={"Mot de passe"}/>
      <Button color={"red"} title={"Se connecter"} onPress={onLogin}/>
      <Text style={styles.or}>ou</Text>
      <Button title={"S'inscrire"} onPress={() => navigate(routes.signup, {
        nextRoute: params.nextRoute
      })}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  or: {
    textAlign: "center",
    marginVertical: 20
  },
  input: {
    height: 44,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 5,
    borderRadius: 5
  }
})
