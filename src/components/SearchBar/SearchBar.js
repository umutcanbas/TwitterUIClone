import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import React from 'react';

import SearchBarIcon from '../../assets/svgs/searchBarIcon.svg';

const SearchBar = ({ placeholder, inputContainer, onPress}) => {
  return (
    <View style={{...styles.searchBarContainer , ...inputContainer}}>
      <TouchableOpacity onPress={onPress}>

      <SearchBarIcon />
      </TouchableOpacity>
      <TextInput
        style={styles.searchBarInput}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    height: 30,
    width: '%100',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    marginHorizontal:15
  },
  searchBarInput: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color :'#687684',
    
  },
});

export default SearchBar;