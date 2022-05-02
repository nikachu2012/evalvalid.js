/**
 * 入力された文字にJavaScriptの実行に必要なコードがないか調べます。
 * @param {string} code コードの入力
 * @returns {boolean}
 */

const eval_valid = (code) => {
    if (code.match(/\{|\}|\[|\]|\"|\'|\`|\;|\\|/g)) {
        return true;
    }
    else {
        return false;
    }
}
