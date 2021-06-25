import theme from './theme';

export interface DefaultSettings {
  /**
   * primary color of ant design
   */
  theme: object;
  title: string;
}

export default {
  theme: { ...theme },
  title: '云客',
} as DefaultSettings;
