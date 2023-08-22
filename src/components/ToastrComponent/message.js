export const Toast = ({ holat, manzil, text, progressbar, duration }) => {
  holat(text, {
    autoClose: duration,
    hideProgressBar: progressbar,
    position: manzil,
  });
};
