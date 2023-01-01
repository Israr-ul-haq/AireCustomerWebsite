import styles from "./Footer.module.scss";
import Social from "./Social";
function FooterContent() {
  return (
    
    
    <div className={`${styles.innercontent}`}>
      <div className={`${styles.Social_content_area}`}><Social /></div>
      
      <p className={`${styles.description}`}>AIRE © 2022. All Rights Reserved.</p>
    </div>
  
  );
}

export default FooterContent;
