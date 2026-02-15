import mobileIllustration from '../images/illustration-sign-up-mobile.svg'
import desktopIllustration from '../images/illustration-sign-up-desktop.svg'

export default function Illustration () {
    return (
        <div className="image-wrapper">
            
            



            <img src={mobileIllustration} 
            className='mobile-illustration'
            alt="mobile illustration" />
            
            <img src={desktopIllustration} alt="desktop illustration" 
            className='desktop-illustration'
            />
            </div>

    )
}