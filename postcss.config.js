module.exports = {
    plugins: [
        require('autoprefixer')({
            // autoprefixerのオプションを指定
            grid: true // CSS Gridに対する自動ベンダープレフィックスを有効にする
        })
    ]
};
