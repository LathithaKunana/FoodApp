import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { CachedImage } from '../helpers/image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import {  HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Loading from '../components/Loading';
export default function DetailScreen(props) {
    const [isFavourite, toggelIsFavourite] = useState(false)
    const [meal, setMeal] = useState(null)
    const [loading, setLoading] = useState(true)

    let item = props.route.params;
    const navigation = useNavigation();

    useEffect(() =>{
        getMealData(item.idMeal);
    },[])

    const getMealData = async (id) =>{
        try {
          const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            console.log('got meal data:', response.data);
            if (response && response.data){
             setMeal(response.data.meals[0]);
             setLoading(false);
           }
        } catch (error) {
          console.log('error:', error.message)
        }
      }
    
  return (
    <ScrollView
        className ="bg-white flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:30}}
    >
        <StatusBar style={'light'} />
        {/* recipe image */}
        <View className=" flex-row justify-center">
            <CachedImage 
                uri = {item.strMealThumb}
                style = {{width: wp(98), height: hp(50), borderRadius:33, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, marginTop: 4}}
            />
        </View>
        {/* back button */}
        <View className=" w-full absolute flex-row justify-between items-center pt-14">
            <TouchableOpacity 
                className=" p-2 rounded-full ml-5 bg-white"
                onPress={() => navigation.goBack()}
            >
                <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
            </TouchableOpacity>
            <TouchableOpacity 
                className=" p-2 rounded-full mr-5 bg-white"
                onPress={() => toggelIsFavourite(!isFavourite)}
            >
                <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={isFavourite? "red" : "gray"} />
            </TouchableOpacity>
        </View>
        {/* meal description */}
         {
            loading? (
                <Loading size="large" className="mt-16" />
            ) : (
                <View>
                    <Text>display meal data</Text>
                </View>
            )
        } 
    </ScrollView>
  )
}