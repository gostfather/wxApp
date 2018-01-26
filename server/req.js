get = ( url, params, next ) => {
    return new Promise(
        wx.request({
            url: url, 
            data: params,
            method: "GET",
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function(res) {
                resolve(res)
            }
        })
    )
};

post = ( url, params, next ) => {
    return new Promise(
        wx.request({
            url: url, 
            data: params,
            method: "POST",
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function(res) {
                resolve(res)
            }
        })
    )
};
export default {
    get,
    post
}