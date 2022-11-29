import React from 'react'
import { View, StyleSheet, ScrollView, Text, handleNavHome } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import DefaultButton from '../../Components/Common/DefaultButton'
import ExplanationCard from '../../Components/Explanation/ExplanationCard'

export default function AppExplanation() {
  const navigation = useNavigation();

  function handleNavHome() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>
            Antes, deixa {'\n'} eu te explicar...
          </Text>
          <ExplanationCard />
          <Text style={styles.descriptionCta}>
            Pronto(a) para subir de nível na vida ?
          </Text>
          <Text style={styles.description}>
            Na próxima tela você vai poder escolher {'\n'} seus 4 hábitos de
            forma individual.
          </Text>
          <DefaultButton
            buttonText={'Continuar'}
            handlePress={handleNavHome}
            width={250}
            heigth={50}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21, 21, 21, 0.98)'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 40
  },
  descriptionCta: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20
  },
  description: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30
  }
})
