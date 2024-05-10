import {reactive} from "vue"


export const store = reactive({
    movieList: null,
    seriesList: null,
    userQuery: '',
    placeHolder: 'Es: Harry Potter',
    isWatchlist: false,
    isToggler: false
    
});
