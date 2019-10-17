import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Lock from './lock.svg';

const App = () => {
  const [state, setState] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setState(oldState => !oldState);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#CCCCCC'}}>
      <Lock color={state ? '#000000' : '#0000FF'} width={50} height={50} />
    </SafeAreaView>
  );
};

export default App;
