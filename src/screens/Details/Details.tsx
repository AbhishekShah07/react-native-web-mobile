import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Text, Button} from 'native-base';
import {useHistory} from 'react-router';

const Details = ({navigation, route}) => {
  useEffect(() => {
    // console.log(navigation.params.id);
  }, []);
  const history = useHistory();
  return (
    <SafeAreaView>
      <Text>Details screen</Text>
      <Button onPress={() => navigation.goBack(history)}>Go back</Button>
    </SafeAreaView>
  );
};

export default Details;
