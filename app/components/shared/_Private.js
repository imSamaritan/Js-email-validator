export const pattern = /^[a-z0-9\.-]+@[a-z]{5,7}\.[a-z]{3}$/i;

export const inputField = document.querySelector("input.email");
export const inputFieldContainer = document.querySelector('.input-field');
export const inputIcon = document.querySelector('span');

export const invalidSettings = [
 [inputField, "invalid"],
 [inputFieldContainer, "border-invalid"],
 [inputIcon, "invalid"]
]

export const validSettings = [
 [inputField, "valid"],
 [inputFieldContainer, "border-valid"],
 [inputIcon, "valid"]
]
