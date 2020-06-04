export const getBackgroundImgStyle = (src, alt = false) => {
    return {  
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
}