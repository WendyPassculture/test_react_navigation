import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, NavigationContainerRef} from "@react-navigation/native";
import {MainNavigator} from "./src/navigators/MainNavigator";
import {routes} from "./src/routes";

export default function App() {
  const navigationRef = React.useRef<NavigationContainerRef>(null);
  return (
    <NavigationContainer ref={navigationRef} onUnhandledAction={() =>{
      navigationRef.current!.navigate(routes.notFound)
    }}>
      <MainNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
