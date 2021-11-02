import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useHistory} from 'react-router';
import {Text, Button, View} from 'native-base';
import firestore from '@react-native-firebase/firestore';

const Home = ({navigation, incrementAction, decrementAction, value}) => {
  // const dummyData = [
  //   {id: 1, name: 'Abhishek Shah', phone: '9909909909'},
  //   {id: 2, name: 'John Doe', phone: '1234567890'},
  //   {id: 3, name: 'Jane Doe', phone: '0987654321'},
  // ];
  // const history = useHistory();
  useEffect(() => {
    firestore()
      .collection('users')
      .doc()
      .get()
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <SafeAreaView>
      {/* <Text>Home screen</Text>
      {dummyData.map(item => {
        return (
          <View key={item.id}>
            <Button
              onPress={() => {
                navigation.navigate('Details', {id: item.id}, history);
              }}>
              {item.name}
            </Button>
          </View>
        );
      })} */}

      <Button onPress={incrementAction}>Inc</Button>
      <Text>{value}</Text>
      <Button onPress={decrementAction}>Dec</Button>
    </SafeAreaView>
  );
};

export default Home;
