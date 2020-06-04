export const getBackgroundImgStyle = (src, listOtherStyle = {}) => {
    return {  
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: listOtherStyle.width,
        height: listOtherStyle.height
    }
}