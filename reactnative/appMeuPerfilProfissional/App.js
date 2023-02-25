import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';

class App extends Component{
  render(){

    let nome = 'Vivian da Cunha';
    let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjwLJKrZUdDbNDbGLxXA6xORsB74AniZtaw&usqp=CAU';

    return(
      <View>
      <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300}}
        />
        <Text style={{ fontSize: 18 }}>Dados Pessoais</Text>
        <Text >{nome}</Text>
        <Text style={{ fontSize: 18 }}>Formação</Text>
        <Text>Ciencias da Computação</Text>
        <Text style={{ fontSize: 18 }}>Experiencia</Text>
        <Text>Estagiaria</Text>
        <Text style={{ fontSize: 18 }}>Projetos</Text>
        <Text>01-TCC</Text>
      </View>
    )
  }
}

export default App;
