import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../component/Header';
import Image from '../assets/image/Smart.jpeg';
import ForYou from './ForYou';
import First from '../assets/image/First.png';
import Second from '../assets/image/Second.png';
import third from '../assets/image/third.png';

const navigation = [
  {id: 1, name: 'For you'},
  {id: 2, name: 'Featured'},
  {id: 3, name: 'Older'},
];

const images1 = [
  {id: 1, name: 'First', avatar: First, title: 'Unfolding Wonders'},
  {id: 2, name: 'Music', avatar: Second, title: 'Magic Fountain'},
  {id: 3, name: 'Mode', avatar: third, title: 'Calm Light'},
];
const images2 = [
  {id: 1, name: 'Mode', avatar: third, title: 'Calm Light'},
  {id: 3, name: 'First', avatar: First, title: 'Unfolding Wonders'},
  {id: 3, name: 'Music', avatar: Second, title: 'Magic Fountain'},
];
const images3 = [
  {id: 1, name: 'Music', avatar: Second, title: 'Magic Fountain'},
  {id: 2, name: 'Mode', avatar: third, title: 'Calm Light'},
  {id: 3, name: 'First', avatar: First, title: 'Unfolding Wonders'},
];

const Home = props => {
  const [activeNav, setActiveNat] = useState(1);
  return (
    <View style={styles.container}>
      <Header
        leftIcon="Menu"
        hasShadow={false}
        onLeftIconPress={() => {}}
        avatar={Image}
      />
      <ScrollView style={styles.center}>
        <Text style={styles.title}>Good {'\n'}Morning</Text>
        <View style={[styles.headNav]}>
          {navigation.map(nav => (
            <TouchableOpacity
              key={nav.id}
              style={[nav.id === activeNav ? styles.active : null, styles.nav]}
              onPress={() => setActiveNat(nav.id)}>
              <Text
                style={[
                  styles.navText,
                  nav.id === activeNav ? styles.activeText : null,
                ]}>
                {nav.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {activeNav === 1 ? (
          <ForYou images={images1} />
        ) : activeNav === 2 ? (
          <ForYou images={images2} />
        ) : (
          <ForYou images={images3} />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontSize: 50,
    fontWeight: '700',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  headNav: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nav: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  active: {
    borderRadius: 20,
    backgroundColor: '#daf0e0',
  },
  activeText: {
    fontWeight: '700',
    color: '#45ad62',
  },
  navText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#cfcfd4',
  },
});

export default Home;
