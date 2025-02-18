export default (meters) => {
  const { t } = useI18n();
  
  const distance = Math.floor(meters);
  if (distance < 1000) return distance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + t('meter');
  return (distance / 1000).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + t("kilometer");
}
