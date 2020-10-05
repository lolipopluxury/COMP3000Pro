import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {VictoryChart, VictoryBoxPlot} from 'victory';

export default class App extends React.Component{
 
  render(){
    return(
      <VictoryChart domainPadding={20}>
        <VictoryBoxPlot
          boxWidth={20}
          data={[
            { x: 1, y: [1, 2, 3, 5] },
            { x: 2, y: [3, 2, 8, 10] },
            { x: 3, y: [2, 8, 6, 5] },
            { x: 4, y: [1, 3, 2, 9] }
          ]}
        />
      </VictoryChart>
    )
  }  
}



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
