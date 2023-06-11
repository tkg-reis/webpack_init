const path = require("path");

module.exports = {
    // 開発環境なので見返せるようにバンドル時はコードが読めるようになっている。逆にbuildにすると可読無理。
    mode: "development",
    // devtool: "none",
    // 監視対象を一個で他のファイルを読み込ませたいならimportを使う。（この場合index.jsにimportの記述）
    entry: "./src/index.js",
    // 監視対象を拡大する
    // entry: ["./src/left.js","./src/right.js"],
    devServer: {
        static: "dist",
        open: true,
    },
    // 監視対象を拡大して、なおかつバンドルするファイル数を決められる。またバンドル時にファイルが分かれるのでweb制作で使える。ex.aはswiperファイル、bはgsapファイルなど。＊1に続く
    // entry: {
    //     left: "./src/left.js",
    //     right: "./src/right.js",
    // }
    output: {
        // 絶対パスの記述が必要になるので、node_modulesからpath（絶対パスの記述に必要なモジュール）を変数に代入。
        path: path.resolve(__dirname, "dist"),
        // ＊1 [name].bundle.jsを入れることで先ほどの複数のバンドルファイルを持ち合わせたい場合はこちらを使用。ex.bundle => left.bundle.js,right.bundle.jsが生成される。
        filename: "bundle.js",
        publicPath: "/"
    },
    // 基本loaderとつくものはbundleモジュールのことを指す。
    module: {
        rules: [
            {
                // 
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            // {
            //     // 正規表現 $は終端を、\はエスケープ処理
            //     test: /\.scss$/,
            //     use: [
            //         // この記述は下から実行されるので注意！！
            //         // styleタグ形式でhtmlファイルに注入するためのローダー
            //         "style-loader",
            //         // cssにバンドルする鉄板
            //         "css-loader",
            //         // autoprefixer
            //         "postcss-loader",
            //         // sassをバンドルする鉄板
            //         "sass-loader",
            //     ],
            //     // ベンダープレフィックスの付与など
            // },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer')()
                                ]
                            }
                        }
                    },
                    "sass-loader",
                ],
            },
            {
                // ?は手前(e)があるかないかを判定
                test: /\.(png | jpe?g | jpg | svg | gif)$/,
                use: [
                    // オプションを記述する際はオブジェクトリテラルで情報を渡す。必要がない場合は、配列形式で問題ない。他のローダーがない場合は、配列が省略できる。
                    {
                        loader: "file-loader",
                        options: {
                            // extはファイル拡張子を指す
                            name: "[name].[ext]",
                            // 監視ファイルの名前
                            outputPath: "img",
                            publicPath: "/img/",
                        }
                    }
                ],
            }
        ]
    }

}
