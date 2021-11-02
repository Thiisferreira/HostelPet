import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Subheading, Button } from 'react-native-paper';

const About = ({ navigation }) => {
   const styles = StyleSheet.create({
      button: {
         marginTop: 10,
         paddingHorizontal: 8,
         paddingVertical: 6,
         borderRadius: 4,
         backgroundColor:"#039BE5",
         alignSelf: "flex-start",
         marginHorizontal: "1%",
         marginBottom: 0,
         minWidth: "48%",
         textAlign: "center"
      },
   });

   return (
      <View style={{ flex: 1, justifyContent: "center" }}>
         <View style={{ width: "85%", alignItems: "center", alignSelf: "center", paddingVertical: 10, justifyContent:"flex-end", flex:1, marginTop:10 }}>
            <Title>Bem vindo ao HostelPet</Title>
            <Subheading>
               Vai viajar, ou não quer deixar que seu Pet fique sozinho em casa durante a viajem ?
               Conheça os serviços de hospedagem da HostelPet, Conforto e Diversão como se estivessem em casa!
            </Subheading>
         </View>

         <View style={{ width: "85%", alignItems: "center", alignSelf: "center", paddingVertical: 10, justifyContent:"flex-end", flex:1, marginBottom:30 }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
               <Button style={[styles.button]} mode="contained" onPress={() => navigation.navigate('Login')}>
                  Login
               </Button>
               <Button style={[styles.button]} mode="contained" onPress={() => navigation.navigate('Cadastro')}>
                  Cadastrar-se
               </Button>
            </View>
         </View>
      </View>
   );
}

export default About;