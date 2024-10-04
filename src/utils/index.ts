export function currencyFormat(price: number) {
  const { format } = Intl.NumberFormat("vn-VN", {
    style: "currency",
    currency: "VND",
  });

  const res = format(price);

  return res.slice(1) + " " + res[0];
}
