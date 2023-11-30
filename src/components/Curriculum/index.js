import { ScrollView, Text, Button, Linking } from "react-native";
import styles from "./styles";

const Curriculum = () => {
  const url = "https://www.linkedin.com/in/fl%C3%A1vio-raposo-69b824252/";

  return (
    <ScrollView>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.text}>
      Atualmente estuda análise e desenvolvimento de sistemas. Possui conhecimento em Html, JavaScript e CSS. Além disso, possui experiência com a linguagem Python e C. Está familiarizado com o gerenciamento de projetos (Scrum). 
      </Text>
      <Text style={styles.title}>Competências</Text>
      <Text style={styles.text}>Linguagens: Javascript/Python/C</Text>
      <Text style={styles.text}>Framework: React Native</Text>
      <Text style={styles.text}>
        Outras tecnologias: Git, HTML e CSS
      </Text>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.text}>Email: flavio.raposo@outlook.com.br</Text>
      <Text style={styles.text}>
      <Button title="LinkedIn" onPress={() => Linking.openURL(url)} />
      </Text>
    </ScrollView>
  );
};

export default Curriculum;
