// Feel free to extend this interface
// depending on your app specific config.
export class EnvConfig {
  	API?: string;
  	ENV?: string;
}

export const Config: EnvConfig = JSON.parse('<%= ENV_CONFIG %>');
