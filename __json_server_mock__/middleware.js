// 用json-server 模拟自定义的api
module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login') {
        if (req.body.username === 'czm' && req.body.password === '123456') {
            return res.status(200).json({
                user: {
                    token: '123'
                }
            })
        } else {
            return res.status(400).json({ message: '用户名或者密码错误' })
        }
    }
    next()
}

// 在 package.json 在 json-server 后面添加 --middlewares 文件路径