import * as React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import { List, Appbar } from 'react-native-paper';

class Home extends Component {

   render() {

      return (
         <View>
            <View>
               <Appbar.Header style={{ backgroundColor: "#039BE5" }}>
                  <Appbar.Content title="Thais Ferreira" subtitle="thaisf@alunos.utfpr.edu.br" />
               </Appbar.Header>
            </View>

            <List.Item
               title="Hospedagem"
               left={props => <List.Icon {...props} icon="compass" />}
            />
            <List.Item
               title="Tabela de Preços"
               left={props => <List.Icon {...props} icon="notebook-outline" />}
            />
            <List.Item
               title="Notificações"
               left={props => <List.Icon {...props} icon="bell" />}
            />
            <List.Item
               title="Minhas Hospedagens"
               left={props => <List.Icon {...props} icon="star-outline" />}
            />
            <List.Item
               title="Meus Pets"
               left={props => <List.Icon {...props} icon="dog" />}
            />
            <List.Item
               title="Configurações"
               left={props => <List.Icon {...props} icon="cog-outline" />}
            />
         </View>
      );
   }
};

export default Home;