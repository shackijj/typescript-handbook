interface Bitrix {
    (node: string, obCache?: boolean): HTMLElement;
    addClass(node: string | HTMLElement, value: string): HTMLElement;
}

declare var BX: Bitrix;