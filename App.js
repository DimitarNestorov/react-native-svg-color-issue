import React, {useState, useEffect} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
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
    <SafeAreaView>
      <TouchableOpacity>
        <Lock color={state ? '#000000' : '#0000FF'} width={50} height={50} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
