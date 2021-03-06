import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import MapView, {Marker, Callout} from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'


function Main({navigation}){
    const [currentRegion, setCurrentRegion] = useState(null)
    
    useEffect(() => {
        async function loadInitialPosition(){
            const { granted } = await requestPermissionsAsync();

            if (granted){
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                })

                const { latitude, longitude } = coords

                setCurrentRegion({
                    latitude, 
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,

                })
            }
        }

        loadInitialPosition()
    }, [])

    if (!currentRegion){
        return null
    }
    return(
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{ latitude: -15.8665976, longitude: -47.9713212 }}>
                <Image style={styles. avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/16947985?v=4' }} />
                <Callout onPress={() => {
                    navigation.navigate('Profile', { github_username: 'bragamateus' })
                }}>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Mateus Braga</Text>
                        <Text style={styles.devBio}>Bacharelado em Ciência da Computação - UniCEUB</Text>
                        <Text style={styles.devTechs}>ReactJS, Reactive Native, Node.js</Text>
                    </View>
                </Callout>
            </Marker>    
        </MapView>    
    ) 
}

const styles = StyleSheet.create({
    map:  {
        flex: 1
    },

    avatar:{
        width: 50,
        height: 50,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#FFF',
    },

    callout: {
        width: 260,
    },

    devName:{
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio:{
        color: '#666',
        marginTop: 5
    },

    devTechs:{
        marginTop: 5,
    }
})
 
export default Main