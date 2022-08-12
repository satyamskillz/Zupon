import PopupLayout from '../../layouts/PopupLayout';
import {View, Text} from 'react-native';
import styles from './styles';

// TODO: Add styles

function ViewCouponCard(props) {
  return (
    <PopupLayout>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>{props.coupon.name}</Text>
          <Text style={styles.description}>{props.coupon.description}</Text>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.buttons.delete}>Delete</Button>
          <Button style={styles.buttons.copy}>Copy</Button>
          <Button style={styles.buttons.share}>Share</Button>
        </View>
      </View>
    </PopupLayout>
  );
}

export default ViewCouponCard;
