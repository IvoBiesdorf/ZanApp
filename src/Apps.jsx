import { Linking, View} from 'react-native';
import * as React from 'react';
import {Avatar,  ListItem} from 'react-native-elements';
import {FlatList} from 'react-native';
import { StyleSheet, Appearance} from 'react-native';

const Apps =()=>{
    const colorScheme = Appearance.getColorScheme();
    // const colorScheme = "dark";
    return(
        <FlatList
            style={{ backgroundColor: colorScheme === 'dark' ? "#0004":"#FFF" }}
            data={[
            {   
                id: 1,
                nome: 'Nota fiscal Gaúcha', 
                descricao: "Aplicativo do Portal de Serviços da Receita Estadual",
                link: 'https://play.google.com/store/apps/details?id=br.gov.rs.procergs.nfg',
                img: require("../assets/nfgaucha.png")
            },
            {
                id: 3,
                nome: "Menor preço / Nota fiscal gaúcha",
                descricao:"O aplicativo permite ao usuário pesquisar o menor preço de um produto",
                link: "https://play.google.com/store/apps/details?id=br.gov.rs.procergs.nfg",
                img: require("../assets/menorpreco.png")
            },
            {
                id: 5,
                nome: "GOV.BR",
                descricao:"Aplicativo oficial do Governo",
                link: "https://play.google.com/store/apps/details?id=br.gov.meugovbr&hl=pt_BR&gl=US",
                img: require("../assets/govbr.png")
            },
            {
                id: 6,
                nome: "Carteira de Trabalho Digital",
                descricao:"Aplicativo que substitui a Carteira de Trabalho e Previdência Social (CTPS).",
                link: "https://play.google.com/store/apps/details?id=br.gov.dataprev.carteiradigital",
                img: require("../assets/cartrabalho.png")
            },
            {
                id: 7,
                nome: "FGTS",
                descricao:"Aplicativo do Fundo de Garantia do Tempo de Serviço.",
                link: "https://play.google.com/store/apps/details?id=br.gov.caixa.fgts.trabalhador",
                img: require("../assets/fgts.png")
            },
            {
                id: 8,
                nome: "Conecte SUS",
                descricao:"Aplicativo do Sistema Único de Saúde Brasileiro.",
                link: "https://play.google.com/store/apps/details?id=br.gov.datasus.cnsdigital",
                img: require("../assets/conectesus.png")
            },
            {
                id: 9,
                nome: "E-título",
                descricao:"Aplicativo móvel para obtenção da via digital do título eleitoral.",
                link: "https://play.google.com/store/apps/details?id=br.jus.tse.eleitoral.etitulo",
                img: require("../assets/etitulo.png")
            },
            
            ]}
            renderItem={({item}) => {
                return(
                    <ListItem 
                        bottomDivider
                        onPress={() => {Linking.openURL(item.link) }}
                    >
                        <Avatar
                            size={55}
                            rounded
                            source={item.img}
                            containerStyle={{
                                borderColor: '#0006',
                                borderStyle: 'solid',
                                borderWidth: 1,
                            }}
                        />
                        <ListItem.Content >
                            <ListItem.Title>{item.nome}</ListItem.Title>
                            <ListItem.Subtitle>{item.descricao}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron size={22} color = {colorScheme === 'dark' ? "#FFF":"#000"} />
                    </ListItem>
                )
            }}
            keyExtractor={item => item.id}
        />
    )
}
export default Apps;
