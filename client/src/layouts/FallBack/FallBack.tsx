import type { FallbackProps } from "react-error-boundary";
import styles from "./FallBack.module.scss"

export default function FallBack({ error, resetErrorBoundary }: FallbackProps) {
    const message = error instanceof Error ? error.message : String(error);

    return <div className={`container`}>
        <div className={styles.errorBlock}>
            <h3>Щось пішло не так</h3>
            <p>{message}</p>
            <button onClick={resetErrorBoundary}>Спробувати знову</button>
        </div>
    </div>
}