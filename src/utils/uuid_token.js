import { v4 as uuidv4 } from 'uuid';
//要生成一个随机的字符串，且保持不变。游客身份持久保存。
export const getUUID = ()=>{
    //先看本地存储有没有
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    //如果没有则生成
    if(!uuid_token){
        uuid_token = uuidv4();
        localStorage.setItem('UUIDTOKEN',uuid_token);
    }
    return uuid_token;
}