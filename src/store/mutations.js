const mutations = {
    changeImgList(state, data) {
        state.imglist = data;
    },
    changeGjData(state, data) {
        var a = {};
        for (let k in data) {
            if (k.indexOf('深度定制-') != -1) {
                a[k] = data[k];
                a[k]['val'] = ''
            }
        }
        state.gj_data = a;
    }
}

export default mutations