/*
    返回随机字符串（图片去缓存）
*/
export function createRandom() {
    let chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let res1 = "";
    let res2 = "";
    for(let i = 0; i < 10 ; i ++) {
        let id1 = Math.ceil(Math.random()*35);
        let id2 = Math.ceil(Math.random()*35);
        res1 += chars[id1];
        res2 += chars[id2];
    }
    return res1 + res2;
}
