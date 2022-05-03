/**
 * 入力された文字にJavaScriptの実行に必要なコードがないか調べます。
 * @param {string} code コードの入力
 * @returns {boolean}
 */

const eval_valid = (code) => {
    if (code.search(/\{|\}|\[|\]|\"|\'|\`|\;|\\/g) == -1) {
        return false;
    }
    else {
        return true
    }
}
