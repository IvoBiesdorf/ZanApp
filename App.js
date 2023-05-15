
import MyTabs from './src/Tabs';
import { NavigationContainer } from '@react-navigation/native';
// import { UserProvider } from './context/useProvider';
import { StyleSheet} from 'react-native';

export default function App() {
    return (
        <NavigationContainer style={styles.container}>
            <MyTabs />
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
  });