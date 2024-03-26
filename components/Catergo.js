import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { catergoryData } from "../constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function Catergo()  {
    return (
        <View className=" mt-4">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="space-x-4"
                contentContainerStyle={{paddingHorizontal:15}}
                
            >
                {
                    catergoryData.map((cat, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                className ="flex items-center space-y-1"
                            >
                                <View className="rounded-full p-6">
                                    <Image
                                        source={{uri: cat.image}}
                                        style={{width:hp(6), height: hp(6)}}
                                        className="rounded-full"
                                    />
                                </View>

                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}