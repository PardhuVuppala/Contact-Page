Components Used:
useState: It's a React hook used to define and manage state variables (searchQuery and filteredData) in functional components.

View: A component from React Native that represents a container for other components and helps with layout and styling.

TextInput: A component used for user input, specifically for handling text input in this code.

FlatList: A high-performance component for rendering large lists of data efficiently. It takes an array of data (filteredData), renders each item using a specified component, and scrolls smoothly.

Text: A component used to display text.

TouchableOpacity: A component that wraps its children and responds to touch events with visual feedback. In this code, it's used to make the contact items pressable.

Alert: A component used to display native alerts or dialogs.

StyleSheet: A utility from React Native used to define and manage styles for components.

libraries and dependencies:
"@expo/webpack-config": "^18.0.1",
"expo": "~48.0.15",
"expo-status-bar": "~1.4.4",
"expo-updates": "~0.16.4",
"react": "18.2.0",
"react-native": "0.71.3",
"react-native-web": "~0.18.11"


Installation:
npx create-expo-app AwesomeProject
cd AwesomeProject
npx expo start

Install Andriod Studio
Create device in virtual device manager for the simulation.
