import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {PrivateNavigationParams, routes} from "../routes";
import {Profile} from "../screens/Profile";


const Stack = createStackNavigator<PrivateNavigationParams>();

export interface PrivateNavigatorProps {

}
export const PrivateNavigator: React.FC<PrivateNavigatorProps> = () => {
  return (
    <Stack.Navigator mode={"card"}>
      <Stack.Screen name={routes.profile} component={Profile}/>
    </Stack.Navigator>
  )
}
