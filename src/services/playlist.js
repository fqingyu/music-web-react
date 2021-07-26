import request from "./axios";

export function getPlayListCategory() {
    return request({
        url: "/playlist/catlist"
    })
}

export function getPlayListCategoryList(cat = "全部", offset = 0, limit = 35, order = "hot") {
    return request({
        url: "/top/playlist",
        params: {
            cat,
            limit,
            offset,
            order
        }
    })
}