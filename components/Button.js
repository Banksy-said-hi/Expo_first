import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress }) {
  if (theme === "primary") {
    return (
      <View>
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={30}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
        
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 100,
      height: 80,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row', // Aligns items (e.g., icon and text) in a row
    },
    buttonIcon: {
      paddingRight: 8, // Spacing between icon and label, adjust as needed
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold',
    },
});

  

