import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

const LoaderContacts = () => {
  return <Loader className={styles.loader}
    type="ThreeDots"
    color="green"
    height={70}
    width={70}
    timeout={3000} //3 secs
      />
}

export default LoaderContacts