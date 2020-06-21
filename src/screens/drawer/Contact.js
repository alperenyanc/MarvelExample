import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, Linking, ScrollView} from 'react-native';
import {MainHeader} from '../../components/HeadersButtons/MainHeaders';
import {textStyles, width} from '../../assets/style/main';
import {imagesAbout} from '../../assets/images';

const Contact = (props) => {
  const {navigation} = props;
  return (
    <ScrollView style={styles.container}>
      <MainHeader navigation={navigation} title="Contact Us" />
      <View style={styles.image_box}>
        <Image
          style={styles.image}
          source={imagesAbout.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.info_box}>
        <Text style={[styles.title, textStyles.bold]}>
          Corporate Headquarters
        </Text>
        <Text style={[styles.descriptions, textStyles.boldSemi]}>
          Marvel Entertainment, LLC 1290 Avenue of the Americas New York, NY
          10104
        </Text>
        <Text style={[styles.title, textStyles.bold]}>Business Inquiries</Text>
        <Text style={[styles.descriptions, textStyles.boldSemi]}>
          For tech support, please visit the{' '}
          <Text
            onPress={() => Linking.openURL('https://www.marvel.com/help/')}
            style={{color: 'red'}}>
            Help Page
          </Text>
          . General phone number, Marvel Entertainment, LLC: 212-576-4000
        </Text>
        <Text style={[styles.title, textStyles.bold]}>Consumer Inquiries</Text>
        <Text style={[styles.descriptions, textStyles.boldSemi]}>
          For FAQ's related to Marvel Comics and Marvel.com: Visit the
          <Text
            onPress={() => Linking.openURL('https://www.marvel.com/help/')}
            style={{color: 'red'}}>
            {' '}
            Help Page
          </Text>
          .{'\n'}
          {'\n'}
          Marvel.com, Marvel Comics app, and Marvel Digital Comics Unlimited
          Subscriptions: For any inquiries unresolved by the Help Page, please
          use the Contact Form
          <Text
            onPress={() =>
              Linking.openURL('https://www.marvel.com/help/contact')
            }
            style={{color: 'red'}}>
            {' '}
            here
          </Text>
          {'\n'}
          {'\n'}
          For Print Subscriptions:
          {'\n'}
          Marvel Subscriptions PO Box 727 New Hyde Park, NY 11040 TOLL FREE:
          888-511-5480 marvelsubs@midtowncomics.com See also: Subscriptions FAQ
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

export default Contact;

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
