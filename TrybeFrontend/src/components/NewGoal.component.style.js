import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  box2: { 
    flex: 2, 
    backgroundColor: "darkorange" 
  },
  innerBox2: {
    flex: 1, 
    backgroundColor: "lightblue" , 
    flexDirection: 'row'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 2
  }
});