export const findUserCurrentGeolocation = (success, error) => {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(success, error);
    } else {
        error.call();
    }
};

