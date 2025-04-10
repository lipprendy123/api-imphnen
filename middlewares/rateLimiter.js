const rateLimit = require('express-rate-limit');

const testimonialLimiter = rateLimit({
  windowMs: 30 * 1000, // 30 detik
  max: 1, // 1 request per IP
  message: {
    success: false,
    message: "Tunggu 30 detik sebelum mengirim testimoni lagi."
  },
  standardHeaders: true,
  legacyHeaders: false
});

module.exports = {
  testimonialLimiter
};
