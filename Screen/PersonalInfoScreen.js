import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PersonalInfoScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home');
        }, 10000); // 10000 milliseconds = 10 seconds

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
      <View style={styles.container}>
      <Image 
          source={require('../assets/DySn.jpg')} 
          style={styles.image}
      />
            <Text style={styles.text}>Tên: Nguyễn Duy Sơn</Text>
            <Text style={styles.text}>MSSV: 21110290</Text>
            <Text style={styles.text}>Lớp: 21110CLST</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default PersonalInfoScreen;
