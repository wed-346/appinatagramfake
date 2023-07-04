import { api } from "../../api";
import { getPhotosFailed, getPhotosStarted, getPhotosSucces, setPhotosTotal } from "../actionCreateros/photos"


export const getPhotos = (page = 1) => {
    return async (dispatch, getState) => {
        try {
            const store = getState();
            if (page === 1) {
                dispatch(getPhotosStarted());

            }
            const responcer = await api.photos.getPhotos({
                params: {
                    _page: page,
                    _limit: 5,

                },
            });
            if (page === 1) {
                dispatch(setPhotosTotal(responcer.headers["x-total-count"]))
            dispatch(getPhotosSucces([...responcer.data]));
            } else {
               
                dispatch(getPhotosSucces([...store.photos.photos,...responcer.data]));

            }
            
            
        } catch (error) {
            dispatch(getPhotosFailed(error));
            
        }
    }
};