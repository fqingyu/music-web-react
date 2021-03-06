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

export function changeBlurImage(picStr) {
    const blurImg = "//music.163.com/api/img/blur/" + picStr;
    return blurImg;
}

export function msToDate(timestamp) {
    if(!timestamp) return;
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    if(month < 10) {
        return `0${month}月${day}日`;
    }
    else {
        return `${month}月${day}日`;
    }
}
