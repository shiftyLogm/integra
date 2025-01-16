import { TextInputProps } from "react-native";
import { stylesMontserrat } from "./MontserratText";
import MaskInput, { Masks } from 'react-native-mask-input';

// Essa interface vai aceitar apenas keys que sejam do masks
interface MonteserratInputMasked extends TextInputProps {
    mask?: keyof typeof Masks;
}


export const MontserratMaskedInput = ({ mask, ...props }: MonteserratInputMasked) => {
    const maskValue = mask ? Masks[mask] : undefined;

    return (
        <MaskInput
            {...props}
            style={[stylesMontserrat.montserrat400, props.style]}
            mask={maskValue}
        />
    );
};