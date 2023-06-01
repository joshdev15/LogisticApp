import Section from '@components/Section';
import TestComponent from '@components/TestComponent';
import {ScrollView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const TestScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Section>
        <TestComponent />
      </Section>
    </ScrollView>
  );
};

export default TestScreen;
