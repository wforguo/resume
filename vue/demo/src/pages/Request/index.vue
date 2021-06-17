<template>
    <div class="request">
        <h3><code>axios应用</code></h3>
    </div>
</template>

<script>

import request from '../../libs/request';
import * as qs from "qs";

export default {
    name: "Request",
    mounted() {
        request.request({
            method: 'post',
            url: '/api/weixin/share',
            data: qs.stringify({
                url: window.location.href
            })
        }).then((res) => {
            console.log(res.data);
        }, (err) => {
            console.log(err);
        });
    }
}
</script>

<style scoped>

</style>
