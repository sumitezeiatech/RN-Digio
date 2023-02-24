import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {DigioRNComponent} from 'digio-sdk-rn';

export default function Enach() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
    clearTimeout();
  });
  const onSuccess = t => {
    console.log(t + ' Response from Digio SDk ');
  };

  const onCancel = () => {
    console.log('Cancel Response from Digio SDk ');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Enach</Text>
      {show == true ? (
        <View style={{backgroundColor: '#ababab', flex: 1}}>
          <Text>Digio SDK</Text>
          <DigioRNComponent
            onSuccess={onSuccess}
            onCancel={onCancel}
            options={{
              environment: 'sandbox',
              logo: 'yourlogourl',
              theme: {
                primaryColor: '#234FDA',
                secondaryColor: '#234FDA',
              },
            }}
            digioDocumentId={'ENA230224153254557GC4B6AW5SZH1AP'}
            identifier={'7017370753'}
            //digioToken={digioLoginToken}
          />
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
