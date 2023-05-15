
import * as React from 'react';
import {Avatar,  ListItem} from 'react-native-elements';
import {FlatList, Appearance, Linking} from 'react-native';

const Sites =()=>{
    const colorScheme = Appearance.getColorScheme();
    // const colorScheme = "dark";
    return(
        <FlatList
        style={{ backgroundColor: colorScheme === 'dark' ? "#0004":"#FFF" }}
            data={[
            {
                id: 2,
                nome: "Nota fiscal Gaúcha",
                descricao:"Site do Portal de Serviços da Receita Estadual",
                link: "https://nfg.sefaz.rs.gov.br/",
                img: require("../assets/nfgaucha.png"),
            },
            {
                id: 11,
                nome: "Peça nota Santa Maria",
                descricao:"Portal de serviços do Peça nota Santa Maria",
                link: "http://www.issnetonline.com.br/santamaria/pecanota/Default.aspx",
                img: require("../assets/nfsanta.jpg")
            },
            {
                id: 4,
                nome: "GOV.BR",
                descricao:"Site oficial do Governo",
                link: "https://www.gov.br/pt-br",
                img: require("../assets/govbr.png")
            },
            {
                id: 8,
                nome: "Conecte SUS",
                descricao:"Aplicativo do Sistema Único de Saúde Brasileiro.",
                link: "https://play.google.com/store/apps/details?id=br.gov.datasus.cnsdigital",
                img: require("../assets/conectesus.png")
            },
            {
                id: 10,
                nome: "Receita Federal",
                descricao:"Site da Receita Federal.",
                link: "https://www.gov.br/receitafederal/pt-br",
                img: require("../assets/receita.jpg")
            },
            
            ]}
            renderItem={({item}) => {
                return(
                    <ListItem 
                        bottomDivider
                        onPress={() => {Linking.openURL(item.link) }}
                    >
                        <Avatar
                            size={65}
                            rounded
                            source={item.img}
                            containerStyle={{
                                borderColor: '#0004',
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
export default Sites;
