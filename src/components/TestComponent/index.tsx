import {FC, useState} from 'react';
import {GestureResponderEvent, View} from 'react-native';
import {
  ActivityIndicator,
  Button,
  MD2Colors,
  Card,
  Text,
  Avatar,
  Portal,
  Dialog,
  FAB,
  ProgressBar,
  MD3Colors,
} from 'react-native-paper';
import styles from './styles';

const LeftContent: FC<any> = props => <Avatar.Icon {...props} icon="folder" />;

const TestComponent = () => {
  const [visible, setVisible] = useState(false);

  const hideDialog = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      {Array.from({length: 3}).map(item => (
        <View style={{marginBottom: 10}}>
          <Card>
            <Card.Title
              title={`Card Title ${item}`}
              subtitle="Card Subtitle"
              left={LeftContent}
            />
            <Card.Content>
              <Text variant="titleLarge">Card title</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        </View>
      ))}

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">This is simple dialog</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <View style={{padding: 10}}>
        <ActivityIndicator animating={true} color={MD2Colors.blue500} />
      </View>

      <View style={{padding: 10}}>
        <ProgressBar progress={0.5} color={MD3Colors.error80} />
      </View>

      <Button
        icon={'camera'}
        mode={'contained'}
        onPress={(_: GestureResponderEvent) => setVisible(true)}>
        Press me
      </Button>

      <View style={{height: 100}}>
        <FAB
          icon="plus"
          style={{
            position: 'absolute',
            margin: 10,
            right: 0,
            bottom: 0,
          }}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  );
};

export default TestComponent;
