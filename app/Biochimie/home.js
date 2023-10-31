import { Button,View, Text,StyleSheet, Alert } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { Stack } from 'expo-router';
import But from '../../components/comp';



function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  );
}

export default function Page() {

  let onPressLearnMore =()=>{
    Alert.alert(questions[1])
  }

  return (

    <>
   
    <Stack.Screen
        options={{
            title: "home",
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
          },

        //   headerRight: () => <Button  title="Click Me" onPress={()=> router.back()} />,
        }}
      />
    
    <View style={styles.container}>
    <Text>{questions[1].question}</Text>
    <Button
      onPress={onPressLearnMore}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
/>
    <But/>
    </View>

     </>
  );

}



const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
});