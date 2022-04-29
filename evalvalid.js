/**
 * 入力された文字にJavaScriptの実行に必要なコードがないか調べます。
 * @param {string} code コードの入力
 * @returns {boolean}
 */

const temp = /\{|\}|\[|\]|\"|\'|\`|\:|\;|\+|\-|\/|\\|\!|\#|\%|\&|\(|\)|\=|\~|\*|\<|\>|\?|\_/g;

const eval_valid = (code) => {
    if (code.match(temp)) {
        return true;
    }
    else {
        return false;
    }
}


export default eval_valid;