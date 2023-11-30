import { View, Text } from "react-native";
import styles from "./styles";

const Description = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Flávio Raposo de Assis</Text>
            <Text style={styles.subtitle}>Desenvolvedor Back-end</Text>
        </View>
    )
}

export default Description;