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
    mercury: "rgb(229, 229, 229)"
}

const baseTheme = {
    boxShadows: {
        section: `0px 16px 58px 0px ${colorNames.violet};`,
        sectionSecondShadow: `0px -2px 50px 0px ${colorNames.violet}`
    },
    fontWeight: {
        bold: 700,
        veryBold: 900
    },
    fontSize: {
        link: 32,
        mainHeader: 38
    },
    width: {
        document: 1216,
        section: 1088
    }
}

export const lightTheme = {
    ...baseTheme,
    colors: {
        websiteBackground: colorNames.whiteLilac,
        sectionBackground: colorNames.white,
        textMain: colorNames.mineShaft,
        textSecondary: colorNames.slateGray,
        buttonBackground: colorNames.scienceBlue,
        buttonText: colorNames.white,
        themeSwitcherBackground: colorNames.mercury,
        iconBoxBackground: colorNames.slateGray,
        section: colorNames.white,
    },
    borders: {
        themeSwitcher: `1px ${colorNames.iron}`
    },
    boxShadows: {
        themeSwitcher: `0px 16px 58px 0px ${colorNames.violet}`,
        themeSwitcherSecondShadow: `0px -2px 50px 0px ${colorNames.violet}`
    }
}

export const darkTheme = {
    ...baseTheme,
    colors: {
        websiteBackground: colorNames.mineShaft,
        sectionBackground: colorNames.darkGray,
        textMain: colorNames.white,
        textSecondary: colorNames.white,
        buttonBackground: colorNames.dodgerBlue,
        buttonText: colorNames.white,
        themeSwitcherBackground: colorNames.darkGray,
        iconBoxBackground: colorNames.white,
        section: colorNames.darkGray,
    },
    borders: {
        themeSwitcher: "none"
    },
    boxShadows: {
        themeSwitcher: "none",
        themeSwitcherSecondShadow: "none"
    }
}