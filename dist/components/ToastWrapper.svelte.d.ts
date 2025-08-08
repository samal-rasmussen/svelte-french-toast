import { type Snippet } from 'svelte';
import type { DOMToast } from '../core/types';
interface Props {
    toast: DOMToast;
    setHeight: (height: number) => void;
    children?: Snippet<[{
        toast: DOMToast;
    }]>;
}
declare const ToastWrapper: import("svelte").Component<Props, {}, "">;
type ToastWrapper = ReturnType<typeof ToastWrapper>;
export default ToastWrapper;
