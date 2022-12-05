const initialState={
    book:[]
}

const bookReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'set_book':
            return{
                ...state,
                book:action.payload.book
            }
        case 'add_book':
            return{
                ...state,
                book: [...state.book, action.payload]
            }
        case 'remove_book':
            const exist1=state.book.filter(item=>item.id!==action.payload)
            return {
                ...state,
                book:exist1
            }  
        case 'edit_book':
            console.log('edit ACTION',action);
            let temp=[]
            state.book.map((item,index)=>{
                if (state.book[index].id!==action.payload.id) {
                    temp.push(state.book[index])
                } else {
                    temp.push(action.payload)
                }

            })
            return{
                ...state,
                book:temp
            }
        default:
            return state;
    }
}

export default bookReducer