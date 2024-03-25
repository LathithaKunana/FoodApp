import { View, Text, StatusBar, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BellIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
import Catergo from '../components/Catergo';




export default function HomeScreen() {
  return (
    <View className = "flex-1 bg-white">
      <StatusBar barStyle={"dark-content"}/>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}
          className ="space-y-6 pt-14"
          >
          {/* Avatar and bell icon */}
          <View className = "mx-4 flex-row justify-between items-center mb-2">
            <Image source={require("../assets/images/avatar2.png")} style={{height: hp(5.4), width: hp(5.5)}} />
            <BellIcon size={hp(4)} color="gray" />
          </View>

          {/* greeting and slogan */}
          <View className="mx-4 space-y-2 mb-2">
            <Text style={{fontSize: hp(1.7)}} className="font-semibold text-neutral-600">Helllo, Lathitha</Text>
            <View>
              <Text style={{fontSize: hp(3.8)}} className="font-semibold text-neutral-600">Make your own food</Text>
            </View>
            <Text style={{fontSize: hp(3.8)}} className="font-semibold text-neutral-600">Stay at <Text className="text-amber-400">Home</Text></Text>
          </View>

          {/* searchbar */}
          <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
            <TextInput 
              placeholder='Search any recipy'
              placeholderTextColor={"gray"}
              style={{fontSize: hp(1.7)}}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            />
            <View className="bg-white rounded-full" >
              <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
            </View>
          </View>

          {/* catergories */}
          <Catergo/>
        </ScrollView>
      </View>
  )
}