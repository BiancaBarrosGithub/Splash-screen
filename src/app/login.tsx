import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { styles} from '../css/style';
import { Link } from "expo-router";

export default function login() {
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
                <TextInput placeholder="Insira seu CPF" style={styles.input} />

                {/* texto senha */}
                <Text style={styles.text}>SENHA:</Text>

                {/* input da senha */}
                <TextInput secureTextEntry placeholder="Insira sua senha" style={styles.input} />

                {/* div para alinhar os botões */}
                <View style={styles.subBtn}>
                    <TouchableOpacity><Link href={'cadastro'} style={styles.subBtn1}>cadastrar</Link></TouchableOpacity>
                    <TouchableOpacity><Link href={'esquecisenha'} style={styles.subBtn1}>esqueci a senha</Link></TouchableOpacity>
                </View>
            </View>

            {/* div para alinhar o botão entrada */}
            <View style={styles.formbtn}>
                <Link href={'home'} style={styles.btn}>ENTRAR</Link>
            </View>
        </View>
    )
}