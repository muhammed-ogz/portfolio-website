# Portfolio Site

Bu proje, kişisel portföyünüzü oluşturmak için geliştirilmiş bir web uygulamasıdır. Uygulama, **ReactJS**, **ViteJS**, **PostCSS**, **TailwindCSS**, **CORS**, **NodeJS**,**ExpressJS** ve **NodeMailer** gibi modern teknolojileri kullanarak geliştirilmiştir. Bu site, kişisel projelerinizi sergilemenize ve kullanıcıların yorum yaparak geri bildirimde bulunmalarına olanak tanır.

## Proje Yapısı

Bu proje, iki ana kısımdan oluşmaktadır:
1. **Frontend** - ReactJS, ViteJS ve TailwindCSS kullanılarak oluşturulmuş kullanıcı arayüzü.
2. **Backend** - Node.js, ExpressJS ve Nodemailer kullanarak e-posta gönderimi sağlayan bir API.

## Özellikler

- **Portföy Sayfası**: ReactJS kullanarak dinamik bir portföy oluşturma.
- **Yorum Gönderme**: Kullanıcılar, projeler hakkında yorum yapabilir. Yorumlar, NodeMailer kullanarak e-posta ile gönderilir.
- **Responsive Tasarım (Çok Yakında..)**: TailwindCSS ile mobil uyumlu ve duyarlı tasarım.
- **Hızlı Geliştirme Süreci**: ViteJS ile hızlı bir geliştirme süreci ve otomatik yenileme.
- **CORS Desteği**: Farklı portlarda çalışan frontend ve backend arasındaki iletişim için CORS yapılandırması.

## Teknolojiler

- **Frontend**:
  - ReactJS
  - ViteJS
  - TailwindCSS
  - PostCSS
  - React Router (isteğe bağlı, sayfalar arasında geçiş için)

- **Backend**:
  - Node.js
  - Express.js
  - Nodemailer
  - CORS

## Kurulum

Proje, frontend ve backend olmak üzere iki ana bölümden oluşmaktadır. Her iki bölüm için ayrı kurulum adımlarını takip etmeniz gerekecek.

### Proje Kurulumu

   ```bash
   FrontEnd Kurulumu

   cd client
   npm i
   npm run dev

   Backend Kurulumu 
   
   cd api
   npm i
   npm run start