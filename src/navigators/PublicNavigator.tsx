import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {PublicNavigationParams, routes} from "../routes";
import {Login} from "../screens/Login";
import {Signup} from "../screens/Signup";


const Stack = createStackNavigator<PublicNavigationParams>();

export interface PublicNavigatorProps {

}
export const PublicNavigator: React.FC<PublicNavigatorProps> = () => {
  return (
    <Stack.Navigator mode={"card"}>
      <Stack.Screen name={routes.login} component={Login}/>
      <Stack.Screen name={routes.signup} component={Signup}/>
    </Stack.Navigator>
  )
}
