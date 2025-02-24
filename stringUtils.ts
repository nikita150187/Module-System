
//Using Function

/*export function reverseString(input: string): string {
 //   return input.split('').reverse().join('');
//}

export function countCharacters(input: string): number {
    return input.replace(/\s+/g, '').length;
}

export function capitalizeWords(input: string): string {
    return input.replace(/\b\w/g, char => char.toUpperCase());
}*/

//Using ARROW FUNCTION

export const reverseString = (input: string): string => {
    return input.split('').reverse().join('');
}

export const countCharacters = (Input: string): number =>{
    return Input.replace(/\s+/g, '').length;
}

export const capitalizeWords = (input: string): string =>{
    return input.replace(/\b\w/g, char => char.toUpperCase());
}