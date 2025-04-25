    // Convert the integer to its binary representation
   // Flip all bits (0s to 1s and 1s to 0s)
 // Convert the flipped binary representation back to a decimal number


function flippingBits(n: number): number {
    const binary = n.toString(2).padStart(32, '0');
    const flippedBinary = Array.from(binary, (bit) => (bit === '0' ? '1' : '0')).join('');
    const decimal = parseInt(flippedBinary, 2);
    return decimal;
}