export const createSetter = (set: any, key: string) => {
  return (newState: any) => {
    set(
      () => ({
        [key]: newState,
      }),
      false,
      `set${key.charAt(0).toUpperCase() + key.slice(1)}`
    );
  };
};
