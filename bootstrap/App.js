import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/pages/home/Home';
import About from '../src/pages/about/About';
import Login from '../src/pages/login/Login';
import Cadastro from '../src/pages/cadastro/Cadastro';
// import BuscaPlaca from '../src/pages/buscaPlaca/BuscaPlaca';
// import Resultado from '../src/pages/resultado/Resultado'
// import Historico from '../src/pages/historico/Historico';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="About">
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        {/* <Stack.Screen name="BuscaPlaca" component={BuscaPlaca} />
        <Stack.Screen name="Resultado" component={Resultado} />
        <Stack.Screen name="Historico" component={Historico} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;