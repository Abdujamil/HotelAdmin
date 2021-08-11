export const isLoader = (state: any): boolean => state.app.loadersCount > 0;
export const isError = (state: any): boolean => state.app.error;
export const getErrorMessage = (state: any): string => state.app.errorMessage;
export const isAlert = (state: any): boolean => state.app.alert;
export const getSuccessMessage = (state: any): boolean => state.app.successMessage;

export const isUserDataFetched = (state: any) => Object.keys(state.user).length !== 0;
export const getUser = (state: any) => state.user;
export const getUserId = (state: any) => state.user?.data?.id || null;
