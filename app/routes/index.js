import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Welcome';
// import DrawerNav from './DrawerNavigation';
import {Dimensions} from '../styles';
import {forSlide} from '../hooks/animation';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Routes = () => {
  // const checkVerify = useSelector(state => state.AuthReducer.verify); //store
  return (
    <Stack.Navigator
      initialRouteName={'WelcomeScreen'}
      screenOptions={({route}) => ({
        headerShown: false,
        cardStyleInterpolator: forSlide,
        gestureEnabled: true,
        gestureResponseDistance: {
          horizontal: Dimensions.screenHeight,
          vertical: Dimensions.screenWidth,
        },
      })}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

      {/* <Stack.Screen name="DrawerNav" component={DrawerNav} /> */}
    </Stack.Navigator>
  );
};

export default Routes;
