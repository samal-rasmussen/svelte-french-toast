import type { Component as ComponentType, Snippet } from 'svelte';
import type { Toast, ToastPosition } from '../core/types';
import ToastIcon from './ToastIcon.svelte';
import ToastMessage from './ToastMessage.svelte';
interface Props {
    toast: Toast;
    position?: ToastPosition | undefined;
    style?: string;
    Component?: ComponentType<Record<string, unknown>> | undefined;
    children?: Snippet<[
        {
            ToastIcon: typeof ToastIcon;
            ToastMessage: typeof ToastMessage;
            toast: Toast;
        }
    ]>;
}
declare const ToastBar: ComponentType<Props, {}, "">;
type ToastBar = ReturnType<typeof ToastBar>;
export default ToastBar;
