export const pattern = /^[a-z0-9\.-]+@[a-z]{5,}\.([a-z]{3}|[a-z]{2}\.[a-z]{2})$/i;

export const inputField = document.querySelector("input.email");
export const inputFieldContainer = document.querySelector('.input-field');
export const inputIcon = document.querySelector('span');
export const labelElement = document.querySelector("label[for='email']");

export const invalidSettings = [
 [inputField, "invalid"],
 [inputFieldContainer, "border-invalid"],
 [inputIcon, "error"]
]

export const validSettings = [
 [inputField, "valid"],
 [inputFieldContainer, "border-valid"],
 [inputIcon, "valid"]
]
