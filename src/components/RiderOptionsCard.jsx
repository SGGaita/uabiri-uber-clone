import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, SIZES, FONTS, icons, images,routes } from '../constants'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../redux/navSlice'

const data = [
  {
    id: 'Matatu-123',
    title: '14 Seater',
    multiplier: 1,
    image: 'van'
  },
  {
    id: 'Mini-bus-456',
    title: 'Mini Bus',
    multiplier: 1.5,
    image: 'minibus'
  },
  {
    id: 'Bus-789',
    title: 'Bus',
    multiplier: 1.75,
    image: 'bus'
  },
]


export const RiderOptionsCard = ({ navigation }) => {
  const [selected, setSelected] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)


useEffect(()=>{

 

},[selected])

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flexGrow: 1 }}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.NAVIGATION_CARD)}
          style={{
            position: 'absolute',
            top: 20,
            left: 25,
            padding: SIZES.padding
          }}
        >
          <Image source={icons.arrowLeft} resizeMode='contain' style={{ width: 15, height: 15 }} />
        </TouchableOpacity>
        <Text style={{ color: COLORS.black, alignSelf: 'center', paddingVertical: SIZES.padding * 3, ...FONTS.h2 }}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
      </View>

      <FlatList
        data={data}
        ItemSeparatorComponent={() => (
          <View
            style={{ backgroundColor: COLORS.gray, height: 0.5 }}>

          </View>
        )}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) =>
        (
          <TouchableOpacity
          onPress={(()=>setSelected(item))}
            style={{ padding: SIZES.padding * 2,
            flexDirection: 'row', 
            alignItems: "center", 
            justifyContent: 'space-between',
            backgroundColor: id === selected?.id ? COLORS.gray : COLORS.white,
            }}>

            <Image
              style={{
                width: 100,
                height: 50,
                resizeMode: 'contain'
              }}
              source={images[image]}
            />

            <View style={{flex:1,marginLeft:40}}>
              <Text style={{ ...FONTS.h2,color: COLORS.black }}>{title}</Text>
              <Text style={{ color: COLORS.black }}>{travelTimeInformation?.duration?.text} Travel time</Text>
            </View>

            <Text style={{ ...FONTS.h2,color: COLORS.black }}>Kes 70</Text>
          </TouchableOpacity>
        )
        }
      />

      <View>
        <TouchableOpacity 
        disabled={!selected} 
        style={{
          backgroundColor:COLORS.turquoise, 
          paddingVertical:SIZES.padding * 1.8,
           opacity: !selected ? 0.5 : 1
           }}>
          <Text style={{textAlign:'center',color:COLORS.white, ...FONTS.h3}}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({})