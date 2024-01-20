import path from 'path'
import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve('public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const mode = env.mode || 'development'
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const PORT = env.port || 3000

  const isDev = mode === 'development'

  const config = buildWebpackConfig({
    mode,
    paths,
    port: PORT,
    isDev
  })

  return config
}
