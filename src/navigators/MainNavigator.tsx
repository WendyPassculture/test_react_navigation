import * as React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {MainNavigationParams, routes} from "../routes";
import {Home} from "../screens/Home";
import {authReducer, authState as initialAuthState, AuthContext, authContextValue} from "../reducers/Auth";
import {PublicNavigator} from "./PublicNavigator";
import {PrivateNavigator} from "./PrivateNavigator";
import {NotFound} from "../screens/NotFound";

const Stack = createStackNavigator<MainNavigationParams>();

export interface MainNavigatorProps {

}

export const MainNavigator: React.FC<MainNavigatorProps> = () => {
  const [authState, dispatch] = React.useReducer(authReducer, initialAuthState);
  const value = React.useMemo(() => authContextValue(dispatch), []);

  return (
    <AuthContext.Provider value={{
      ...value,
      ...authState
    }}>
      <Stack.Navigator mode={"modal"}>
        <Stack.Screen name={routes.home} component={Home}/>

        {authState.isLogged ? <Stack.Screen name={routes.private} component={PrivateNavigator} options={{headerShown:false}}/> :
          <Stack.Screen name={routes.public} component={PublicNavigator} options={{headerShown:false}}/>
        }

        <Stack.Screen name={routes.notFound} component={NotFound}/>
      </Stack.Navigator>
    </AuthContext.Provider>
  )
}
