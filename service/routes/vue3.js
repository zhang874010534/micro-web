const router = require('koa-router')()

router.prefix('/vue3')

router.get('/car', async (ctx) => {
    console.log(ctx.request.query)
    ctx.body = {
        title: 1234
    }
})
router.post('/car', async (ctx) => {
    console.log(ctx.request.post)
})
module.exports = router