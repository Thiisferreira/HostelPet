import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Checkbox, Caption } from 'react-native-paper';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      password: "",
      remember: false,
    }
  }

  render() {
    const styles = StyleSheet.create({
      button: {
        marginTop: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "100%",
        textAlign: "center",
        backgroundColor: "#039BE5",
      },
    });

    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ width: "85%", alignSelf: "center", paddingVertical: 10 }}>
          <TextInput
            label="Usuário"
            placeholder="Informe seu usário"
            onChangeText={text => this.setState({ userName: text })}
          />
          <TextInput
            style={{ marginTop: 10 }}
            label="Senha"
            placeholder="Informe sua senha"
            secureTextEntry
            onChangeText={text => this.setState({ password: text })}
          />

          <View style={{ flexDirection: "row", flexWrap: "wrap", paddingVertical: 10 }}>
            <Caption style={{marginTop: 8}} >Manter logado</Caption>
            <Checkbox
              status={this.state.remember ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({ remember: !this.state.remember });
              }}
            />
            <Caption style={{marginTop: 8, marginLeft: 120}} >Esqueceu a Senha</Caption>
          </View>

          <Button style={[styles.button]} mode="contained" onPress={() => this.props.navigation.navigate('Home')}>
            Login
          </Button>
        </View>
      </View>

    );
  }
};

export default Login;