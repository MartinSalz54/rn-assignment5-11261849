import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperLightTheme } from 'react-native-paper';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import the Ionicons library

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ isDarkTheme }) => (
          <PaperProvider theme={isDarkTheme ? PaperDarkTheme : PaperLightTheme}>
            <NavigationContainer theme={isDarkTheme ? PaperDarkTheme : PaperLightTheme}>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                      iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'My Cards') {
                      iconName = focused ? 'card' : 'card-outline';
                    } else if (route.name === 'Statistics') {
                      iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                    } else if (route.name === 'Settings') {
                      iconName = focused ? 'settings' : 'settings-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray',
                })}
              >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="My Cards" component={HomeScreen} />
                <Tab.Screen name="Statictics" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </PaperProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

export default App;
