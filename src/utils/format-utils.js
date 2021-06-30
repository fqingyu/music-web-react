export function getSizeImage(imgUrl, size) {
    return `${imgUrl}?param=${size}x${size}`;
}

export function getCount(count) {
    if (count < 0) return;
    if (count < 10000) {
        return count;
    }
    else if (Math.floor(count / 10000) < 10000) {
        return Math.floor(count / 1000) / 10 + "万";
    }
    else {
        return Math.floor(count / 10000000) / 10 + "亿";
    }
}

export function msToTime(duration) {
    var seconds = parseInt((duration / 1000) % 60)
        , minutes = parseInt((duration / (1000 * 60)) % 60)
        , hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return (hours === "00" ? "" : hours + ":") + minutes + ":" + seconds;
}