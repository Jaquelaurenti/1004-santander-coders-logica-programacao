/** Check if the current score is higher than the max score to change or keep it.
 * @param {number} score - The current score
 * @returns {number} currentMaxScore - The max score
 */
export function setMaxScore(score) {
    const currentMaxScore = getCookie('score');

    if (currentMaxScore < score) {
        return setCookie('score', score, 365);
    }

    return currentMaxScore;
}

/** Get the max score from the cookie */
export function getMaxScore() {
    return getCookie('score');
}

/** Change the cookie value in a given cookie for the set time
 * @param {string} cookieName - The name of the cookie
 * @param {string} cookieValue - The value of the cookie
 * @param {number} expireDays - The number of days the cookie will be valid
 * @returns {string} The value of the cookie
 */
export function setCookie(cookieName, cookieValue, expireDays) {
    const timestamp = new Date();
    timestamp.setTime(timestamp.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    let expires = "expires="+timestamp.toUTCString();

    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";

    return getCookie(cookieName);
}

/** Get the value of a cookie by its name
 * @param {string} cookieName - The name of the cookie
 * @returns {string} The value of the cookie
 */
export function getCookie(cookieName) {
    const value = document.cookie.split(';').find(cookie => cookie.includes(cookieName));
    console.log(value);
    if (value) {
        return value.split('=')[1];
    }
    return null;
}