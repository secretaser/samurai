import profile_reducer, { addPost, deletePost } from "./profile_reducer";

let initialState = {
   postData: [
      { id: 0, authorID: 228, likes: 0, text: 'Федук гавно' },
      { id: 1, authorID: 228, likes: 226, text: 'Идем с братвой раздавать федуку по ебалу' },
      { id: 2, authorID: 228, likes: 1653, text: 'Нам Элджей сдал его адрес и попросил сказать, что его ждет назад тыкать в зад тыкать в зад' },
      { id: 3, authorID: 228, likes: 1498, text: 'Мой дисс гавно с не самыми красивыми рифмами' },
   ],
};

test('length of postData should be incremented', () => {

   let action = addPost('New post woooow')
   let newState = profile_reducer(initialState, action);

   expect(newState.postData.length).toBe(5);
});

test('text should be New post woooow', () => {

   let action = addPost('New post woooow')
   let newState = profile_reducer(initialState, action);

   expect(newState.postData[4].text).toBe('New post woooow');
});

test('length of postData sholud be decremented', () => {

   let action = deletePost(1);
   let newState = profile_reducer(initialState, action);

   expect(newState.postData.length).toBe(3);
});

test('length of postData sholud not be decremented if postId is incorrect', () => {

   let action = deletePost(1000);
   let newState = profile_reducer(initialState, action);

   expect(newState.postData.length).toBe(4);
});