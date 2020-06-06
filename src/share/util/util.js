export const getBackgroundImgStyle = (src, listOtherStyle = {}, isContain = false) => {
    return {  
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center',
        backgroundSize: isContain ? 'contain' : 'cover',
        backgroundRepeat: 'no-repeat',
        width: listOtherStyle.width,
        height: listOtherStyle.height
    }
}