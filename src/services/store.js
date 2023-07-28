import { configureStore} from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(articleApi.middleware)
})

// We are first configuring a store, a store is a global state that saves
// the entire info of our application but in most cases we don't need the 
// entire thing we just need to reduce it to a particular stuff (refered 
// as a slice of a pie) and in this case it's going to be the articleApi 
// meaning we want just get something from this Api
// Thus, to make this work we added it as a reducer and also concatinated 
// in the middleware 
