import React, { useContext } from 'react';
import {View, StyleSheet, Button,TouchableOpacity,Text} from 'react-native';
import { AuthContext } from '../context/auth-context';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();
    const {logout} = useContext(AuthContext);
    const  onPress=()=>{
        logout();
        navigation.navigate('Log-In');

    }
  return (
    <View style={{padding:18,alignItems:'center'}}>
      <TouchableOpacity onPress={onPress} style={{justifyContent:'center',alignItems:'center',width:200 , padding:18,backgroundColor:'rgb(63, 212, 250)'} }>
        <Text style={{fontWeight:'800', }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
