import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

const HomeScreen = ({ navigation }) => {
    const navigateDetails = () => {
        navigation.navigate('Settings');
      };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>OPEN SETTINGS</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen;
