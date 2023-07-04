
import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import  {createStackNavigator} from '@react-navigation/stack'
import  {NavigationContainer} from  '@react-navigation/native'
import LoginScreen from './src/screens/LoginScreen';

const stack=createStackNavigator();
const Navigation=()=>{
  return(
    <NavigationContainer>
      <stack.Navigator >
        <stack.Screen name='login' component={LoginScreen} options={{headerShown:false}}/>
        <stack.Screen name='Signup' component={SignUpScreen} options={{headerShown:false}}/>

      </stack.Navigator>
    </NavigationContainer>
  )
}

const theme={
  ...DefaultTheme,
  roundness:2,
  colors:{
    ...DefaultTheme.colors,
    primary:'#40b7ad',
    
  }
}

function App(): JSX.Element {
  return (
    <>
    <PaperProvider theme={theme}>
    <StatusBar barStyle={'light-content'} backgroundColor={"#40b7ad"}/>
     <View
      style={styles.container}>
          <Navigation/>

     </View>
    </PaperProvider>
       

    </>
  );
}

 
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'

  }
})
export default App;
