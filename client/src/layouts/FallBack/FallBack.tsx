import type { FallbackProps } from "react-error-boundary";

export default function FallBack({ error, resetErrorBoundary }: FallbackProps) {
    const message = error instanceof Error ? error.message : String(error);

    return <>
        <h2>Щось пішло не так</h2>
        <p>{message}</p>
        <button onClick={resetErrorBoundary}>Спробувати знову</button>
    </>
}