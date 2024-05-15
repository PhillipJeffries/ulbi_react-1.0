import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths } from './config/build/types/config';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve('public', 'index.html')
}

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths: paths
});

export default config;