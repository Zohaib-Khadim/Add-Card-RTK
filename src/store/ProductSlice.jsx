import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const ProductSlice = createSlice({
  name: "Product",
  initialState: {
    data: [],
    status: STATUES.IDLE ,
  },
  reducers: {
    // setProducts(state, action) {
    //     // Do Not Used It.
    //     // const res = await fetch("https://fakestoreapi.com/products");------>Because our functions are working sync thus this type of action is not used in the reducers.
    //   state.data = action.payload;
    // },
    // setStatus(state,action){
    //     state.status = action.payload;
    // }
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchProducts.pending, (state, action) => {
            state.status = STATUES.LOADING;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUES.IDLE;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = STATUES.ERROR;
        });
},
});

export const { setProducts , setStatus} = ProductSlice.actions;

export default ProductSlice.reducer;

// Thunk

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
});


// export function fetchProducts (){
//     return async function fetchProductThunk (dispatch , getState){
//         dispatch(setStatus(STATUES.LOADING))
//         try {
//             const res = await fetch("https://fakestoreapi.com/products");
//             const data = await res.json();
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUES.IDLE))
//         }catch(error){
//             console.log(error);
//             dispatch(setStatus(STATUES.ERROR))
//         }
//     }
// }