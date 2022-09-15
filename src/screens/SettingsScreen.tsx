import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, Text } from '@ui-kitten/components';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/exampleSlice'
import { RootState } from '../redux/store';
import styled from 'styled-components/native'

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CounterText = styled.Text`
    margin: 0 16px 0 16px;
`

const SettingsScreen = () => {
    const count = useSelector((state: RootState) => state.example.value)
    const dispatch = useDispatch()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>Settings</Text>
        <Divider  style={{ height: 20 }} />
        <ButtonContainer>
        <Button
          aria-label="Increment value"
          onPress={() => dispatch(increment())}
        >
          Increment
        </Button>
        <CounterText>{count}</CounterText>
        <Button
          aria-label="Decrement value"
          onPress={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </ButtonContainer>
      </Layout>
    </SafeAreaView>
  );
};

export default SettingsScreen