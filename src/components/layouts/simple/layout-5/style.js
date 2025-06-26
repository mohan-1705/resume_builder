import base_style from "../../style/base_style";
export const layout_5_style = {
    ...base_style.main_style,
    primaryColor: "#0056d2", // Strong blue used for headers and accents
    fontFamily: "'Poppins', sans-serif", // Clean, modern sans-serif font
    headerBackground: "#ffffff",
    textColor: "#000000",
    headerTextColor: "#0056d2",
    subTextColor: "#4f4f4f",
    accentColor: "#0056d2",

    nameStyle: {
        ...base_style.nameStyle,
        fontSize: "26px",
        fontFamily: "'Poppins', sans-serif",
        color: "#0056d2",
        textTransform: "none",
        textAlign: "left",
    },
    titleStyle:{
        ...base_style.titleStyle,
        color: "#4f4f4f",
        letterSpacing: "0px",
        textAlign: "left",
    },
    profile_ul: {
        ...base_style.profile_ul,
        gap: "8px",
        margin: "0 0 10px",
        justifyContent:"space-between"
    },

    profile_li: {
       ...base_style.profile_li,
        color: "#000000",
        gap: "4px",
        iconColor: "rgb(6, 51, 228)",
    },



    sectionHeader: {
        ...base_style.sectionHeader,
        color: "#0056d2",
      
    },

    sectionSubHeader: {
        ...base_style.sectionSubHeader
    },

    p: {
       ...base_style.p,
        color: "#4f4f4f",

    },

    h1: {
      ...base_style.h1,
    },

    h2: {
        ...base_style.h2,
    },

    h3: {
        ...base_style.h3
    },

    tagStyle: {
        ...base_style.tagStyle,
        backgroundColor: "#e6f0fd",
        color: "#0056d2",
    },
    progressBar:{
        ...base_style.progressBar
    }
};
