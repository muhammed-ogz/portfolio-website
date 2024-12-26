const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const nodemailer = require("nodemailer"); // Nodemailer'ı dahil ediyoruz

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/comments", async (req, res) => {
    const { email, username, title, comment } = req.body;
    console.log(req.body);

    // E-posta gönderme fonksiyonu
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Kullanmak istediğiniz e-posta sağlayıcıyı belirtin
        auth: {
            user: 'haydaremre31@gmail.com', // Kendi e-posta adresinizi girin
            pass: 'txhy lvpx clvc kxjc', // E-posta şifrenizi girin (güvenlik nedeniyle, şifreyi çevre değişkenleri ile saklamanızı öneririm)
        }
    });

    const mailOptions = {
        from: email, // Gönderen kişi
        to: 'recipient@example.com', // Alıcı e-posta adresi
        subject: `Yeni Yorum: ${title}`, // E-posta konusu
        text: `
            Yeni bir yorum aldıysınız!

            Kullanıcı Adı: ${username}
            E-posta: ${email}
            Başlık: ${title}
            Yorum: ${comment}
        `, // E-posta içeriği
    };

    try {
        await transporter.sendMail(mailOptions); // E-posta gönderme işlemi
        res.status(200).send("Yorum başarıyla gönderildi ve e-posta gönderildi!");
    } catch (error) {
        console.error("E-posta gönderimi başarısız:", error);
        res.status(500).send("E-posta gönderimi başarısız oldu.");
    }
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
