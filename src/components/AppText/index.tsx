import {CSSProperties, FC} from 'react';
import {Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface IAppText {
  text: string;
  style?: CSSProperties;
}

const AppText: FC<IAppText> = ({text, style}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const themeColor = isDarkMode ? Colors.lighter : Colors.darker;
  const color = style?.color === undefined ? themeColor : style.color;
  const finalStyle = {...style, color};

  return <Text style={finalStyle}>{text}</Text>;
};

export default AppText;
