import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, List, Avatar } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Avatar.Image size={40} source={require('../assets/profile.png')} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.nameText}>Eric Atsu</Text>
        </View>
       
      </View>

      {/* Other sections of your screen */}
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.cardHeader}>
              <Image source={require('../assets/Card.png')} style={styles.cardImage} />
            </View>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.imageContainer}>
        <View style={styles.imageTextContainer}>
          <Image source={require('../assets/send.png')} style={styles.roundImage} />
          <Text style={styles.imageText}>Sent</Text>
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={require('../assets/recieve.png')} style={styles.roundImage} />
          <Text style={styles.imageText}>Receive</Text>
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={require('../assets/loan.png')} style={styles.roundImage} />
          <Text style={styles.imageText}>Loan</Text>
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={require('../assets/topUp.png')} style={styles.roundImage} />
          <Text style={styles.imageText}>Top Up</Text>
        </View>
      </View>

      <View style={styles.transactionContainer}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionHeaderText}>Transaction</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
        <List.Section>
          <List.Item
            title="Apple Store"
            description="Entertainment"
            left={() => <Image source={require('../assets/apple.png')} style={styles.listItemImage} />}
            right={() => <Text>-$5.99</Text>}
          />
          <List.Item
            title="Spotify"
            description="Music"
            left={() => <Image source={require('../assets/spotify.png')} style={styles.listItemImage} />}
            right={() => <Text>-$12.99</Text>}
          />
          <List.Item
            title="Money Transfer"
            description="Transaction"
            left={() => <Image source={require('../assets/moneyTransfer.png')} style={styles.listItemImage} />}
            right={() => <Text>$300</Text>}
          />
          <List.Item
            title="Grocery"
            description="Shopping"
            left={() => <Image source={require('../assets/grocery.png')} style={styles.listItemImage} />}
            right={() => <Text>-$88</Text>}
          />
        </List.Section>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingLeft: 10,
  },
  avatar: {
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
    marginRight: 150,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 18,
    color: 'gray',
   
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  cardContainer: {
    marginBottom: 30,
  },
  card: {
    marginLeft: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 350,
    height: 225,
    borderRadius: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-evenly',
  },
  imageTextContainer: {
    alignItems: 'center',
  },
  imageText: {
    marginTop: 15,
    color: 'gray',
  },
  roundImage: {
    width: 25,
    height: 25,
    borderRadius: 12,
  },
  transactionContainer: {
    flex: 1,
    marginTop: 20,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  transactionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: 'blue',
    fontSize: 16,
  },
  listItemImage: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
});

export default HomeScreen;