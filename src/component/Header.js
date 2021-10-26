import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import IconGenerator from '../component/GenerateIcon';

function Header({
  title,
  onLeftIconPress = () => {},
  leftIcon,
  hasShadow = true,
  children,
  avatar,
}) {
  return (
    <View style={[styles.header, hasShadow && styles.shadow]}>
      {leftIcon && (
        <TouchableOpacity style={styles.icon} onPress={onLeftIconPress}>
          <IconGenerator tagName={leftIcon} />
        </TouchableOpacity>
      )}
      <View style={styles.rowView}>
        {title && <Text style={styles.headertxt}>{title}</Text>}
        {children}
        {avatar && <Image source={avatar} style={styles.avatar} />}
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    zIndex: 99999,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        paddingTop: 50,
      },
      android: {
        paddingTop: 20,
      },
    }),
  },
  headertxt: {
    color: '#464664',
    fontSize: 20,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  shadow: {
    shadowColor: '#8EBE6E59',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  icon: {
    padding: 10,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    resizeMode: 'cover',
    marginLeft: 110,
  },
});
