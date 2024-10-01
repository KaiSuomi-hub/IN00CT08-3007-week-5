import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

export default function Map() {
  const [markers, setMarkers] = useState([])
  const [location, setLocation] = useState(null)

  const addMarker = (e) => {
    const coords = e.nativeEvent.coordinate
    setMarkers([...markers, coords])
  }

  const getUserPosition = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    try {
      if (status !== 'granted') {
        console.log('Geolocation failed')
        return
      }
      const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
      setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserPosition()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        region={location}
        mapType='satellite'
        onLongPress={addMarker}
      >
        {
          markers.map((marker, index) => (
            <Marker
              key={index}
              title={`Marker ${index + 1}`}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            />
          ))
        }
      </MapView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    /* marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0, */
  },
  map: {
    height: '100%',
    width: '100%'
  },
});