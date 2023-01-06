export const initialState = 
{
    basket : [],

}
  
export const calculateTotalPrice = (basket) => 
         basket?.reduce((accumulatedTotal, item) =>
        accumulatedTotal + item.price ,0 //0 is the start point of accumulatedTotal
        );



const reducer = (state,action) =>
{
    console.log(action)
    
    switch(action.type)
    {
     case  'ADD_TO_BASKET':
         return{
            ...state,
            basket: [...state.basket, action.item]
           
        
         };

     default:
        return state
    }
}

export default reducer;




