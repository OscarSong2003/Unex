import React from 'react';
import { 
    FormControl, 
    FormLabel, 
    NumberInput, 
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper, 
} from "@chakra-ui/react";

const AmountInput = (): React.ReactElement => {
    return (
        <FormControl isRequired mt={5}>
                        <FormLabel htmlFor='amount'>Amount ($)</FormLabel>
                        <NumberInput max={10000000} min={0.01}>
                            <NumberInputField id='amount' />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
    )
}

export default AmountInput;