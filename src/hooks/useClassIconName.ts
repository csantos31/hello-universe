import { StackItemEnum } from "../types/StackItemEnum";

export function useClassIconName(){
    const getIconClasses = (iconName: string) : string => {
        if(iconName.includes(StackItemEnum.js)) return 'icon javascript-icon'
        if(iconName.includes(StackItemEnum.python)) return 'icon python-icon'
        if(iconName.includes(StackItemEnum.css)) return 'icon css-icon'
        if(iconName.includes(StackItemEnum.html)) return 'icon html-icon'
        return 'icon dev-icon'
    }

    return {
        getIconClasses
    }
}