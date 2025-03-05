import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names using clsx and tailwind-merge
 * This utility helps with conditional className props
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}