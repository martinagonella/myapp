import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = () => {
    return (
    <View style={styles.screen}>
        <Text>Category Screen</Text>
        <Button 
        tittle="Ir a Categoria Pan"
        onPress={() => {
          navigation.navigate('BreadCategory')
        }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CategoriesScreen;