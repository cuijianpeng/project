import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'demo/entry/base.index.js',
    dest: 'demo/dest/base.index.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        resolve({ jsnext: true, main: true, browser: true, }),
        commonjs(),
        babel({ exclude: 'node_modules/**', })
    ]
};