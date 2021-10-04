export const reducer = (prevState: any, action: any) => {
  switch (action.type) {
    case 'EXAMPLE':
      return {
        ...prevState,
        token: null
      };
    default:
      return prevState;
  }
};
