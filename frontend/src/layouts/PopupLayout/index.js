import {View} from 'react-native';
import styles from './styles';

// TODO: Add styles

function PopupLayout(props) {
  return (
    <View style={styles.container}>
      {/* Transparent background overlay */}
      <View style={styles.overlay} />
      {/* Popup container */}
      <View style={styles.popup}>{props.children}</View>
    </View>
  );
}

export default PopupLayout;
