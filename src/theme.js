const colorNames = {
    white: "rgb(255, 255, 255)",
    violet: "rgba(9, 10, 51, 0.03)",
    slateGray: "rgb(110, 126, 145)",
    whiteLilac: "rgb(251, 251, 254)",
    mineShaft: "rgb(37, 37, 37)",
    scienceBlue: "rgba(3, 102, 214)",
    dodgerBlue: "rgb(33, 136, 255)",
    darkGray: "rgba(54, 54, 54, 0.72)",
    iron: "rgba(209, 213, 218, 0.3)",
    mercury: "rgb(229, 229, 229)",
    anakiwa: "rgba(140, 194, 255)",
    shipCove: "rgba(109, 147, 190)"
}

const baseTheme = {
    boxShadows: {
        section: `0px 16px 58px 0px ${colorNames.violet}, 0px -2px 50px 0px ${colorNames.violet}`
    },
    fontWeight: {
        lightBold: 600,
        bold: 700,
        veryBold: 900
    },
    fontSize: {
        link: 32,
        mainHeader: 38,
        linkButton: 20,
        linkButtonMobile: 18,
        small: 12
    },
    width: {
        document: 1216,
        section: 1088
    },
    breakpoints: {
        verySmall: 576,
    },
    borders: {
        linkButton: `1px ${colorNames.iron}`
    }
}

export const lightTheme = {
    ...baseTheme,
    colors: {
        websiteBackground: colorNames.whiteLilac,
        sectionBackground: colorNames.white,
        textMain: colorNames.mineShaft,
        textSecondary: colorNames.slateGray,
        linkButtonBackground: colorNames.scienceBlue,
        linkButtonText: colorNames.white,
        themeSwitcherBackground: colorNames.mercury,
        iconBoxBackground: colorNames.slateGray,
        icon: colorNames.white,
        section: colorNames.white,
        listMarkers: colorNames.scienceBlue,
        repoTiles: colorNames.white
    },
    borders: {
        ...baseTheme.borders,
        themeSwitcher: `1px ${colorNames.iron}`,
    },
    boxShadows: {
        ...baseTheme.boxShadows,
        themeSwitcher: "none",
        linkButtonHover: `-2px -2px 0px 0px ${colorNames.anakiwa}, 2px 2px 0px 0px ${colorNames.anakiwa}`
    }
}

export const darkTheme = {
    ...baseTheme,
    colors: {
        websiteBackground: colorNames.mineShaft,
        sectionBackground: colorNames.darkGray,
        textMain: colorNames.white,
        textSecondary: colorNames.white,
        linkButtonBackground: colorNames.dodgerBlue,
        linkButtonText: colorNames.white,
        themeSwitcherBackground: colorNames.darkGray,
        iconBoxBackground: colorNames.white,
        icon: colorNames.mineShaft,
        section: colorNames.darkGray,
        listMarkers: colorNames.dodgerBlue,
        repoTiles: colorNames.darkGray,
    },
    borders: {
        ...baseTheme.borders,
        themeSwitcher: `1px ${colorNames.white}`,
    },
    boxShadows: {
        ...baseTheme.boxShadows,
        themeSwitcher: `0px 16px 58px 0px ${colorNames.violet}, 0px -2px 50px 0px ${colorNames.violet}`,
        linkButtonHover: `-2px -2px 0px 0px ${colorNames.shipCove},  2px 2px 0px 0px ${colorNames.shipCove}`
    }
}