import React from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";

// import DefaultButton from 
import LifeStatus from "../../Components/Common/LifeStatus";

export default function Start(){
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center"}}>
                    <Image source={require("../../assets/icons/logo3.png")} style={styles.logo} />
                    <LifeStatus/>
                    <Text style={styles.description}>
                        Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"} {" "}
                        o melhor nível.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },
    description: {
        color: "#ffffff",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,
    },
});