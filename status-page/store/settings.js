let theme = localStorage.getItem("theme");
if(theme !== "light" && theme !== "dark") {
    theme = "light";
}

export const state = () => ({
    theme,
});

export const mutations = {
    setTheme(state, theme) {
        state.theme = theme;
    }
}

export const getters = {
    getTheme: state => {
        return state.theme;
    }
}