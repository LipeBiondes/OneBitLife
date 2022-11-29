import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import DefaultButton from '../../Components/Common/DefaultButton'

export default function AppExplanation() {
  function handleSetShowHome() {
    console.log('Botao clicado')
  }

  return (
    <View style={StyleSheet.container}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Text style={StyleSheet.title}>
            Antes, deixa {'\n'} eu te explicar...
          </Text>
          <Text style={StyleSheet.descriptionCta}>
            Pronto(a) para subir de nível na vida ?
          </Text>
          <Text style={StyleSheet.description}>
            Na próxima tela você vai poder escolher {'\n'} seus 4 hábitos de
            forma individual.
          </Text>
          <DefaultButton
            buttonText={'Continuar'}
            handlePress={handleSetShowHome}
            width={250}
            heigth={50}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
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
