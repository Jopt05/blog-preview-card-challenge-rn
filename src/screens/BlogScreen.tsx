import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

const cardSvgLocation = "../assets/images/illustration-article.png";
const cardUserImgLocation = "../assets/images/image-avatar.webp";

export const BlogScreen = () => {
  return (
    <View style={ styles.cardContainer }>
      <Image 
        style={ styles.cardImage }
        source={require(cardSvgLocation)}
      />

      <View style={ styles.cardTopic }>
        <Text style={ styles.cardTopicText }>
          Learning
        </Text>
      </View>

      <Text style={ styles.cardDateText }>
        Published 21 Dec 2023
      </Text>

      <Text style={ styles.cardTitle }>
        HTML & CSS foundations
      </Text>

      <Text 
        style={ styles.cardDescription }
      >
        These languages are the backbone of every
        webiste, defining structure, content and presentation.
      </Text>

      <View style={ styles.cardUserContainer }>
        <Image 
          source={require(cardUserImgLocation)}
          style={ styles.cardUserImage }
        />
        <Text style={ styles.cardUserText }>
          Greg Hooper
        </Text>
      </View>
    </View>
  )
}
