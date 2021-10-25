import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Text} from 'native-base';

const Details = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Text>Details screen {route.params.id}</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </SafeAreaView>
  );
};

export default Details;
