import { View, Text, StatusBar, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BellIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
import Catergo from '../components/Catergo';
import { catergoryData } from '../constants';
import axios from 'axios';




export default function HomeScreen() {
  const [activeCatergory, setActiveCatergory] = useState('Beef');
  const [catergories, setCatergories] = useState([])

  useEffect(() => {
    getCatergory();
  },[])

  const getCatergory = async () =>{
    try {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      // console.log('got catergories:', response.data);
      if (response && response.data){
        setCatergories(response.data.categories)
      }
    } catch (error) {
      console.log('error:', error.message)
    }
  }
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
              className="flex-1 text-base mb-1 pl-3 tracking-wider"
            />
            <View className="bg-white rounded-full p-3" >
              <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
            </View>
          </View>

          {/* catergories */}
          <View>
          { catergories.length> 0 && <Catergo categories={catergories} activeCatergory={activeCatergory} setActiveCatergory={setActiveCatergory}/>}
          </View>
        </ScrollView>
      </View>
  )
}