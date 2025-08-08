import type { ToastOptions, ToastPosition } from '../core/types';
interface Props {
    reverseOrder?: boolean;
    position?: ToastPosition;
    toastOptions?: ToastOptions | undefined;
    gutter?: number;
    containerStyle?: string | undefined;
    containerClassName?: string | undefined;
}
declare const Toaster: import("svelte").Component<Props, {}, "">;
type Toaster = ReturnType<typeof Toaster>;
export default Toaster;
