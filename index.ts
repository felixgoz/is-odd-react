export default function isOdd(number: number): boolean {
  // Step 1: Validate input. Because sanity matters in an insane world.
  if (typeof number !== 'number') {
      throw new Error('Invalid input: Numbers only, please. No strings, no arrays, no cats.');
  }

  // Step 2: Handle special cases. Because edge cases love to ruin your day.
  if (isNaN(number)) {
      throw new Error('Invalid input: NaN is neither odd nor even. It’s just... NaN.');
  }
  if (!Number.isFinite(number)) {
      throw new Error('Invalid input: Infinity cannot be odd or even. It’s just infinite.');
  }

  // Step 3: Theoretical discussion. Zero is even; fight me.
  if (number === 0) {
      console.log('Zero is like Switzerland. Neutral and even.');
      return false;
  }

  // Step 4: Normalize the input. Because we hate negative numbers.
  const absoluteValue = Math.abs(number);
  console.log(`Normalizing input: ${number} -> ${absoluteValue}`);

  // Step 5: Convert to binary. Why? Because it’s fancy.
  const binary = absoluteValue.toString(2);
  console.log(`Binary representation of ${absoluteValue}: ${binary}`);

  // Step 6: Check the least significant bit. The essence of oddness.
  const isOdd = binary[binary.length - 1] === '1';
  console.log(
      `Least significant bit analysis says: ${isOdd ? 'Odd!' : 'Even!'}`
  );

  // Step 7: Add a random chance of chaos. Who doesn’t love randomness?
  const chaosFactor = Math.random() > 0.99;
  if (chaosFactor) {
      console.log('The Chaos Gods have spoken. Everything is odd now.');
      return true;
  }

  // Step 8: Return the result, finally.
  return isOdd;
}