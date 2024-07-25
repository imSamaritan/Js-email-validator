
export const pattern = /^[a-z0-9\.-]+@[a-z]{5,}\.([a-z]{3}|[a-z]{2}\.[a-z]{2})$/i;

/** @type {HTMLInputElement} */ 
export const inputField = document.querySelector("input.email");

/** @type {HTMLDivElement} */ 
export const inputFieldContainer = document.querySelector('.input-field');

/** @type {HTMLSpanElement} */ 
export const inputIcon = document.querySelector('span');

/** @type {HTMLLabelElement} */ 
export const labelElement = document.querySelector("label[for='email']");

/**
 * @type {(string)[][]}
 */
export const invalidSettings = [
 [inputField, "invalid"],
 [inputFieldContainer, "border-invalid"],
 [inputIcon, "error"]
]

/**
 * @type {(string)[][]}
 */
export const validSettings = [
 [inputField, "valid"],
 [inputFieldContainer, "border-valid"],
 [inputIcon, "valid"]
]
