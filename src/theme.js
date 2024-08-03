const colorNames = {
    white: "rgb(255, 255, 255)",
    violet: "rgba(9, 10, 51, 0.03)",
    slateGray: "rgb(110, 126, 145)",
    whiteLilac: "rgb(251, 251, 254)",
    mineShaft: "rgb(37, 37, 37)",
    scienceBlue: "rgba(3, 102, 214)",
    dodgerBlue: "rgb(33, 136, 255)",
    darkGray: "rgba(54, 54, 54, 0.72)"
}

const baseTheme = {
    boxShadows: {
        section: `0px 16px 58px 0px ${colorNames.violet};`,
        sectionSecondShadow: `0px -2px 50px 0px ${colorNames.violet}`
    },
    fontWeight: {
        bold: 700,
        veryBold:900
    },
    fontSize: {
        link:32,
        mainHeader:38
    },
    width: {
        document:1216,
        section:1088
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
    }
}