import { SafeAreaView } from 'react-native';
import React from 'react';
import Title from './src/components/Title.component';
import NewGoal from './src/components/NewGoal.component';
import ViewGoals from './src/components/ViewGoals.component';
import styles from './src/components/Container.component.style'

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      
      <Title/>

      <NewGoal/>
      
      <ViewGoals/>

    </SafeAreaView>  
      
    );
};




