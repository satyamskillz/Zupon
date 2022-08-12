import DateTimePicker from '@react-native-community/datetimepicker';
import {View, Text, TextInput, Button} from 'react-native';
import PopupLayout from '../../layouts/PopupLayout';
import styles from './styles';

// TODO: Add time picker and date picker using react-native-community/datetimepicker
// resources: https://github.com/react-native-datetimepicker/datetimepicker

// TODO: Also add styles

function AddCouponCard(props) {
  return (
    <PopupLayout>
      <View style={styles.container}>
        <Text style={styles.heading}>Save your coupon</Text>
        <TextInput style={styles.input} placeholder="Enter coupon code" />
        <View style={styles.buttons}>
          <Button style={styles.buttons.secondary}>Set Alarm</Button>
          <Button style={styles.buttons.Primary}>Add Coupon</Button>
        </View>
      </View>
    </PopupLayout>
  );
}

export default AddCouponCard;
