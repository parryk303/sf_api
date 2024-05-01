declare module 'customize-cra' {
    import { Configuration } from 'webpack';
  
    interface WebpackConfigFunction {
      (config: Configuration): Configuration;
    }
  
    type OverrideFunction = (fn: WebpackConfigFunction) => WebpackConfigFunction;
  
    export const override: OverrideFunction;
    export const addWebpackAlias: (alias: Record<string, string>) => OverrideFunction;
  }
  