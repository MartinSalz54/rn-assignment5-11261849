import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Switch, Text, useTheme } from 'react-native-paper';
import { ThemeContext } from '../ThemeContext';

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();

  const buttonColor = isDarkTheme ? theme.colors.primary : theme.colors.accent;

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Item title="Language" />
        <List.Item title="My Profile" />
        <List.Item title="Contact Us" />
        <List.Item title="Change Password" />
        <List.Item title="Privacy Policy" />
        <List.Item
          title="Theme"
          right={() => <Switch value={isDarkTheme} onValueChange={toggleTheme} />}
        />
      </List.Section>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default SettingsScreen;
