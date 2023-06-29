import * as React from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { TextInput, Button } from 'react-native-paper';

export default class App extends React.Component {
  
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    resultadoImc: '24',
    diagnostico : 'Indeterminado',
    cor: '#bdc3c7',
  }
  
  calcularIMC = () => {
    const resultadoImc = this.state.peso / (this.state.altura * this.state.altura);
    
     this.setState({
    imc: Math.ceil(resultadoImc),
    })
    
    if (resultadoImc < 18.5) {
      this.setState({
        diagnostico: 'Desnutrição',
        cor: '#e74c3c'
      })
    } else if (resultadoImc >= 18.5 && resultadoImc < 25) {
      this.setState({
        diagnostico: 'Normal',
        cor: '#27ae60',
      })
    } else if (resultadoImc >= 25 && resultadoImc <= 30) {
      this.setState({
        diagnostico: 'Sobrepeso',
        cor: '#f1c40f',
      })
    } else if (resultadoImc > 30 && resultadoImc <= 40) {
      this.setState({
        diagnostico: 'Obesidade',
        cor: '#e67e22',
      })
    } else if (resultadoImc > 40) {
      this.setState({
        diagnostico: 'Obesidade Mórbida',
        cor: '#c0392b',
      })
    } else if (resultadoImc <= 0) {
      this.setState({
        diagnostico: 'Informe os valores'
      })
    }
  }
  
  render() {
    
    const imc = 24;
    const diagnostico = 'Normal';
    
    return (
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>
        
        <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
          <Text style={styles.resultadoImc}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.diagnostico}</Text>
        </View>

        <View>
          <TextInput style={styles.peso}
          label="Peso"
           onChangeText={(valor) => {
             this.setState({peso: valor.replace(',', '.')});
           }}
           />
          <TextInput style={styles.altura}
          label="Altura"
            onChangeText={(valor) => {
             this.setState({altura: valor.replace(',', '.')});
          }}
           />
          
          <Button mode="contained" onPress={this.calcularIMC}>
            Calcular
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    padding: 10,
    marginVertical: 50,
  },
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',

  },
  resultadoImc: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  
  },
  painel: {
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 10,
    padding: 8,
    width: 150,

  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    
  },
  peso: {
    marginVertical:6

  },
  altura: {
    marginVertical:6,

  },
  
  
  
  
});