import React, {useEffect, useState} from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './ViewGoals.component.style';

function ViewGoals() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
    useEffect(() => {
    fetch('https://trybe-backend.herokuapp.com/goals')
    .then((Response) => Response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }, [])
    return(
      <View style={styles.box3}>
          {isLoading ? <Text>Loading...</Text> :
              <FlatList
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                      <Text>{item.id + '. ' + item.goal_description}</Text>
              )}/>
          }
      </View>
)}

export default ViewGoals;