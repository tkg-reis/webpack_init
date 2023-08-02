// 
// .babelrcの形式
// {
//     // json形式 .babelrcの場合
//     // js形式でも記述可能 強みは関数が実行できる
//     // es5 IE11
//     "presets": [
//         "@babel/preset-env"
//     ]
// }

// babel.config.js形式の記述
// core-js@3 regeneratorはasyncなどの最新バージョンででてきたものを対応させるためのモジュール

module.exports = api => {
    api.cache(true);

    return {
        "presets": [
            ["@babel/preset-env", {
                targets: [
                    // ie: "11",
                    // chrome: "60",
                    'last 1 version',
                    '> 1%',
                    'maintained node versions',
                    'not dead',
                ],
                useBuiltIns: "usage",
                corejs: 3
            }]
        ]
    }
}