export default function (num, isPrice = true) {
  if (!isPrice) {
    const regex = /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/;

    const formattedNumber = num.replace(regex, "$1 ($2) $3-$4-$5");

    return formattedNumber;
  } else if (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  } else return;
}
