/// <reference path="Bitrix.d.ts" />
export function getElement(node: string, obCache?: boolean): HTMLElement {
    return BX(node, obCache);
}

export function addClass(ob: string | HTMLElement, value: string) {
    return BX.addClass(ob, value);
}