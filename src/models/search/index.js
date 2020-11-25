import produce from 'immer';

const search = {
  state: {
    //여기에 키워드에 맞는 결과값을 넣어준다 
    list: [],
  },
  reducers: { 
    // setList(state,payload){
    //   return produce(state, draft => {
    //     draft.list.push(payload);
    //   });
    // }
  },

};

export default search;



// const search  = useSelector(({ search }) => search); 
// console.log('리스트확인',search.list);
// const dispatch = useDispatch();
//dispatch.search.setList(response.data);