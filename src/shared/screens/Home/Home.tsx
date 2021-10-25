import React from 'react';
import {SafeAreaView} from 'react-native';
import {useHistory} from 'react-router';
import {Text, Button, View} from 'native-base';

const Home = ({navigation}) => {
  const dummyData = [
    {id: 1, name: 'Abhishek Shah', phone: '9909909909'},
    {id: 2, name: 'John Doe', phone: '1234567890'},
    {id: 3, name: 'Jane Doe', phone: '0987654321'},
  ];
  const history = useHistory();
  return (
    <SafeAreaView>
      <Text>Home screen</Text>
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
      })}
    </SafeAreaView>
  );
};

export default Home;
