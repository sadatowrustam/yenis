const nodemailer = require('nodemailer');
exports.sendEmail = async(options) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
            user: 'rustamsadatov0@gmail.com',
            pass: 'smvamzeedrfahnkj',
        },
    });
    const mailOptions = {
        from: 'rustamsadatov0@gmail.com',
        to: 'hydyrowayhan7@gmail.com',
        subject: 'Biri "Yenish yoly " administratsiýasy bilen habarlaşmak isleýär',
        text: `ADY: ${options.name},\n\n EMAIL: ${options.email}, \n,\n\nHATY: ${options.text}`,
    };
    await transporter.sendMail(mailOptions);
};
// 792132719064 - vq0mdu7vvc7739lnvnnbs6dvc5hvn0an.apps.googleusercontent.com
// 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