import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility to block numbers in name input
export const isValidName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s]*$/; // Only allows letters and spaces
  return nameRegex.test(name);
};

// Utility to block letters in phone input
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]*$/; // Only allows numbers
  return phoneRegex.test(phone);
};

// Utility to validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
  return emailRegex.test(email);
};