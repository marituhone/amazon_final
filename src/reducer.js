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
   
       case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (baketItem) => baketItem.id === action.id
            )
            console.log(index);
            let newbasket = [...state.basket];

            if (index >=0)
            {
                newbasket.splice(index,1)
            }
            else{
                console.warn(`cant remove`)
            }
            return {
                ...state,
                basket:newbasket
            }
           

     default:
        return state
    }
}

export default reducer;




