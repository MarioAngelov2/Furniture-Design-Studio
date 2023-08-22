import { ErrorBoundary } from "react-error-boundary";

export function ErrorFallBack({ error, resetErrorBoundary }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="text-center">
                <h1 className="text-5xl font-semibold mb-4">Something went wrong!</h1>
                <p className="text-2xl text-gray-400 font-semibold">{error.message}</p>
                <button className="mt-4 border px-4 py-2 rounded-3xl bg-black text-white tracking-wider" onClick={resetErrorBoundary}>Reload page</button>
            </div>
        </div>
    );
}
