const router = require('koa-router')()

router.prefix('/vue3')

router.get('/car', async (ctx) => {
    ctx.body = {
        title: 1234
    }
})
module.exports = router