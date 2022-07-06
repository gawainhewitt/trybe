import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput } from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  const [text, onChangeText] = React.useState("Enter Goal");
  const [number, onChangeNumber] = React.useState(null);

  useEffect(() => {
    fetch('https://crudapi.co.uk/api/v1/task', {headers: {'Authorization': 'Bearer Ik6xAoSAFlV2hdJHN8-BRWmUSysRJok2OISCA9ImxYwVJ1fUpQ'}})
    .then((Response) => Response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <Text>Loading...</Text> :
      ( <SafeAreaView style={styles.container}>
        
          <View style={styles.box1}>

            <Text style={styles.title}>TryBe</Text>

          </View>

          <View style={styles.box2}>

          <View style={styles.innerBox2}>

            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />  

            <Text style={{flex: 1}}>This Will Be A Button</Text>

          </View>

          <View style={styles.innerBox2}>

            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="number to achieve"
              keyboardType="numeric"
            />

            <Text style={{flex: 1}}>This Will Be A Button</Text>

          </View>
            
          </View>
          
          <View style={styles.box3}>

          <FlatList
                data={data.items}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                      <Text>{item.id + '. ' + item.title}</Text>
            )}/>

          </View>
          
        </SafeAreaView>
      )}
      </SafeAreaView>  
      
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column'
  },
  box1: { 
    flex: 1, 
    backgroundColor: "red", 
    flexDirection: "column", 
    justifyContent: 'center' 
  },
  box2: { 
    flex: 2, 
    backgroundColor: "darkorange" 
  },
  box3: {
    flex: 1, 
    backgroundColor: "lightgreen" , 
    flexDirection: 'column'
  },
  innerBox2: {
    flex: 1, 
    backgroundColor: "lightblue" , 
    flexDirection: 'row'
  },
  title: { 
    fontSize: 50, 
    color: 'green', 
    textAlign: 'center', 
    paddingBottom: 10, 
    margin: 0
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 2
  },
});
