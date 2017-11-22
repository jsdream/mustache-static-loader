# mustache-static-loader
Mustache.js static loader for Webpack.

This is tiny webpack loader which wraps Mustache.js to render mustache templates during webpack build. Data for mustache templates (views) is passed using `viewData` property of loader options object. Custom delimiters (tags) can be set with the help of `delimiters` options field.

### Install

```sh
$ npm i mustache-static-loader --save
```

### Usage

WebPack 2.x
```javascript
module: {
    rules: [ {
        test: /\.html$/,
        use: [
            {
                loader: 'apply-loader'
            },
            {
                loader: 'mustache-static-loader',
                options: {
                    delimiters: ['<$', '$>'], // (optional) allows to pass custom delimiters (tags) to Mustache
                    viewData: { // data object which will be passed to templates for rendering
                        title: 'Hello World!'
                    }
                }
            }
        ]
    } ]
}
```
