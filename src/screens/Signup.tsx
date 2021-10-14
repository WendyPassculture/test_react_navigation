import * as React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {MainNavigationParams, PublicNavigationParams, routes} from "../routes";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {useContext} from "react";
import {AuthContext} from "../reducers/Auth";

export type SignupProps = NativeStackScreenProps<PublicNavigationParams, typeof routes.signup>;

export const Signup: React.FC<SignupProps> = ({navigation: {navigate}, route: {params}}) => {
  const {
    loginSuccess
  } = useContext(AuthContext);

  const onSignup = () => {
    loginSuccess();
    requestAnimationFrame(() => navigate(params.nextRoute!.name as keyof PublicNavigationParams, params.nextRoute!.params));
  }

  return (
    <View style={styles.container}>

      <TextInput style={styles.input} placeholder={"Email"}/>
      <TextInput style={styles.input} placeholder={"Login"}/>
      <TextInput style={styles.input} placeholder={"Mot de passe"}/>
      <Button color={"red"} title={"Valider mon inscription"} onPress={onSignup}/>
      <Text style={styles.or}>ou</Text>
      <Button title={"Se connecter"} onPress={() => navigate(routes.login, {
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
