import { StyleSheet } from "react-native";

const colors = {
    primary: "hsl(47, 88%, 63%)",
    secondary: "hsl(0, 0%, 7%)",
    descriptions: 'hsl(0, 0%, 50%)',
}

const fontFamilies = {
    main: "Figtree-VariableFont_wght"
}

export const styles = StyleSheet.create({
    safeContainer: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center'
    },
    cardContainer: {
        backgroundColor: 'white',
        padding: 25,
        marginHorizontal: 30,
        borderRadius: 20,
        borderWidth: 2
    },
    cardImage: {
        borderRadius: 15,
        height: 230,
        objectFit: 'fill',
        width: "100%",
        marginBottom: 25,
    },
    cardTopic: {
        width: 80,
        height: 30,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 15
    },
    cardTopicText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 2,
        color: colors.secondary,
        fontFamily: fontFamilies.main,
    },
    cardDateText: {
        fontSize: 15,
        color: colors.secondary,
        fontFamily: fontFamilies.main,
        fontWeight: 'bold',
        marginBottom: 18
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.secondary,
        fontFamily: fontFamilies.main,
        marginBottom: 15
    },
    cardDescription: {
        color: colors.descriptions,
        fontSize: 18,
        lineHeight: 24,
        marginBottom: 20
    },
    cardUserContainer: {
        width: "100%",
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardUserImage: {
        width: 50,
        height: 50,
        borderRadius: 80,
        marginRight: 20
    },
    cardUserText: {
        color: colors.secondary,
        fontFamily: fontFamilies.main,
        fontWeight: 'bold',
        fontSize: 18
    }
})