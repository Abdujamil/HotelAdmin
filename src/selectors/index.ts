export const isLoader = (state: any): boolean => state.app.loadersCount > 0; //Show or hide loader component
export const isError = (state: any): boolean => state.app.error; //Show or hide error component
export const getErrorMessage = (state: any): string => state.app.errorMessage;
export const isAlert = (state: any): boolean => state.app.alert;
export const getSuccessMessage = (state: any): boolean =>
  state.app.successMessage;

export const isUserDataFetched = (state: any) =>
  Object.keys(state.user).length !== 0;
export const getUser = (state: any) => state.user;
export const getUserId = (state: any) => state.user?.data?.id || null;

export const getRooms = (state: any) => state.rooms;
export const isRoomsFetched = (state: any) => state.rooms.length !== 0;

export const getStaff = (state: any) => state.staff;
export const isStaffFetched = (state: any) => state.staff.length !== 0;

export const getAccommodation = (state: any) => state.accommodation;
export const isAccommodationFetched = (state: any) =>
  state.accommodation.length !== 0;

export const getCategoryRooms = (state: any) => state.categoryRooms;
export const isCategoryRoomsFetched = (state: any) =>
  state.categoryRooms.length !== 0;

export const getServices = (state: any) => state.services;
export const isServicesFetched = (state: any) => state.services.length !== 0;
