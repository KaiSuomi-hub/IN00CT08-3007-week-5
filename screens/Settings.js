import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';

export default function Settings({mapType,setMapType}) {
  return (
    <View style={styles.container}>
      <View style={styles.radio}>
        <Text>Standard</Text>
        <RadioButton
          value='standard'
          status={mapType === 'standard' ? 'checked' : 'unchecked'}
          onPress={() => setMapType('standard')}
        />
      </View>
      <View style={styles.radio}>
        <Text>Terrain</Text>
        <RadioButton
          value='terrain'
          status={mapType === 'terrain' ? 'checked' : 'unchecked'}
          onPress={() => setMapType('terrain')}
        />
      </View>
      <View style={styles.radio}>
        <Text>Satellite</Text>
        <RadioButton
          value='satellite'
          status={mapType === 'satellite' ? 'checked' : 'unchecked'}
          onPress={() => setMapType('satellite')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  radio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  }
});