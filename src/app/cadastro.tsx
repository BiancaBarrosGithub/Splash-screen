import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../css/style";
import { Link } from "expo-router";


export default function cadastro() {
    return (
        //div principal
        <View style={styles.imagemBody}>
            {/* imagem logo senai */}
            <Image style={styles.imagemss} source={require('../../assets/sesi-senai.webp')} />


            {/* inicio do formulario */}
            <View style={styles.form}>


                {/* texto login */}
                <Text style={styles.text}>LOGIN:</Text>


                {/* input do login */}
                <TextInput placeholder="Insira seu login" style={styles.input} />


                {/* texto senha */}
             <Text style={styles.text}>SENHA:</Text>


             {/*input da senha*/}
             <TextInput secureTextEntry placeholder="Insira sua senha" style={styles.input}/>


              {/*div para alinha o botao entrada*/}
            <View style={styles.formbtn}>
              <Link href={'login'} style={styles.btn}>ENTRAR</Link>
            </View>
             </View>
            </View>
    )
}