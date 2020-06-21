import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, Linking, ScrollView} from 'react-native';
import {MainHeader} from '../../components/HeadersButtons/MainHeaders';
import {width, textStyles} from '../../assets/style/main';
import {imagesAbout} from '../../assets/images';

const AboutUs = (props) => {
  const {navigation} = props;
  return (
    <ScrollView style={styles.container}>
      <MainHeader navigation={navigation} title="About Us" />
      <View style={styles.image_box}>
        <Image
          style={styles.image}
          source={imagesAbout.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.info_box}>
        <Text style={[styles.title, textStyles.bold]}>
          COMPANY INFO AND CONTACT
        </Text>
        <Text style={[styles.descriptions, textStyles.boldSemi]}>
          Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt
          Disney Company, is one of the world's most prominent character-based
          entertainment companies, built on a proven library of more than 8,000
          characters featured in a variety of media over seventy-five years.
          Marvel utilizes its character franchises in entertainment, licensing
          and publishing. For more information visit marvel.com. © 2020 MARVEL
        </Text>
        <Text style={[styles.title, textStyles.bold]}>
          Corporate Headquarters
        </Text>
        <Text style={[styles.descriptions, textStyles.boldSemi]}>
          Marvel Entertainment, LLC 1290 Avenue of the Americas New York, NY
          10104
        </Text>
        <Text style={[styles.title, textStyles.bold]}>More Info</Text>
        <Text
          onPress={() =>
            Linking.openURL('https://www.marvel.com/corporate/about')
          }
          style={[styles.title, textStyles.boldNC, {color: 'red'}]}>
          www.marvel.com
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image_box: {
    width: '100%',
    height: width * 0.4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  info_box: {
    padding: 10,
  },
  title: {
    margin: 5,
    fontSize: 16,
  },
  descriptions: {
    margin: 5,
    fontSize: 14,
  },
});
