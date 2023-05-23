import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, SIZES, FONTS, icons, images, routes } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../redux/navSlice'
import { setType } from '../redux/vehicleTypeSlice'

const data = [
  {
    id: 'Matatu-123',
    title: '14 Seater',
    multiplier: 1,
    image: 'van',
    type:'14-seater'
  },
  {
    id: 'Mini-bus-456',
    title: 'Mini Bus',
    multiplier: 1.2,
    image: 'minibus',
    type:'33-seater'
  },
  {
    id: 'Bus-789',
    title: 'Bus',
    multiplier: 1.4,
    image: 'bus',
    type:'49-seater'
  },
]

const SURGE_CHARGE_RATE = 1.6


export const RiderOptionsCard = ({ navigation }) => {
  const [selected, setSelected] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)
  const dispatch = useDispatch()


  const handleVehicleSelection = (type,item) => {
    console.log(type)
    dispatch(setType(type))
    setSelected(item);
  };


  useEffect(() => {



  }, [selected])

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
        renderItem={({ item: { id, title, multiplier, image , type}, item }) =>
        (
          <TouchableOpacity
          onPress={() => handleVehicleSelection(type,item)}
            style={{
              padding: SIZES.padding * 2,
              flexDirection: 'row',
              alignItems: "center",
              justifyContent: 'space-between',
              backgroundColor: id === selected?.id ? COLORS.secondary : COLORS.white,
            }}>

            <Image
              style={{
                width: 100,
                height: 50,
                resizeMode: 'contain'
              }}
              source={images[image]}
            />

            <View style={{ flex: 1, marginLeft: 40 }}>
              <Text style={{ ...FONTS.h2, color: id === selected?.id ? COLORS.white : COLORS.primary, }}>{title}</Text>
              <Text style={{ color: id === selected?.id ? COLORS.white : COLORS.primary }}>{travelTimeInformation?.duration?.text} Travel time</Text>
            </View>

            <Text style={{ ...FONTS.h2, color: id === selected?.id ? COLORS.white : COLORS.primary }}>
              {
                new Intl.NumberFormat('en-gb', {
                  style: 'currency',
                  currency: 'KES'
                }).format(
                  (travelTimeInformation?.duration.value * multiplier) / 29.9
                )
              }
            </Text>
          </TouchableOpacity>
        )
        }
      />

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.SELECT_SEAT_SCREEN)
          }

          disabled={!selected}
          style={{
            backgroundColor: COLORS.primary,
            paddingVertical: SIZES.padding * 1.8,
            opacity: !selected ? 0.5 : 1,
            flexDirection:"row",
            alignItems:'center',
            justifyContent:'center'
          }}>
          <Text style={{ textAlign: 'center', color: COLORS.white, ...FONTS.h3 }}>Choose {selected?.title}</Text>
          <Image source={icons.rightArrow} resizeMode='contain' style={{ position:'absolute',right:10,width: 15, height: 15, tintColor: COLORS.white }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({})