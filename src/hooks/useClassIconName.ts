import { StackItems, StackKey } from "../consts/StackItems"


export function useClassIconName(){
    const getIconClasses = (iconName: StackKey) : string => {
        return StackItems[iconName].classes;
    }

    return {
        getIconClasses
    }
}