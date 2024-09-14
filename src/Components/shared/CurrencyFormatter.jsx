
const CurrencyFormatter = ({amount}) => {
     // Define the formatter for currency
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN', // Nigerian Naira
    minimumFractionDigits: 0,
  });

  // Format the number
  const formattedAmount = formatter.format(amount);

  return (
    <>{formattedAmount}</>
  )
}

export default CurrencyFormatter