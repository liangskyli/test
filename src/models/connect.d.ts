export type Loading = {
  global: boolean;
  effects: Record<string, boolean | undefined>;
  models: {
    global?: boolean;
  };
};

export type ConnectState = {
  loading: Loading;
};
