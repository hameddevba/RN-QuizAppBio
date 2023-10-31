import { Slot } from 'expo-router';
import { Stack } from 'expo-router';


export default function HomeLayout() {
  return (
      
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  )
}
