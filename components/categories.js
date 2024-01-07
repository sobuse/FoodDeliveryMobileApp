import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'

export default function Categories() {
  const [activeCategory, setactiveCategory] = useState(null);
  return (
    <View className="mt-4">
      <ScrollView horizontal
      showsHorizontalScrollIndicator={false}
      className="overflow-visible"
      contentContainerStyle={{
        paddingHorizontal: 15
      }}>
        {
          categories.map((categories, index)=>{
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity className="p-1 round-full shadow bg-gray-200">
                <image style={{width: 45, height: 45}} source={categories.image}/>
                <Text className="text-sm"> 
                  {categories.name}
                </Text>

              </TouchableOpacity>

            </View>
          })
        }

      </ScrollView>
    </View>
  )
}