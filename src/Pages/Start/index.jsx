import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Start(){

return(

    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Image
                    source={require("../../assets/icons/logo3.png")}
                />
                <Text>
                    Vamos trsnformar sua vida {"/n"} em jogo , buscando sempre {"/n"} o melhor nível.
                </Text>
            </View>
        </ScrollView>

    </View>

)

}