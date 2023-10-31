import { Link, Stack } from 'expo-router';
import { View, Text,StyleSheet, Pressable, Modal, Alert,Button } from 'react-native'
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from 'expo-router';


import questions from '../../components/biochimiedataquiz';


const biochimie = () => {


  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
   const [modalVisible, setModalVisible] = useState(false);
  const [answer, setAnswer] = useState('');



const onClose = ()=>{
  setModalVisible(false);
  
  if(questionIndex === questions.length) {
    //  setQuestionIndex(0);
      setModalVisible(true)
      router.back()
  }
}


  
  const handleAnswer = (answerIndex) => {

    if (answerIndex === questions[questionIndex].correctAnswer) {

      setAnswer(<Text
        style={{
          color: '#28a745',
          fontSize: 20,
          fontWeight:'bold',
          textAlign:'center'
        }}
      >
        bravo, bonne reposne 

      </Text>)

      setScore(score + 1);
      setModalVisible(true)

    }else if(answerIndex !== questions[questionIndex].correctAnswer){
       setAnswer(<Text
        style={{
          color: 'red',
          fontSize: 20,
          fontWeight:'bold',
          textAlign:'center'
        }}
      >
        mauvaise reponse
      </Text>)
      setModalVisible(true)
    }
    
    

if(setQuestionIndex(questionIndex + 1)){
 
};
    
   

  };


  return (

    <SafeAreaProvider>
      <View style={styles.container}>
          <Stack.Screen
          options={{
            // https://reactnavigation.org/docs/headers#setting-the-header-title
            title: 'BioChimie',
            // https://reactnavigation.org/docs/headers#adjusting-header-styles
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign:'center'
          }}
        />
        <View style={styles.container}>
          <Text style={styles.question}>{questions[questionIndex].question}</Text>

          {questions[questionIndex].answers.map((answer, index) => (
            <Pressable
              key={index}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? '#3498db' : '#2ecc71',
                },
                styles.answerButton,
              ]}
              onPress={() => handleAnswer(index)}
            >
              <Text style={styles.answerText}>{answer}</Text>
            </Pressable>
          ))}
          
        </View>
      </View>


      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>{answer}</Text>
            <Text>{score}</Text>
            <Button title="Fermer" onPress={onClose} />
          </View>
        </View>
      </Modal>

    </SafeAreaProvider>
   
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

   question: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
   },
  answerButton: {
    padding: 15,
    marginBottom: 10,
    width: '100%',
    borderRadius: 10,
  },
  answerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  //For madalStyle
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  }

})

export default biochimie;