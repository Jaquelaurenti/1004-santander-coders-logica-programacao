export function setMaxScore(score) {
    const currentMaxScore = getCookie('score');

    if (currentMaxScore < score) {
        return setCookie('score', score, 365);
    }

    return currentMaxScore;
}

export function getMaxScore() {
    return getCookie('score');
}

export function setCookie(cookieName, cookieValue, expireDays) {
    const timestamp = new Date();
    timestamp.setTime(timestamp.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    let expires = "expires="+timestamp.toUTCString();

    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";

    return getCookie(cookieName);
}

export function getCookie(cookieName) {
    const value = document.cookie.split(';').find(cookie => cookie.includes(cookieName));
    console.log(value);
    if (value) {
        return value.split('=')[1];
    }
    return null;
}