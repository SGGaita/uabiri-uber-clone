import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import AvatarChange from '../components/AvatarChange'

const data = [
  {
    id: "123",
    icon: "email",
    label: "Email",
    name: "steveggaita@gmail.com",
  },
  {
    id: "456",
    icon: "phone",
    label: "Phone",
    name: "+254 723272915",
  },
  {
    id: "789",
    icon: "payment",
    label: "Payment",
    name: "+254 723272915",
  }
]

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.inputBlue }}>
      <View style={{ margin: 10, padding: 20, backgroundColor: '#fff', elevation: 1, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
        <AvatarChange />
        <View style={{ marginLeft: 20 }}>
          <View style={{ flexDirection: 'row' }}><Text style={{ fontSize: 20 }}>Stephen Gaita Gaikia</Text>
            <Image source={icons.edit} resizeMode='contain' style={{ alignSelf: 'center', width: 15, height: 15, marginLeft: 10 }} /></View>
          <Text style={{ fontSize: 18, color: COLORS.darkgray }}>Joined May 2023</Text>
        </View>
      </View>

      <View style={{ margin: 10, padding: 10, backgroundColor: '#fff', elevation: 1, borderRadius: 10, flexDirection: 'column', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>Account info</Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{ backgroundColor: COLORS.gray, height: 0.5 }}>

            </View>
          )}
          renderItem={({ item: { icon, label, name } }) => (
            <TouchableOpacity

              style={{ padding: SIZES.padding * 2, flexDirection: 'row', alignItems: "center", }}>
              <View style={{

                backgroundColor: COLORS.inputBlue,
                padding: SIZES.padding * 1,
                borderRadius: 20,
                marginRight: 20
              }}>
                <Image
                  source={icons[icon]}
                  resizeMode='contain'
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.primary,

                  }}
                />
              </View>
              <View>
                <Text style={{ color: COLORS.black, fontSize: 18, fontWeight: 700 }}>{label}</Text>
                <Text style={{ color: COLORS.darkgray, fontSize: 15 }}>{name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        style={{
          margin: 10,
          backgroundColor: COLORS.primary,
          paddingVertical:SIZES.padding * 1.8,
          borderRadius:10
        }}
      >
        <Text
          style={{ ...FONTS.h3,textAlign:'center',color: COLORS.inputBlue }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({})