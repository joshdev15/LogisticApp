import {FC, ReactNode} from 'react';
import {View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface ISection {
  children: ReactNode;
}

const Section: FC<ISection> = ({children}) => {
  const isDark = useColorScheme() === 'dark';
  const defaultStyles = {
    backgroundColor: isDark ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return <View style={defaultStyles}>{children}</View>;
};

export default Section;
