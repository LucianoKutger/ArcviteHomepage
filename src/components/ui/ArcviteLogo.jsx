
import logoStyles from './ArcviteLogo.module.css'; // Pfad anpassen

const ArcviteLogo = () => (
    <div className={logoStyles.logoContainer}>
        <svg 
            width="120" 
            height="15" 
            viewBox="0 0 120 15" 
            className={logoStyles.arcSvg}
        >
            <path 
                d="M10,15 Q60,-5 110,15" 
                fill="none" 
                stroke="#E5D9B6" 
                strokeWidth="1" 
            />
        </svg>
        <span className={logoStyles.brandText}>ARCVITE</span>
    </div>
);

export default ArcviteLogo;