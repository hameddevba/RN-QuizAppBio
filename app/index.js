import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const ButtonList = () => {
  return (
   <SafeAreaProvider>
   <View style={{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red'
    // marginTop:30,
    }}>
       <Text style={styles.title}>QuizApp</Text>
   </View>
       
    <View style={styles.container}>
      <View style={styles.flexdirection}>
        <Link href="/Biochimie/biochimie" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Biochimie</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/Biochimie/home"asChild >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Biocellulaire</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/ecologie" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Écologie</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/biomoleculqire" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Biomoléculaire</Text>
          </TouchableOpacity>
        </Link>
      </View> 
    </View>
   </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:2,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  flexdirection:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    // backgroundColor:"black",
    padding:15
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
  },
  button: {
    width: 160,
    height: 50,
    margin:10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5, // Pour l'ombre sur Android
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonList;
