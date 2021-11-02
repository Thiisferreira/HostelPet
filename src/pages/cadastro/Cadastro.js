import * as React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

class Cadastro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      email: "",
      password: ""
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ width: "85%", alignSelf: "center", paddingVertical: 10 }}>
          <TextInput
            label="Nome Completo"
            placeholder="Informe seu nome completo"
            onChangeText={text => this.setState({ userName: text })}
          />
          <TextInput
            style={{ marginTop: 10 }}
            label="Usuário"
            placeholder="Informe seu usário"
            onChangeText={text => this.setState({ userName: text })}
          />
          <TextInput
            style={{ marginTop: 10 }}
            textContentType="emailAddress"
            label="Email"
            placeholder="Informe seu email"
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            style={{ marginTop: 10 }}
            label="Senha"
            placeholder="Informe sua senha"
            secureTextEntry
            onChangeText={text => this.setState({ password: text })}
          />
          <TextInput
            style={{ marginTop: 10 }}
            label="Confirme sua senha"
            placeholder="Confirme sua senha"
            secureTextEntry
            onChangeText={text => this.setState({ password: text })}
          />

          <Button style={{ marginTop: 10, backgroundColor: "#039BE5" }} mode="contained" onPress={() => this.props.navigation.navigate('Login')}>
            Cadastrar-se
          </Button>
        </View>
      </View>

    );
  }
};

export default Cadastro;